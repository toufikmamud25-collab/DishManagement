# Dish Dashboard

## Overview

Dish Dashboard is a full-stack web application built using React, Node.js, Express, and MongoDB. The application allows users to view dishes, manage their publication status, and automatically synchronize changes between the frontend and backend.

---

## Features

* Display all dishes with image, name, and publication status
* Toggle dish publication status
* REST API integration
* MongoDB database storage
* Automatic dashboard synchronization
* Responsive React-based user interface

---

## Tech Stack

### Frontend

* React.js
* Axios
* CSS

### Backend

* Node.js
* Express.js

### Database

* MongoDB
* Mongoose

---

## Database Schema

```javascript
{
  dishId: Number,
  dishName: String,
  imageUrl: String,
  isPublished: Boolean
}
```

---

## API Endpoints

### Get All Dishes

```http
GET /api/dishes
```

Returns all dishes stored in the database.

### Toggle Dish Status

```http
PATCH /api/dishes/:dishId/toggle
```

Toggles the publication status of a dish.

---

## Project Structure

```text
dish-dashboard/
│
├── backend/
│   ├── config/
│   ├── controllers/
│   ├── models/
│   ├── routes/
│   ├── seed/
│   ├── .env
│   └── server.js
│
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── App.jsx
│   │   └── main.jsx
│
└── README.md
```

---

## Installation

### Clone Repository

```bash
git clone <repository-url>
cd dish-dashboard
```

---

## Backend Setup

Navigate to backend folder:

```bash
cd backend
```

Install dependencies:

```bash
npm install
```

Create a `.env` file:

```env
PORT=5000
MONGO_URI=mongodb://127.0.0.1:27017/dishes
```

Run backend:

```bash
npm run dev
```

Backend runs on:

```text
http://localhost:5000
```

---

## Frontend Setup

Navigate to frontend folder:

```bash
cd frontend
```

Install dependencies:

```bash
npm install
```

Run frontend:

```bash
npm run dev
```

Frontend runs on:

```text
http://localhost:5174
```

---

## Real-Time Synchronization

The dashboard automatically refreshes data at regular intervals to ensure that changes made directly in the database are reflected in the user interface without requiring a page refresh.

Flow:

```text
Database Change
       ↓
Frontend Polling
       ↓
API Request
       ↓
Updated Dashboard
```

---

## Future Improvements

* JWT Authentication
* Role-Based Access Control
* Search and Filtering
* Pagination
* Image Upload Support
* MongoDB Change Streams for true real-time updates
* Docker Deployment
* Unit and Integration Testing

---

## Author

Toufik Mamud

Computer Science and Engineering (CSE)
