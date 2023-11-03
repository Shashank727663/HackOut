

const express = require('express');
const router = express.Router();

const {getAllJournalEntries , CreateJournal} = require('../controllers/JournalController');


router.route('/').get(getAllJournalEntries)
router.route('/create').post( CreateJournal)

module.exports = router;