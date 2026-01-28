const Task = require('../models/Task');

// 1. Get all tasks
exports.getTasks = async (req, res) => {
    try {
        const tasks = await Task.find().sort({ createdAt: -1 });
        res.status(200).json(tasks);
    } catch (err) {
        res.status(500).json({ message: "Server Error" });
    }
};

// 2. Create new task (With all features)
exports.createTask = async (req, res) => {
    try {
        const { text, category, dueDate, priority } = req.body;
        const newTask = new Task({ text, category, dueDate, priority });
        await newTask.save();
        res.status(201).json(newTask);
    } catch (err) {
        res.status(400).json({ message: "Invalid Input" });
    }
};

// 3. Delete task
exports.deleteTask = async (req, res) => {
    try {
        await Task.findByIdAndDelete(req.params.id);
        res.status(200).json({ message: "Deleted" });
    } catch (err) {
        res.status(500).json({ message: "Delete Failed" });
    }
};

// 4. Toggle completion status
exports.toggleTask = async (req, res) => {
    try {
        const task = await Task.findById(req.params.id);
        if (!task) return res.status(404).json({ message: "Not found" });
        
        task.isCompleted = !task.isCompleted;
        await task.save();
        res.json(task);
    } catch (err) {
        res.status(500).json({ message: "Toggle Failed" });
    }
};