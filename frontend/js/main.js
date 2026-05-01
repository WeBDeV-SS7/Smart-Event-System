const eventsData = [
  {
    id: 1,
    title: 'AI & Machine Learning Summit 2025',
    category: 'Technology',
    date: 'June 14, 2025',
    time: '9:00 AM – 6:00 PM',
    location: 'Jacob Javits Center, New York',
    price: 149,
    spots: 3200,
    spotsLeft: 480,
    emoji: '🤖',
    bg: 'linear-gradient(135deg,#141826 0%,#1e1040 100%)',
    accent: '#7c5cfc',
    description: 'Explore the frontier of AI with global experts.',
    tags: ['AI', 'ML', 'Research', 'Networking'],
  },
  {
    id: 2,
    title: 'Global Music Festival',
    category: 'Music',
    date: 'July 20, 2025',
    time: '2:00 PM – 11:00 PM',
    location: 'Staples Center, Los Angeles',
    price: 89,
    spots: 12000,
    spotsLeft: 2100,
    emoji: '🎵',
    bg: 'linear-gradient(135deg,#141826 0%,#1a1040 100%)',
    accent: '#f093fb',
    description: 'Three stages, 40 artists, one night.',
    tags: ['Music', 'Live', 'Entertainment'],
  },
  // (rest unchanged)
];

// ===============================
// Render Event Card
// ===============================
function renderEventCard(event) {
  const pct = Math.round(((event.spots - event.spotsLeft) / event.spots) * 100);

  return `
  <div class="col-lg-4 col-md-6">
    <div class="es-event-card">
      <div class="es-event-img" style="background:${event.bg}">
        <span style="font-size:3.5rem">${event.emoji}</span>
        <span class="position-absolute top-0 end-0 m-3 badge text-white"
          style="background:rgba(0,0,0,.5);backdrop-filter:blur(6px)">
          ${event.category}
        </span>
      </div>

      <div class="es-event-body">
        <div class="es-event-category">${event.category}</div>
        <div class="es-event-title">${event.title}</div>

        <div class="es-event-meta">
          ${event.date} • ${event.location}
        </div>

        <div class="mb-1 d-flex justify-content-between">
          <small>${event.spotsLeft} spots left</small>
          <small>${pct}% full</small>
        </div>

        <div class="es-progress-bar mb-2">
          <div class="es-progress-fill"
            style="width:${pct}%; background:${event.accent}">
          </div>
        </div>

        <div class="d-flex flex-wrap gap-1 mt-1">
          ${event.tags
            .map(
              (t) =>
                `<span class="badge" style="background:rgba(255,255,255,.07);color:#9ca3af;font-size:.65rem">${t}</span>`,
            )
            .join('')}
        </div>
      </div>

      <div class="es-event-footer">
        <span class="es-event-price">$${event.price}</span>
        <a href="event-detail.html?id=${event.id}" class="btn btn-es-primary btn-sm px-3">
          Register
        </a>
      </div>
    </div>
  </div>`;
}

// ===============================
// Utils
// ===============================
function formatNumber(n) {
  return n.toLocaleString();
}

function getParam(name) {
  return new URLSearchParams(window.location.search).get(name);
}

// ===============================
// API LOADER (FINAL VERSION)
// ===============================
async function loadEventsFromAPI() {
  const container = document.getElementById('events-container');
  if (!container) return;

  try {
    const events = await apiRequest('/events');

    if (!Array.isArray(events) || events.length === 0) {
      throw new Error('Empty events');
    }

    container.innerHTML = events.map(renderEventCard).join('');
  } catch (error) {
    console.error('API load failed:', error);

    // fallback to static data
    container.innerHTML = eventsData.map(renderEventCard).join('');
  }
}

// ===============================
// INIT
// ===============================
document.addEventListener('DOMContentLoaded', loadEventsFromAPI);
