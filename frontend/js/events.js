// events.js - Event Display and Registration Logic
console.log('events.js loaded');

/**
 * Fetch and display all events
 */
async function loadEventsFromAPI() {
  const container =
    document.getElementById('homeEventCards') ||
    document.getElementById('browseEventsContainer');
  if (!container) return;

  try {
    // Uses the helper from api.js
    const events = await apiRequest('/events/');
    console.log('Fetched events:', events);

    if (!events || events.length === 0) {
      container.innerHTML =
        "<p class='text-white text-center'>No events available</p>";
      return;
    }

    container.innerHTML = events.map(renderEventCard).join('');
  } catch (error) {
    container.innerHTML = `<p class='text-danger text-center'>${error.detail || 'Failed to load events'}</p>`;
  }
}

/**
 * HTML Template for Event Cards
 */
function renderEventCard(event) {
  return `
        <div class="col-md-4 mb-4">
            <div class="card text-white bg-dark h-100 shadow">
                <div class="card-body d-flex flex-column">
                    <h5 class="card-title text-primary">${event.title || 'Untitled Event'}</h5>
                    <p class="card-text small flex-grow-1">${event.description || 'No description available.'}</p>
                    <p class="text-muted small">Date: ${event.date || 'TBA'}</p>
                    <button class="btn btn-primary w-100 mt-2" onclick="handleRegistration(${event.id})">
                        Register Now
                    </button>
                </div>
            </div>
        </div>
    `;
}

/**
 * Handle Event Registration
 */
async function handleRegistration(eventId) {
  const userId = localStorage.getItem('user_id');
  if (!userId) {
    alert('Please login first');
    window.location.href = 'login.html';
    return;
  }

  try {
    const response = await apiRequest('/register-event/', 'POST', {
      event_id: eventId,
    });
    alert(response.message || 'Registered successfully!');
    window.location.href = 'my-events.html';
  } catch (error) {
    alert(error.error || 'Registration failed. You may already be registered.');
  }
}

// Auto-run when the DOM is ready
document.addEventListener('DOMContentLoaded', loadEventsFromAPI);
