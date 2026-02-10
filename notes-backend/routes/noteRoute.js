const express = require('express');
const authMiddleware = require('../middleware/authMiddleware');

const router = express.Router();
const{
  getNotes,
  createNote,
  updateNote,
  deleteNote
} = require('../controllers/noteControllers');

router.get('/', authMiddleware,  getNotes);
router.post('/' , authMiddleware,  createNote);
router.put('/:id' , authMiddleware,  updateNote);
router.delete('/:id', authMiddleware,  deleteNote);

module.exports = router;