
const JournalEntry = require('../models/JournalModel');

// for getting all the journal entries
const getAllJournalEntries = async (req, res) => {
  try {
    const journalEntries = await JournalEntry.find({});
    res.json(journalEntries);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

//creating an api for the use of creating a journal entry
const CreateJournal = async (req,res) => {
  const {title, body, user, location, photos, notes, createdAt, updatedAt} = req.body;
  const newJournal = new JournalEntry({
    title, body, user, location, photos, notes, createdAt, updatedAt
  })
  try {
    const journal = await newJournal.save();
    res.status(201).json(journal);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
}


// search for journal by name 
const JournalSearch = async (req , res) => {
  try {
    const journal = await JournalEntry.find({title: req.params.title});
    res.json(journal);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }

};

// delete a journal entry by name 
const DeleteJournal = async (req , res) => {
  try {
    const journal = await JournalEntry.find({title: req.params.title});
    res.json(journal);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }

};

// edit the contents of a journal entry by name
const EditJournal = async (req , res) => {
  try {
    const journal = await JournalEntry.find({title: req.params.title});
    journal.title = req.body.title;
    journal.body = req.body.body;
    journal.user = req.body.user;
    journal.location = req.body.location;
    journal.photos = req.body.photos;
    journal.notes = req.body.notes;
    res.json(journal);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }

};

module.exports = {getAllJournalEntries , CreateJournal , JournalSearch , DeleteJournal , EditJournal}