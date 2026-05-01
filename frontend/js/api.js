const BASE_URL = 'http://127.0.0.1:8000/api';

async function apiRequest(endpoint, method = 'GET', data = null, token = null) {
  try {
    const options = {
      method,
      headers: {
        'Content-Type': 'application/json',
      },
    };

    if (token) {
      options.headers['Authorization'] = `Bearer ${token}`;
    }

    if (data) {
      options.body = JSON.stringify(data);
    }

    const res = await fetch(BASE_URL + endpoint, options);

    if (!res.ok) {
      throw new Error(`API Error: ${res.status}`);
    }

    return await res.json();
  } catch (error) {
    console.error('API Request Failed:', error);
    throw error;
  }
}

// Helpers
export const getEvents = () => apiRequest('/events/');
export const register = (data) => apiRequest('/register/', 'POST', data);
export const login = (data) => apiRequest('/login/', 'POST', data);

export default apiRequest;
