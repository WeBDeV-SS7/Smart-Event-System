console.log('api.js is loaded and running!');

const BASE_URL = 'http://127.0.0.1:8000/api';

/**
 * Core API Request Handler
 */
async function apiRequest(endpoint, method = 'GET', data = null) {
  const url = `http://127.0.0.1:8000/api${endpoint}`;
  const token = localStorage.getItem('token');

  const headers = {
    'Content-Type': 'application/json',
  };

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

  const response = await fetch(url, options);

  // This is the critical part: handle the response correctly
  if (!response.ok) {
    const errorData = await response.json();
    throw errorData;
  }

  return await response.json();
}

/**
 * API Helper Functions
 */
const getEvents = () => apiRequest('/events/');
const register = (data) => apiRequest('/register/', 'POST', data);
const login = (data) => apiRequest('/login/', 'POST', data);

/**
 * Function to load events and display them
 */
async function loadEventsFromAPI() {
  console.log('Attempting to fetch events...');
  try {
    const events = await getEvents();
    console.log('Backend Data Received:', events);

    // This is where you connect to your HTML.
    // Example: if you have a <div id="event-list"></div>
    const eventList = document.getElementById('event-list');
    if (eventList) {
      eventList.innerHTML = events
        .map(
          (event) => `
            <div class="event-card">
                <h3>${event.title}</h3>
                <p>${event.description}</p>
            </div>
        `,
        )
        .join('');
    }
  } catch (error) {
    console.error(
      'Integration failed. Check if Django is running at :8000',
      error,
    );
  }
}

/**
 * Initialization
 */
document.addEventListener('DOMContentLoaded', () => {
  console.log('DOM fully loaded. Initializing API call...');
  loadEventsFromAPI();
});
