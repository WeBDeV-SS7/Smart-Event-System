
## 🚀🚀Smart Event Management System

A full-stack web application designed to streamline event registration, management, and tracking. This project features a robust Django backend coupled with a responsive Frontend interface.

## 🚀 Features

User Authentication: Secure registration and login modules for Admins and Participants.

Event Management: Create, edit, and delete events with real-time updates.

Dashboard: Personalized views for tracking registered events.

Responsive Design: Optimized for both desktop and mobile viewing.

Database Integration: Scalable MySQL/PostgreSQL storage for event and user records.

## 🛠️ Tech Stack

Frontend: HTML5, CSS3, JavaScript (Pinterest-inspired minimalist design).

Backend: Python 3.x, Django Framework.

Database: MySQL.

Version Control: Git & GitHub.

## 📂 Project Structure

Plaintext
Smart-Event-System/
│
├── backend/ # Django Project & Apps (Models, Views, Admin)
│ ├── manage.py
│ └── event_system/ # Core logic and settings
│
├── frontend/ # UI Components (HTML, CSS, JS)
│ ├── index.html
│ ├── css/
│ └── js/
│
└── README.md # Project Documentation
⚙️ Installation & Setup

1. Prerequisites
   Ensure you have Python and Git installed on your machine.

2. Clone the Repository
   Bash
   git clone https://github.com/WeBDeV-SS7/Smart-Event-System.git
   cd Smart-Event-System
3. Backend Setup (Django)
   Bash
   cd backend

# Create a virtual environment

python -m venv venv

# Activate it (Windows)

source venv/Scripts/activate

# Install dependencies

pip install -r requirements.txt

# Run Migrations

python manage.py migrate

# Start the server

python manage.py runserver 4. Frontend Setup
Simply open frontend/index.html in your preferred web browser to view the UI.

## 🤝 The Team

Saniya – Frontend Design & UI/UX Development.
Moizuddin – Backend Architecture & Database Management.
=======
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

---
## 👨‍💻 Developer

## Saniya Shereen

Frontend developed as part of EventSphere full-stack project (collaborative development).

## 🛠️ EventSphere – Backend Architecture
## 📌 Overview
The EventSphere backend is a robust RESTful API built using the Python Django framework and MySQL. It serves as the core engine for the system, handling data persistence, user authentication, and the business logic required to bridge the 90s vintage/Pinterest-inspired frontend with a secure database.

## 🎨 Tech Stack
Language: Python 3.x

Framework: Django & Django REST Framework (DRF)

Database: MySQL

Authentication: JWT (JSON Web Tokens) or Session-based Auth

Tools: Postman (for API testing), Git Bash

## ✨ Features
User Management: Secure registration and login logic using Django's User model and custom serializers.py.

Admin Dashboard: Customized Admin module with an ID column and specialized tracking for event organizers.

Database Schema: Optimized ER diagrams and MySQL schemas for handling "Employee" and "Event" records efficiently.

API Security: CORS (Cross-Origin Resource Sharing) configurations to allow secure communication with the frontend.

Robust Error Handling: Debugged backend registration flows to resolve 400 Bad Request errors during testing.

## 🔗 API Endpoints (Backend Logic)
POST /api/register/ → Handles user creation and data validation.

POST /api/token/ → Generates authentication tokens for secure sessions.

GET /api/events/ → Queries MySQL database to return event lists as JSON.

POST /api/admin/add-event/ → Exclusive endpoint for Admin-level event creation.

## 📂 Project Structure (Backend Focus)
Plaintext
/backend
├── core/               (Main project settings)
├── api/                (App for REST API logic)
│   ├── models.py       (MySQL Database models)
│   ├── serializers.py  (Data conversion logic)
│   ├── urls.py         (Route definitions)
│   └── views.py        (Business logic & logic handling)
├── manage.py           (Django management script)
└── requirements.txt    (Project dependencies)

## ⚙️ How it Works (Backend Side)
Server Startup: The Django development server runs on localhost:8000.

Request Handling: When a request arrives from the frontend (e.g., from your HP Pavilion local environment), the backend validates the headers.

Data Processing: Python logic processes the request, interacts with the MySQL database, and returns the appropriate status code (200 OK, 201 Created, etc.).

## 👨‍💻 Developer
## Mohammed Moizuddin

Backend Architect & Database Manager
Full-stack collaborator on the Smart Event System project.

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



