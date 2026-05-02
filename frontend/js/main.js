// ===============================
// EVENT CARD RENDER
// ===============================
function renderEventCard(event) {
  const pct = Math.round(((event.spots - event.spotsLeft) / event.spots) * 100);

  return `
  <div class="col-lg-4 col-md-6">
    <div class="es-event-card">
      <div class="es-event-img" style="background:${event.bg || '#141826'}">
        <span style="font-size:3.5rem">${event.emoji || '🎉'}</span>

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
          <small>${event.spotsLeft || 0} spots left</small>
          <small>${pct || 0}% full</small>
        </div>

        <div class="es-progress-bar mb-2">
          <div class="es-progress-fill"
            style="width:${pct}%; background:${event.accent || '#7c5cfc'}">
          </div>
        </div>

        <div class="d-flex flex-wrap gap-1 mt-1">
          ${(event.tags || [])
            .map(
              (t) =>
                `<span class="badge" style="background:rgba(255,255,255,.07);color:#9ca3af;font-size:.65rem">${t}</span>`,
            )
            .join('')}
        </div>
      </div>

      <div class="es-event-footer">
        <span class="es-event-price">$${event.price || 0}</span>

        <a href="event-detail.html?id=${event.id}" class="btn btn-es-primary btn-sm px-3">
          Register
        </a>
      </div>
    </div>
  </div>`;
}

// ===============================
// LOAD EVENTS FROM API
// ===============================
async function loadEventsFromAPI() {
  const container = document.getElementById('events-container');
  if (!container) return;

  // 🔄 loading state (IMPORTANT UX FIX)
  container.innerHTML = `
    <div class="text-center py-5 w-100">
      <div class="spinner-border text-light"></div>
      <p class="mt-2 text-muted">Loading events...</p>
    </div>
  `;

  try {
    const events = await apiRequest('/events/');

    if (!Array.isArray(events)) {
      throw new Error('Invalid API response');
    }

    container.innerHTML = events.map(renderEventCard).join('');
  } catch (error) {
    console.error('API load failed:', error);

    container.innerHTML = `
      <div class="text-center py-5 w-100">
        <h5>Failed to load events</h5>
        <p class="text-muted">Showing offline data</p>
      </div>
    `;

    // fallback (ONLY if needed)
    if (typeof eventsData !== 'undefined') {
      container.innerHTML = eventsData.map(renderEventCard).join('');
    }
  }
}

// ===============================
// INIT
// ===============================
document.addEventListener('DOMContentLoaded', loadEventsFromAPI);
