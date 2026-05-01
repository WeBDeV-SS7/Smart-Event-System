# 🚀 Smart Event System — Backend

Hi there!! 👋
This is the **backend service** for our collaborative full-stack project.

---

## ⚙️ Backend Overview

This backend is built using **Django** and provides REST APIs for managing events, users, and registrations.

---

## 🛠 Tech Stack

* ⚙️ Backend Framework: Python, Django
* 🔗 API: Django REST Framework
* 🗄️ Database: SQLite (Development) / MySQL (Production)

---

## 📁 Project Structure

```
backend/
│
├── manage.py
├── db.sqlite3
│
├── smart_event/
│   ├── settings.py
│   ├── urls.py
│
├── api/
│   ├── models.py
│   ├── views.py
│   ├── serializers.py
│   ├── urls.py
│   └── migrations/
```

---

## 🎯 Core Features

* 📡 REST API for events
* 🧾 CRUD Operations (Create, Read, Update, Delete)
* 🔐 User authentication (optional future)
* 🔗 Frontend integration support
* ⚡ Fast API responses

---

## 🔗 API Endpoints

| Method | Endpoint                 | Description      |
| ------ | ------------------------ | ---------------- |
| GET    | /api/events/             | Get all events   |
| POST   | /api/events/create/      | Create new event |
| PUT    | /api/events/{id}/        | Update event     |
| DELETE | /api/events/delete/{id}/ | Delete event     |

---

## ⚙️ Setup Instructions

### 1. Clone repository

```bash
git clone <repo-link>
cd backend
```

---

### 2. Install dependencies

```bash
pip install -r requirements.txt
```

---

### 3. Run migrations

```bash
python manage.py makemigrations
python manage.py migrate
```

---

### 4. Create admin user

```bash
python manage.py createsuperuser
```

---

### 5. Run server

```bash
python manage.py runserver
```

---

## 🌐 Test API

Open in browser:

```
http://127.0.0.1:8000/api/events/
```

---

## 🧠 How it works

```
Database → Django Models → API → Frontend
```

---

## 🤝 Collaboration

* backend branch → API & database
* frontend branch → UI
* main → final integration

---

## 🚀 Future Improvements

* 🔐 JWT Authentication
* 📊 Dashboard analytics
* 📩 Email notifications
* 🌍 Deployment (Render / Vercel / AWS)

---

## 👨‍💻 Developed By

**Mohammed Moiz**  
🚀 Backend Developer  
💻 Passionate about Full Stack Development
---
