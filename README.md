# Node APP

A Full Stack   Notes application built using reactjs,  Node.js, Express, and MongoDB.

Feature:-
 User Authentication (Register & Login with JWT)
 Add New Notes
 View All User Notes
 Edit Notes
 Delete Notes
 Protected Routes (Only logged-in users can manage notes)
 Responsive UI using Tailwind CSS

Tech Stack:-
Frontend:
React.js
Axios
Tailwind CSS
React Router
Backend:
Node.js
Express.js
MongoDB
Mongoose
JWT Authentication
bcryptjs


Project Structure
Notes-App/
│
├── backend/
│   ├── models/
│   ├── routes/
│   ├── controllers/
│   ├── middleware/
│   └── server.js
│
├── frontend/
│   ├── components/
│   ├── pages/
│   ├── App.js
│   └── main.jsx


Authentication Flow:- 
User registers
Password is hashed using bcrypt
JWT token is generated on login
Token is stored in localStorage
Protected routes verify token before allowing access


Installation:-
1. Clone the Repo
git clone <your-repo-link>
cd Notes-App

Create a .env file inside backend folder and add:

PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key

After extracting the project:

Backend Setup:
cd backend
npm install
npm start

Frontend Setup:
cd frontend
npm install
npm run dev

Learning Outcomes:-
Understanding of MERN stack architecture
REST API development
JWT Authentication implementation
State management in React
CRUD operations with MongoDB
Protected routes & authorization logic

Divyanshu Chauhan
Btech Cse