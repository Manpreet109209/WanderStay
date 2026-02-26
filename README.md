WanderStay 🏡

WanderStay is a full-stack Airbnb-style listing platform built with Node.js, Express, MongoDB, and EJS. Users can create, view, edit, and delete property listings.

This project demonstrates backend development, RESTful routing, database integration, and environment variable management.

🚀 Features

Create property listings

View all listings

View individual listing details

Edit existing listings

Delete listings

MongoDB Atlas database integration

Environment variable configuration using dotenv

Seed script for inserting fake data

🛠 Tech Stack

Backend: Node.js, Express.js

Database: MongoDB Atlas

ODM: Mongoose

Templating Engine: EJS

Styling: CSS (Public folder)

Environment Management: dotenv

📁 Project Structure wanderStay/ │ ├── models/ # Mongoose schemas

├── init/ # Database seed script

├── public/ # Static assets (CSS, images)

├── views/ # EJS templates

├── app.js # Main server file

├── package.json

├── .gitignore

└── README.md

⚙️ Installation & Setup 1️⃣ Clone the repository git clone https://github.com/Manpreet109209/WanderStay.git cd WanderStay 2️⃣ Install dependencies npm install 3️⃣ Create a .env file

Create a file named:

.env

Inside it, add:

ATLASDB_URL=your_mongodb_connection_string

Replace your_mongodb_connection_string with your MongoDB Atlas URI.

4️⃣ Run the application node app.js

Server will run on:

http://localhost:8080 🌱 Seeding the Database

To insert fake data into the database:

node init/index.js

This will:

Clear existing listings

Insert sample data

🔐 Environment Variables

This project uses environment variables for secure database connections.

The .env file is excluded using .gitignore and is not pushed to GitHub.

📦 Deployment

For deployment:

Add ATLASDB_URL in your hosting provider’s Environment Variables section.

Ensure the correct PORT configuration if required by the hosting platform.

📚 Learning Goals

This project was built to practice:

RESTful API design

MongoDB schema modeling

Express routing

MVC structure

Git & GitHub workflow

Deployment preparation

👨‍💻 Author

Manpreet Class 11 Student | Aspiring Software Engineer