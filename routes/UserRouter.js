
const express = require('express');

const router = express.Router();

const {register , authUser} = require('../controllers/UserController');

router.route('/register').post(register);
router.route('/login').post(authUser)


module.exports = router;