const express = require('express');
const router = express.Router();
const {createRoom, registerRoom} = require('../controllers/roomController');
const {protect} = require('../middleware/authMiddleware');

router.post('/create', protect, createRoom);
router.post('/register/:id', protect, registerRoom);

module.exports = router;