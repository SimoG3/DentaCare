# 🦷 DentaCare: Full-Stack Dental Management System

A comprehensive management platform designed for dental clinics to streamline patient appointments, specialized services, and administrative workflows through dedicated dashboards.

---

## 🚀 Features

* **Role-Based Dashboards**: Specific interfaces for **Dentists** and **Assistants** to manage clinical tasks.
* **Specialized Service Modules**: Dedicated pages for **Blanchiment** (Whitening), **Chirurgie** (Surgery), **Orthodontie**, **Prothese**, and **Soins** (General Care).
* **Appointment Management**: Integrated system for booking and tracking patient visits.
* **Modern Full-Stack Architecture**: Built with a React frontend and a Node.js/Prisma backend.

---

## 🛠️ Tech Stack

| Frontend | Backend | Database & Tools |
| :--- | :--- | :--- |
| **React** (Vite) | **Node.js** | **Prisma ORM** |
| **JSX / CSS** | **Express.js** | **ESLint** |
| **React Router** | **REST API** | **Dotenv** |

---

## 📂 Project Architecture

```pascal
.
├── backend/                   # Server-side logic
│   ├── controllers/           # Route handlers
│   ├── middleware/            # Custom middleware
│   ├── models/                # Data models
│   ├── prisma/                # Database schema & migrations
│   ├── routes/                # API endpoint definitions
│   ├── utils/                 # Helper functions
│   ├── app.js                 # App configuration
│   └── server.js              # Server entry point
├── frontend/                  # Client-side application
│   ├── src/
│   │   ├── assets/            # Static files
│   │   ├── components/        # Reusable UI components
│   │   ├── pages/             # View components
│   │   │   ├── Appointment.jsx
│   │   │   ├── AssistantDashboard.jsx
│   │   │   ├── DentistDashboard.jsx
│   │   │   └── (Service Pages: Soins, Prothese, etc.)
│   │   ├── services/          # API integration
│   │   ├── App.jsx            # Root component
│   │   └── main.jsx           # Vite entry point
│   ├── vite.config.js         # Build tool config
│   └── package.json           # Frontend dependencies
└── package.json               # Root dependencies

```

## ⚙️ Installation & Setup

1. Clone the repository
   ```pacal
   git clone [https://github.com/your-username/dental-website.git](https://github.com/your-username/dental-website.git)
   cd dental-website
   ```
2. Backend Configuration
   ```pascal
   cd backend
   npm install
   # Ensure your .env file is configured with DATABASE_URL
   npx prisma migrate dev
   npm start
   ```
3. Frontend Configuration
   ```pascal
   cd ../frontend
   npm install
   npm run dev
   ```

## 🏥 Key Modules

This project is organized into modular components to ensure high maintainability and a clear separation of concerns.

### 🖥️ Specialized Dashboards
Tailored interfaces designed for specific user roles within the clinic:
* **Dentist Dashboard**: Focused on clinical data, patient history, and treatment planning (`DentistDashboard.jsx`).
* **Assistant Dashboard**: Focused on reception tasks, scheduling, and administrative oversight (`AssistantDashboard.jsx`).

### 🦷 Medical Service Modules
Individual pages dedicated to dental specialties, allowing for modular content updates:
* **Orthodontie**: Management and information for orthodontic treatments.
* **Chirurgie**: Specialized workflows for surgical procedures.
* **Soins**: General dental care and routine check-up modules.
* **Blanchiment & Prothèse**: Dedicated sections for cosmetic and prosthetic dentistry.

### 🎨 Modular Styling
We utilize a component-scoped styling approach to prevent CSS conflicts:
* **Appointment.css**: Styles specific to the booking and scheduling interface.
* **Home.css**: Layout and design for the landing page.
* **Dashboard.css**: Shared UI elements for administrative views.

---
