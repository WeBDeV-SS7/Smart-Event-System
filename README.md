# 🎉 EventSphere – Frontend

## 📌 Overview

EventSphere frontend is a modern event discovery and registration UI built using HTML, CSS, Bootstrap, and Vanilla JavaScript. It connects with a Django REST API backend to fetch and display event data dynamically.

---

## 🎨 Tech Stack

- HTML5
- CSS3 (Custom Dark Theme + Animations)
- Bootstrap 5
- Bootstrap Icons
- Vanilla JavaScript (ES6+)
- Fetch API (for backend communication)

---

## ✨ Features

- Responsive and modern UI design
- Dynamic event cards rendered using JavaScript
- API integration with Django backend
- Event listing page with progress indicators
- Login and registration UI
- Event registration flow (API-based)
- Clean dark theme with gradient UI components
- Reusable components using JS functions

---

## 🔗 API Integration

Frontend communicates with backend using REST APIs:

- `GET /api/events/` → Fetch all events
- `POST /api/login/` → User login (backend dependent)
- `POST /api/register/` → User registration (backend dependent)
- `POST /api/register-event/` → Event registration

---

## 📂 Project Structure

/frontend
│── index.html
│── login.html
│── register.html
│── events.html
│
├── css/
│ └── style.css
│
├── js/
│ ├── api.js
│ ├── auth.js
│ └── events.js
│ └── main.js
│
└

---

## ⚙️ How it works

````bash
git clone <repo-link>
cd project-folder


Run Backend


git checkout backend
pip install -r requirements.txt
python manage.py runserver


git checkout frontend
open index.html

Run:

```bash
git add README.md
git commit -m "Clean README (removed HTML issues)"
git push origin main

Run Frontend
1. User opens the website
2. Frontend calls Django API
3. Events are fetched dynamically
4. JavaScript renders event cards
5. User can login/register and register for events

---

## 🚀 Status

Frontend is fully functional and integrated with backend APIs (partially implemented).

---

🤝 Collaboration
frontend branch → UI development
backend branch → API development

````

## 👨‍💻 Developer

Saniya Shereen
Frontend developed as part of EventSphere full-stack project (collaborative development).
