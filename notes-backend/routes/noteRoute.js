const express = require('express');

const router = express.Router();
const{
  getNotes,
  createNote,
  deleteNote
} = require('../controllers/noteControllers');

router.get('/', getNotes);
router.post('/' , createNote);
// router.delete('/', deleteNote);

module.exports = router;