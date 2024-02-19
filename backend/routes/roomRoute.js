const express = require('express');
const router = express.Router();
const {createRoom,createRoom2, registerRoom, checkPermission, dealAccept} = require('../controllers/roomController');
const {protect} = require('../middleware/authMiddleware');
const { protectInvestor } = require('../middleware/authMiddlewareInvestor');

router.post('/create', protect, createRoom);
router.post('/register/:id', protectInvestor, registerRoom);
router.post('/permission/:id', protectInvestor, checkPermission);
router.put('/deal-accept', protect, dealAccept)
router.post('/createRoom', protect, createRoom2);

module.exports = router;