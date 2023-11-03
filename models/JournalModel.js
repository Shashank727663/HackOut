const mongoose = require('mongoose');

const journalEntrySchema = new mongoose.Schema({
  title: { type: String, required: true },
  body: { type: String, required: true },
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  location: { 
    type: { type: String, default: 'Point' }, 
    coordinates: [Number],
    address: String
  },
  photos: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Photo' }],
  notes: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Note' }],
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date }
});

const JournalEntry = mongoose.model('JournalEntry', journalEntrySchema);
module.exports = JournalEntry;
