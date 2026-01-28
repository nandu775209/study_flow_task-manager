const express = require('express');
const router = express.Router();
const {
  getTasks,
  createTask,
  deleteTask,
  toggleTask
} = require('../controllers/taskController');

router.get('/', getTasks);
router.post('/', createTask);
router.delete('/:id', deleteTask);
router.patch('/:id', toggleTask);

module.exports = router;
