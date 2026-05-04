# 🚀 Smart Event System — Backend

Hi there!! 👋  
This is the **backend service** for our collaborative full-stack project.

---

## ⚙️ Backend Overview

A scalable, production-ready backend service for managing events, users, and registrations, built with Django and Django REST Framework.

---

## 🛠 Tech Stack

- ⚙️ Backend Framework: Python, Django
- 🔗 API: Django REST Framework
- 🗄️ Database: SQLite (Development) / MySQL (Production)

---

## 📁 Project Structure

├── backend/                      ← Backend (Django API )
│   │
│   ├── manage.py
│   │
│   ├── smart_event/              ← Main Django Project
│   │   ├── __init__.py
│   │   ├── settings.py
│   │   ├── urls.py
│   │   ├── asgi.py
│   │   └── wsgi.py
│   │
│   ├── api/                      ← Django App (Events API)
│   │   ├── __init__.py
│   │   ├── admin.py
│   │   ├── apps.py
│   │   ├── models.py              # Database schema
│   │   ├── views.py               # Business logic
│   │   ├── urls.py                # API routing
│   │   ├── serializers.py         # JSON transformation
│   │   └── migrations/
│   │
│   └── db.sqlite3 (ignored in Git)

---

🎯 Key Features
 -  RESTful API architecture
 -  Full CRUD operations for events
 -  Clean and modular codebase
 -  Authentication-ready system
 -  Fast and optimized responses
 -  Easy frontend integration

---

## 🔗 API Endpoints

| Method | Endpoint                 | Description    |
| ------ | ------------------------ | -------------- |
| GET    | /api/events/             | Get all events |
| POST   | /api/events/create/      | Create event   |
| PUT    | /api/events/{id}/        | Update event   |
| DELETE | /api/events/delete/{id}/ | Delete event   |

---

## 🚀 Setup

```bash
pip install -r requirements.txt
python manage.py migrate
python manage.py runserver
```

## 🌐 API Test

http://127.0.0.1:8000/api/events/

---

# 🚀 STEP 2 — SAVE FILE

After replacing content:
👉 SAVE README.md

---

# 🚀 STEP 3 — MARK FIXED

```bash id="s1"
git add README.md
```

## 🚀 STEP 4 — CONTINUE REBASE
git rebase --continue
🚀 STEP 5 — PUSH
git push origin backend

---

## 🤝 Collaboration
backend branch → API & database
frontend branch → UI
main → final integration

---

## 👨‍💻 Developer

**Mohammed Moiz**
Backend Developer
