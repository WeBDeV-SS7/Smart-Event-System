// 🔥 events.js (FIXED + CLEAN API VERSION)

console.log('events.js loaded');

// ============================
// CONFIG
// ============================
const BASE_URL = 'http://127.0.0.1:8000/api';

// ============================
// FETCH EVENTS FROM BACKEND
// ============================
async function loadEventsFromAPI() {
  console.log('loadEventsFromAPI called');

  const container = document.getElementById('homeEventCards');
  if (!container) return;

  try {
    const response = await fetch(`${BASE_URL}/events/`);
    const events = await response.json();

    console.log('Fetched events from backend:', events);

    // If no events
    if (!events || events.length === 0) {
      container.innerHTML = "<p class='text-white'>No events available</p>";
      return;
    }

    container.innerHTML = events.map(renderEventCard).join('');
  } catch (error) {
    console.error('Error fetching events:', error);
    container.innerHTML = "<p class='text-danger'>Failed to load events</p>";
  }
}

// ============================
// RENDER EVENT CARD
// ============================
function renderEventCard(event) {
  return `
        <div class="col-md-4">
            <div class="card text-white bg-dark mb-3">
                <div class="card-body">
                    <h5 class="card-title">${event.title || 'No Title'}</h5>
                    <p class="card-text">${event.description || 'No Description'}</p>
                    <button class="btn btn-primary" onclick="registerEvent(${event.id})">
                        Register
                    </button>
                </div>
            </div>
        </div>
    `;
}

// ============================
// REGISTER EVENT
// ============================
function registerEvent(eventId) {
  const userId = localStorage.getItem('user_id');

  if (!userId) {
    alert('Please login first');
    window.location.href = 'login.html';
    return;
  }

  fetch(`${BASE_URL}/register-event/`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      user_id: userId,
      event_id: eventId,
    }),
  })
    .then((res) => res.json())
    .then((data) => {
      console.log('Success:', data);
      alert('Event Registered Successfully!');
    })
    .catch((err) => {
      console.error('Error:', err);
      alert('Error registering event');
    });
}

// ============================
// AUTO RUN ON PAGE LOAD
// ============================
document.addEventListener('DOMContentLoaded', loadEventsFromAPI);
