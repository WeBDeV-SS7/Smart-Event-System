// ============================================================
// EventSphere — Shared Data & Utilities
// ============================================================

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
    description:
      'Explore the frontier of artificial intelligence with leading researchers, engineers, and product visionaries from around the world.',
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
    description:
      'Three stages, 40 artists, one unforgettable night celebrating world music across genres and generations.',
    tags: ['Music', 'Live', 'Entertainment'],
  },
  {
    id: 3,
    title: 'Startup Growth Conference',
    category: 'Business',
    date: 'August 5, 2025',
    time: '10:00 AM – 5:00 PM',
    location: 'ExCeL London, UK',
    price: 199,
    spots: 1500,
    spotsLeft: 500,
    emoji: '📈',
    bg: 'linear-gradient(135deg,#141826 0%,#0f2a1a 100%)',
    accent: '#43e97b',
    description:
      'Connect with investors, founders, and growth experts. Pitch sessions, workshops, and panel discussions all day.',
    tags: ['Startup', 'Growth', 'Investors'],
  },
  {
    id: 4,
    title: 'UX Design Masterclass',
    category: 'Design',
    date: 'August 22, 2025',
    time: '9:30 AM – 4:30 PM',
    location: 'Design District, Miami',
    price: 79,
    spots: 200,
    spotsLeft: 38,
    emoji: '🎨',
    bg: 'linear-gradient(135deg,#141826 0%,#1a0f2e 100%)',
    accent: '#f6c90e',
    description:
      'A full-day intensive masterclass covering design systems, user research, and prototyping with industry leaders.',
    tags: ['UX', 'Design', 'Workshop'],
  },
  {
    id: 5,
    title: 'Blockchain & Web3 Forum',
    category: 'Technology',
    date: 'September 10, 2025',
    time: '9:00 AM – 7:00 PM',
    location: 'Singapore Expo',
    price: 249,
    spots: 2500,
    spotsLeft: 900,
    emoji: '⛓️',
    bg: 'linear-gradient(135deg,#141826 0%,#0f1a2e 100%)',
    accent: '#4facfe',
    description:
      'Dive deep into decentralized finance, NFTs, DAOs, and the infrastructure powering the next iteration of the internet.',
    tags: ['Blockchain', 'Web3', 'DeFi', 'Crypto'],
  },
  {
    id: 6,
    title: 'Women in Leadership Summit',
    category: 'Leadership',
    date: 'September 28, 2025',
    time: '8:30 AM – 5:00 PM',
    location: 'Four Seasons, Chicago',
    price: 129,
    spots: 800,
    spotsLeft: 220,
    emoji: '👩‍💼',
    bg: 'linear-gradient(135deg,#141826 0%,#2a1025 100%)',
    accent: '#fa709a',
    description:
      'Empowering women executives with strategies, mentorship, and networking opportunities to advance their careers.',
    tags: ['Leadership', 'Women', 'Networking'],
  },
];

// Render a single event card
function renderEventCard(event) {
  const pct = Math.round(((event.spots - event.spotsLeft) / event.spots) * 100);
  return `
  <div class="col-lg-4 col-md-6">
    <div class="es-event-card">
      <div class="es-event-img" style="background:${event.bg}">
        <span style="font-size:3.5rem">${event.emoji}</span>
        <span class="position-absolute top-0 end-0 m-3 badge text-white" style="background:rgba(0,0,0,.5);backdrop-filter:blur(6px)">
          ${event.category}
        </span>
      </div>
      <div class="es-event-body">
        <div class="es-event-category">${event.category}</div>
        <div class="es-event-title">${event.title}</div>
        <div class="es-event-meta">
          <i class="bi bi-calendar3 me-1"></i>${event.date} &nbsp;
          <i class="bi bi-geo-alt me-1"></i>${event.location.split(',')[0]}
        </div>
        <div class="mb-1 d-flex justify-content-between">
          <small class="text-muted" style="font-size:.72rem">${event.spotsLeft} spots left</small>
          <small class="text-muted" style="font-size:.72rem">${pct}% full</small>
        </div>
        <div class="es-progress-bar mb-2">
          <div class="es-progress-fill" style="width:${pct}%; background:${event.accent}"></div>
        </div>
        <div class="d-flex flex-wrap gap-1 mt-1">
          ${event.tags.map((t) => `<span class="badge" style="background:rgba(255,255,255,.07);color:#9ca3af;font-size:.65rem">${t}</span>`).join('')}
        </div>
      </div>
      <div class="es-event-footer">
        <span class="es-event-price">$${event.price}</span>
        <a href="event-detail.html?id=${event.id}" class="btn btn-es-primary btn-sm px-3">Register</a>
      </div>
    </div>
  </div>`;
}

// Format number with commas
function formatNumber(n) {
  return n.toLocaleString();
}

// Get query param
function getParam(name) {
  return new URLSearchParams(window.location.search).get(name);
}
