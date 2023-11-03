
const Note = require('../models/NoteModel');
const JournalEntry = require('../models/JournalModel');

//creating an api for the use of creating a note
const CreateNote = async (req,res) => {
    const {title, body, user, location, photos, notes, createdAt, updatedAt} = req.body;
    const newNote = new Note({
        title, body, user, location, photos, notes, createdAt, updatedAt
    })
    try {
        const note = await newNote.save();
        res.status(201).json(note);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
}

// get all notes
const getAllNotes = async (req, res) => {
    try {
        const notes = await Note.find({});
        res.json(notes);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// get note by id
const getNoteById = async (req, res) => {
    try {
        const note = await Note.findById(req.params.id);
        res.json(note);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// delete note by id
const deleteNoteById = async (req, res) => {
    try {
        const note = await Note.findByIdAndDelete(req.params.id);
        res.json(note);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// edit note by id
const editNoteById = async (req, res) => {
    try {
        const note = await Note.findById(req.params.id);
        note.title = req.body.title;
        note.body = req.body.body;
        note.user = req.body.user;
        note.location = req.body.location;
        note.photos = req.body.photos;
        note.notes = req.body.notes;
        const updatedNote = await note.save();
        res.json(updatedNote);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// search for note by name
const NoteSearch = async (req , res) => {
    try {
        const note = await Note.find({title: req.params.title});
        res.json(note);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }

};

module.exports = {CreateNote , getAllNotes , getNoteById , deleteNoteById , editNoteById , NoteSearch}