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

<img width="625" height="555" alt="image" src="https://github.com/user-attachments/assets/f1e26e1f-37ed-43d3-97c8-4a0f7eab0a15" />

---

## ⚙️ How to Run the Project

### Backend
```bash
cd backend
npm install
npm run dev // node server.js

```

Backend runs on:
```
http://localhost:3000
```

### Frontend
```bash
cd frontend
npm run dev
```

frontend runs on:
```
http://localhost:5173

```
---


## 📸 Screenshots

### Initial Dashboard
<img width="740" height="533" alt="image" src="https://github.com/user-attachments/assets/42259f78-8005-4777-a000-fde446bd962a" />


### Dashboard with 3 Tasks
<img width="907" height="950" alt="image" src="https://github.com/user-attachments/assets/41d574cf-ef81-42ad-af27-9f923ef06970" />


### Task Added Successfully
<img width="668" height="885" alt="image" src="https://github.com/user-attachments/assets/d91f4534-2944-4dec-b7c6-9dbb1f93101c" />


### Task Deleted Successfully

<img width="735" height="811" alt="image" src="https://github.com/user-attachments/assets/4361b186-6a27-4bfb-ae1e-834aab064cdc" />


### progress analyzers 
<img width="840" height="271" alt="image" src="https://github.com/user-attachments/assets/f5a8173b-1b37-4f46-9eeb-c76dc7efa716" />

---


---

## ✅ Features Implemented

- Add task with auto-generated ID
- Delete task using delete button
- Delete task using task ID
- JSON file based storage
- Async/await based API handling
- Error handling for failed operations
- UI updates without page refresh

---

## 🧪 Technologies Used

- HTML
- CSS
- JavaScript
- Node.js
- Express.js
- JSON file storage

---

