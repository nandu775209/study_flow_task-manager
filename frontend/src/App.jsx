import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';

const API_URL = 'http://localhost:4000/api/tasks';

function App() {
  // --- States ---
  const [tasks, setTasks] = useState([]);
  const [input, setInput] = useState('');
  const [category, setCategory] = useState('Homework');
  const [priority, setPriority] = useState('Medium');
  const [dueDate, setDueDate] = useState('');
  const [error, setError] = useState('');


  const fetchTasks = async () => {
    try {
      const res = await axios.get(API_URL);
      setTasks(res.data);
      setError('');
    } catch (err) {
      setError("Backend server connect nahi ho raha!");
    }
  };

  useEffect(() => { fetchTasks(); }, []);

  // 2. Add a new task
  const addTask = async (e) => {
    e.preventDefault();
    if (!input) return;
    try {
      await axios.post(API_URL, { 
        text: input, 
        category, 
        priority, 
        dueDate 
      });
      // Reset form fields
      setInput('');
      setDueDate('');
      setCategory('Homework');
      setPriority('Medium');
      fetchTasks();
    } catch (err) {
      alert("Task add nahi ho paya.");
    }
  };

  // 3. Toggle task completion (isCompleted true/false)
  const toggleComplete = async (id) => {
    try {
      const res = await axios.patch(`${API_URL}/${id}`);
      setTasks(tasks.map(t => t._id === id ? res.data : t));
    } catch (err) { 
      console.error("Toggle error:", err); 
    }
  };

  // 4. Delete task
  const handleDelete = async (id) => {
    try {
      await axios.delete(`${API_URL}/${id}`);
      setTasks(tasks.filter(t => t._id !== id));
    } catch (err) { 
      alert("Delete failed."); 
    }
  };

  // --- Logic for Progress Bar ---
  const completedCount = tasks.filter(t => t.isCompleted).length;
  const progressPercent = tasks.length > 0 ? (completedCount / tasks.length) * 100 : 0;

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white flex flex-col items-center pt-10 px-4 pb-10">
      <div className="w-full max-w-lg">
        {/* Header Section */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold mb-2">StudyFlow Task manager</h1>
          <p className="text-gray-400 text-sm italic">Organize your studies like a pro</p>
        </div>

        {error && <div className="bg-red-500/20 border border-red-500 text-red-500 p-3 rounded-lg mb-4 text-center">{error}</div>}

        {/* Feature 5: Progress Dashboard */}
        <div className="bg-[#111] border border-gray-800 p-5 rounded-2xl mb-8">
            <div className="flex justify-between items-end mb-3">
                <div>
                    <p className="text-xs text-gray-500 uppercase tracking-widest">My Progress</p>
                    <h2 className="text-2xl font-bold">
                        {completedCount}/{tasks.length} 
                        <span className="text-sm font-normal text-gray-400 ml-2 text-sm">Tasks Done</span>
                    </h2>
                </div>
                <span className="text-green-500 font-mono font-bold">{Math.round(progressPercent)}%</span>
            </div>
            <div className="w-full bg-gray-800 h-3 rounded-full overflow-hidden">
                <div 
                    className="bg-green-500 h-full transition-all duration-700 ease-out"
                    style={{ width: `${progressPercent}%` }}
                ></div>
            </div>
        </div>

        {/* Features 1, 2, 4: Task Input Form */}
        <form onSubmit={addTask} className="bg-[#161616] p-4 rounded-2xl border border-gray-800 mb-10 space-y-4">
          <input 
            className="w-full bg-transparent border-b border-gray-700 p-2 text-lg focus:outline-none focus:border-green-500 transition-all"
            placeholder="Add task to complete?..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
          
          <div className="grid grid-cols-3 gap-3">
            <div className="flex flex-col gap-1">
                <label className="text-[10px] text-gray-500 uppercase ml-1">Category</label>
                <select value={category} onChange={(e) => setCategory(e.target.value)} className="bg-[#0a0a0a] border border-gray-800 p-2 rounded-lg text-xs outline-none">
                    <option>Homework</option>
                    <option>Project</option>
                    <option>Revision</option>
                    <option>Other</option>
                </select>
            </div>
            <div className="flex flex-col gap-1">
                <label className="text-[10px] text-gray-500 uppercase ml-1">Priority</label>
                <select value={priority} onChange={(e) => setPriority(e.target.value)} className="bg-[#0a0a0a] border border-gray-800 p-2 rounded-lg text-xs outline-none">
                    <option value="Low">Low</option>
                    <option value="Medium">Medium</option>
                    <option value="High">High</option>
                </select>
            </div>
            <div className="flex flex-col gap-1">
                <label className="text-[10px] text-gray-500 uppercase ml-1">Due Date</label>
                <input type="date" value={dueDate} onChange={(e) => setDueDate(e.target.value)} className="bg-[#0a0a0a] border border-gray-800 p-2 rounded-lg text-xs outline-none" />
            </div>
          </div>
          
          <button type="submit" className="w-full bg-green-500 text-black font-bold py-3 rounded-xl hover:shadow-[0_0_20px_rgba(34,197,94,0.3)] transition-all">
            + Add to List
          </button>
        </form>

        {/* Task List Section */}
        <div className="space-y-4">
          {tasks.map((t) => (
            <div key={t._id} className={`group bg-[#0d1117] border ${t.priority === 'High' ? 'border-red-900/40' : 'border-gray-800'} p-4 rounded-2xl flex items-center justify-between transition-all hover:border-gray-600`}>
                <div className="flex items-center gap-4">
                  {/* Custom Checkbox Circle */}
                  <div 
                    onClick={() => toggleComplete(t._id)}
                    className={`w-6 h-6 rounded-full border-2 flex items-center justify-center cursor-pointer transition-all ${t.isCompleted ? 'bg-green-500 border-green-500' : 'border-gray-600 hover:border-green-500'}`}
                  >
                     {t.isCompleted && <span className="text-black text-xs">✓</span>}
                  </div>
                  
                  {/* Task Info */}
                  <div>
                    <p className={`text-md font-medium transition-all ${t.isCompleted ? 'line-through text-gray-500' : 'text-gray-200'}`}>
                      {t.text}
                    </p>
                    <div className="flex gap-2 mt-1">
                        <span className="text-[10px] bg-blue-500/10 text-blue-400 px-2 py-0.5 rounded-full border border-blue-500/20">{t.category}</span>
                        
                        {/* High Priority Tag */}
                        {t.priority === 'High' && <span className="text-[10px] bg-red-500/10 text-red-500 px-2 py-0.5 rounded-full border border-red-500/20">Urgent</span>}
                        
                        {/* Due Date Tag with Overdue Alert */}
                        {t.dueDate && (
                            <span className={`text-[10px] px-2 py-0.5 rounded-full border ${!t.isCompleted && new Date(t.dueDate) < new Date() ? 'bg-red-500/10 text-red-400 border-red-500/20' : 'bg-gray-800 text-gray-400 border-gray-700'}`}>
                                📅 {new Date(t.dueDate).toLocaleDateString()}
                            </span>
                        )}
                    </div>
                  </div>
                </div>
                
                {/* Delete Button */}
                <button 
                  onClick={() => handleDelete(t._id)} 
                  className="opacity-0 group-hover:opacity-100 text-red-500 text-xs bg-red-500/10 px-3 py-1.5 rounded-lg hover:bg-red-500 hover:text-white transition-all"
                >
                  Delete
                </button>
            </div>
          ))}
          {tasks.length === 0 && <p className="text-center text-gray-600 mt-10">Be consistent focus your work!</p>}
        </div>
      </div>
    </div>
  );
}

export default App;