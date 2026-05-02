# 🚀 Smart Event System — Backend

Hi there!! 👋  
This is the **backend service** for our collaborative full-stack project.

---

## ⚙️ Backend Overview

This backend is built using **Django** and provides REST APIs for managing events, users, and registrations.

---

## 🛠 Tech Stack

- ⚙️ Backend Framework: Python, Django
- 🔗 API: Django REST Framework
- 🗄️ Database: SQLite (Development) / MySQL (Production)

---

## 📁 Project Structure

backend/
│
├── manage.py
├── db.sqlite3
│
├── smart_event/
│ ├── settings.py
│ ├── urls.py
│
├── api/
│ ├── models.py
│ ├── views.py
│ ├── serializers.py
│ ├── urls.py
│ └── migrations/

---

## 🎯 Core Features

- 📡 REST API for events
- 🧾 CRUD Operations
- 🔐 User Authentication
- 🔗 Frontend Integration Support
- ⚡ Fast API responses

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

🌐 API Test

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

🚀 STEP 4 — CONTINUE REBASE
git rebase --continue
🚀 STEP 5 — PUSH
git push origin backend
