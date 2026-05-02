---
## ⚙️ Setup & Installation
1.  **Clone the repository:**
```bash
git clone [https://github.com/WeBDeV-SS7/Smart-Event-System.git](https://github.com/WeBDeV-SS7/Smart-Event-System.git)
```
2.  **Navigate to the frontend folder:**
```bash
cd frontend
```
3.  **Launch:**
*   Open `index.html` directly in your browser, or
*   Use the **VS Code Live Server** extension for the best experience.
---

## 🔗 API Connection

The frontend expects a running Django server at `http://127.0.0.1:8000Since you are now on the `frontend`branch and inside the`frontend` folder, here is a clean, markdown-ready README tailored specifically for your UI work on **EventSphere**.

I’ve incorporated the **red and black minimalist aesthetic** and the technical details you’ve been working on, including the fixed API logic.

---

# 🎉 EventSphere – Frontend

## 📌 Overview

**EventSphere** is a sleek, modern event discovery and registration platform. This repository contains the frontend implementation, featuring a responsive UI designed with a minimalist **Red & Black** theme. It is built to communicate seamlessly with a Django REST API.

---

## 🎨 Tech Stack

- **HTML5 & CSS3:** Custom styling with a focus on dark mode aesthetics and smooth animations.
- **Bootstrap 5:** Used for responsive layouts and grid systems.
- **Vanilla JavaScript (ES6+):** Handles dynamic DOM manipulation and state management.
- **Fetch API:** Manages asynchronous communication with the backend.

---

## ✨ Key Features

- **Dynamic Event Rendering:** Cards are generated on-the-fly from API data.
- **User Authentication:** Dedicated UI for Login and Registration with `localStorage` session handling.
- **Event Registration:** Integrated flow that prevents duplicate registrations via frontend checks and backend validation.
- **Responsive Design:** Fully optimized for mobile, tablet, and desktop views.
- **Real-time UI Updates:** Progress indicators and success notifications using emojis and alerts.

---

## 📂 Folder Structure

```text
/frontend
│── index.html       # Landing page & Event Discovery
│── login.html       # User Authentication
│── register.html    # New User Signup
│── events.html      # Detailed Event Listings
│
├── css/
│   └── style.css    # Custom Dark/Red theme logic
│
└── js/
    ├── api.js       # Base Fetch configurations
    ├── auth.js      # Login/Logout logic
    ├── events.js    # Event fetching and registration
    └── main.js      # Global UI initializers
⚙️ Setup & Installation
Clone the repository:

Bash
git clone [https://github.com/WeBDeV-SS7/Smart-Event-System.git](https://github.com/WeBDeV-SS7/Smart-Event-System.git)
Navigate to the frontend folder:

Bash
cd frontend
Launch:

Open index.html directly in your browser, or

Use the VS Code Live Server extension for the best experience.

🔗 API Connection
The frontend expects a running Django server at http://127.0.0.1:8000/.

Ensure the user_id is stored in localStorage after a successful login to enable event registration features.

👨‍💻 Developer
Saniya Shereen

Lead Frontend Developer for EventSphere
```
