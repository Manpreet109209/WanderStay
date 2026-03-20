# 🏡 WanderStay

WanderStay is a full-stack Airbnb-style listing platform built with **Node.js, Express, MongoDB, and EJS**.
It allows users to create, explore, update, and manage property listings through a clean and structured interface.

---

## ✨ Overview

This project focuses on building a complete backend-driven application with proper routing, database integration, and server-side rendering.

It demonstrates how a real-world listing platform works under the hood, including CRUD operations, schema design, and environment-based configuration.

---

## 🚀 Features

* ➕ Create new property listings
* 📄 View all listings
* 🔍 View individual listing details
* ✏️ Edit existing listings
* 🗑️ Delete listings
* 🌐 MongoDB Atlas integration
* 🔐 Environment variable management with dotenv
* 🌱 Database seeding with sample data

---

## 🛠️ Tech Stack

* **Backend:** Node.js, Express.js
* **Database:** MongoDB Atlas
* **ODM:** Mongoose
* **Templating Engine:** EJS
* **Styling:** CSS (public directory)
* **Environment Management:** dotenv

---

## 📂 Project Structure

```bash
wanderStay/
│
├── models/        # Mongoose schemas
├── init/          # Database seed scripts
├── public/        # Static assets (CSS, images)
├── views/         # EJS templates
├── app.js         # Main server file
├── package.json
├── .gitignore
└── README.md
```

---

## ⚙️ Installation & Setup

### 1. Clone the repository

```bash
git clone https://github.com/Manpreet109209/WanderStay.git
cd WanderStay
```

### 2. Install dependencies

```bash
npm install
```

### 3. Configure environment variables

Create a `.env` file in the root directory:

```env
ATLASDB_URL=your_mongodb_connection_string
```

Replace with your MongoDB Atlas URI.

---

### 4. Run the server

```bash
node app.js
```

App will run at:

```
http://localhost:8080
```

---

## 🌱 Seeding the Database

To populate the database with sample data:

```bash
node init/index.js
```

This will:

* Clear existing listings
* Insert demo listings

---

## 🔐 Environment Variables

Sensitive data like database URLs are stored in `.env` and excluded via `.gitignore` to keep credentials secure.

---

## 📦 Deployment Notes

* Add `ATLASDB_URL` in your hosting environment variables
* Configure `PORT` if required by your hosting platform

---

## 📚 Learning Outcomes

This project helped in understanding:

* RESTful routing and API design
* MongoDB schema modeling with Mongoose
* MVC-based project structure
* Server-side rendering using EJS
* Environment variable management
* Backend project deployment fundamentals

---

## 👨‍💻 Author

**Manpreet**
Class 11 Student | Aspiring Software Engineer

* GitHub: https://github.com/Manpreet109209
* LinkedIn: https://www.linkedin.com/in/manpreet-se/

---

## 💭 Final Note

WanderStay represents a solid step into backend development, focusing on building structured, scalable applications rather than just front-end interfaces.
