const express = require("express");

const router = express.Router();

const  {CreateNote , getAllNotes , getNoteById , deleteNoteById , editNoteById , NoteSearch} = require('../controllers/NoteController');

router.route('/').get(getAllNotes);
router.route('/create').post(CreateNote);
router.route('/:id').get(getNoteById).delete(deleteNoteById).put(editNoteById);
router.route('/search/:title').get(NoteSearch);


module.exports = router;
