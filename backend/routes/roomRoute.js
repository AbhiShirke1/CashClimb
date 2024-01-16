const express = require('express');
const router = express.Router();
const {createRoom, registerRoom} = require('../controllers/roomController');

router.post('/create', createRoom);
router.post('/register', registerRoom);

module.exports = router;