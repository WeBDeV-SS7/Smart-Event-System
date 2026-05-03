===========================================================
SMART EVENT SYSTEM - FRONTEND MODULE
===========================================================

## PROJECT OVERVIEW:

The Smart Event System is a full-stack web application
designed to streamline event management, specifically for
college-level events like "Aagaaz." This module handles
the user interface, authentication flows, and event
interactions.

## VISUAL AESTHETIC:

- Style: 90s Vintage / Pinterest-inspired.
- Color Theme: Bold Red and Black (Aagaaz Theme).
- Design: Grainy textures, retro typography, and high-contrast
  visuals.

## FEATURES:

- User Authentication: Dedicated Login and Registration
  pages with real-time API validation.
- Event Discovery: Dashboard to view upcoming college
  events (index.html, events.html).
- Personalized Experience: "My Events" section for tracked
  user activity.
- Responsive Design: Optimized for seamless viewing on
  laptops (like HP Pavilion series) and mobile devices.

## TECHNICAL ARCHITECTURE (FRONTEND):

- Languages: HTML5, CSS3, JavaScript (ES6+).
- API Logic: Uses Fetch API in `js/api.js` to communicate
  with the Django Backend.
- State Management: Handles auth tokens and user sessions
  via `js/auth.js`.

## DIRECTORY STRUCTURE:

/frontend
├── css/
│ └── style.css (90s Vintage Styling)
├── js/
│ ├── api.js (Centralized Fetch logic)
│ ├── auth.js (Registration/Login handlers)
│ └── main.js (UI interactions)
├── index.html (Landing Page)
├── login.html (User Access)
├── register.html (Account Creation)
├── events.html (Event List)
└── my-events.html (User Dashboard)

## SETUP INSTRUCTIONS:

1. Ensure the Django Backend server is running (usually
   at http://127.0.0.1:8000).
2. Open index.html in a web browser.
3. Test the registration flow (Ensure CORS is enabled
   on the backend).

## DEVELOPER:

[Saniya Shereen/WeBDeV-SS7]
Batch: 2023-2027
Project Year: 2026
===========================================================
