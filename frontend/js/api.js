// api.js - Core API Handler
console.log('api.js is loaded and running!');

const BASE_URL = 'http://127.0.0.1:8000/api';

/**
 * Core API Request Handler
 */
async function apiRequest(endpoint, method = 'GET', data = null) {
  const url = `${BASE_URL}${endpoint}`;

  // Strict token check to prevent "Invalid token" 401 errors
  let token = localStorage.getItem('token');
  if (!token || token === 'null' || token === 'undefined') {
    token = null;
  }

  const headers = {
    'Content-Type': 'application/json',
  };

  // Only attach the header if a valid token exists
  if (token) {
    headers['Authorization'] = `Token ${token}`;
  }

  const options = {
    method,
    headers,
  };

  if (data) {
    options.body = JSON.stringify(data);
  }

  try {
    const response = await fetch(url, options);

    // Handle the case where the server sends back HTML (404 page) instead of JSON
    const contentType = response.headers.get('content-type');
    if (!response.ok) {
      if (contentType && contentType.includes('application/json')) {
        const errorData = await response.json();
        throw errorData;
      } else {
        throw {
          detail: `Server error: ${response.status}. Check your Django URLs.`,
        };
      }
    }

    return await response.json();
  } catch (error) {
    console.error(`API Error (${endpoint}):`, error);
    throw error;
  }
}
