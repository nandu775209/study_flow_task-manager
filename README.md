## 📌 Project Overview

TaskFlow is a full-stack web application developed to help users manage their daily tasks in an efficient and organized way. The application allows users to add, view, and delete tasks with real-time updates, providing a smooth single-page application experience.

The frontend is built using React with Vite, which ensures fast loading and a responsive user interface. Tailwind CSS is used for styling, making the application clean, modern, and mobile-friendly.

The backend is developed using Node.js and Express.js, exposing RESTful APIs that handle all task-related operations. MongoDB is used as the database to store tasks securely and persistently.

This project is designed to demonstrate practical implementation of MERN stack concepts such as client-server communication, REST APIs, CRUD operations, and modern frontend development practices.


## 💡 How I Thought to Do This Project

The idea for this project came from the need to manage daily tasks in a simple and organized way. I wanted to build a lightweight application focusing on core features like adding, viewing, and deleting tasks. This project helped me apply MERN stack concepts in a practical manner and understand real-world full-stack development.

## ⚠️ Challenges Faced

One of the key difficulties was working with JSON-based storage, where even small changes require rewriting the entire file. While data removal is fast in memory, persisting those changes to a JSON file involves reading and saving the whole file again. Another challenge involved managing error handling without relying on promise chaining. This was addressed by using async/await along with try-catch blocks and validating API responses before processing them. Keeping the interface in sync with backend updates without reloading the page was also challenging. This was resolved by refreshing the task list in the application state after each successful create or delete action.

## 📁 Project Structure

taskflow/ │ ├── backend/ │ ├── controllers/ # Request and response logic │ ├── routes/ # API endpoints │ ├── models/ # Data models / schemas │ ├── data/ │ │ └── tasks.json # JSON file for storing tasks │ ├── server.js # Backend entry point │ └── package.json # Backend dependencies │ ├── frontend/ │ ├── src/ │ │ ├── components/ # Reusable UI components │ │ ├── App.jsx # Main React component │ │ ├── main.jsx # React entry file │ │ └── index.css # Global styles (Tailwind CSS) │ ├── index.html # Single HTML file │ ├── vite.config.js # Vite configuration │ └── package.json # Frontend dependencies │ └── README.md # Project documentation

## ⚙️ How to Run the Project

Clone the repository git clone https://github.com/nandu775209/study_flow_task-manager.git cd study_flow_task-manager Start the backend cd backend npm install node server.js Start the frontend cd frontend npm install npm run dev
