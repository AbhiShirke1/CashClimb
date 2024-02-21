const express = require('express');
const router = express.Router();
const {createRoom, registerRoom, checkPermission, createRoom2, getAllRooms, getRegisteredRooms, getFounderInfo, checkRoomCreated} = require('../controllers/roomController');
const {protect} = require('../middleware/authMiddleware');
const { protectInvestor } = require('../middleware/authMiddlewareInvestor');

router.post('/create', protect, createRoom);
router.post('/register/:id', protectInvestor, registerRoom);
router.post('/permission/:id', protectInvestor, checkPermission);
router.post('/createRoom', protect, createRoom2);
router.get('/allRooms', protectInvestor, getAllRooms);
router.post('/registeredRooms', protectInvestor, getRegisteredRooms);
router.post('/founderData', getFounderInfo);
router.get('/checkRoom', protect, checkRoomCreated);

module.exports = router;