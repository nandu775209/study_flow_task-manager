const mongoose = require('mongoose');


const taskSchema = new mongoose.Schema({
    text: { 
        type: String, 
        required: [true, 'Task text is required'] 
    },
    isCompleted: { 
        type: Boolean, 
        default: false 
    },
    category: { 
        type: String, 
        default: 'General' 
    },
    dueDate: { 
        type: Date 
    },
    priority: { 
        type: String, 
        enum: ['Low', 'Medium', 'High'], 
        default: 'Medium' 
    }
}, { 
    timestamps: true 
});

module.exports = mongoose.model('Task', taskSchema);