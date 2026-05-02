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

🤝 The Team
Moizuddin – Backend Architecture & Database Management.

Saniya – Frontend Design & UI/UX Development.

📄 License
This project is licensed under the MIT License.
