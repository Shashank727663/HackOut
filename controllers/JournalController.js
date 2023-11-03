
const JournalEntry = require('../models/JournalModel');

// for getting all the journal entries
const getAllJournalEntries = async (req, res) => {
  try {
    const journalEntries = await JournalEntry.find();
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

module.exports = {getAllJournalEntries , CreateJournal}