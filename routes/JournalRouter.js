// Purpose: To route the Journal entries to the controller
const express = require("express");
const router = express.Router();

const {
  getAllJournalEntries,
  CreateJournal,
  JournalSearch,
  DeleteJournal,
  EditJournal
} = require("../controllers/JournalController");

router.route("/").get(getAllJournalEntries, JournalSearch);
router.route("/create").post(CreateJournal);
router.route("/delete").delete(DeleteJournal);
router.route("/edit").put(EditJournal);

module.exports = router;
