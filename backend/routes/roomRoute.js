const express = require('express');
const router = express.Router();
const {createRoom,createRoom2, registerRoom, checkPermission, dealAccept, getAllRooms, checkRoomCreated, getFounderInfo} = require('../controllers/roomController');
const {protect} = require('../middleware/authMiddleware');
const { protectInvestor } = require('../middleware/authMiddlewareInvestor');

router.post('/create', protect, createRoom);
router.post('/register/:id', protectInvestor, registerRoom);
router.post('/permission/:id', protectInvestor, checkPermission);
router.put('/deal-accept', protect, dealAccept)
router.post('/createRoom', protect, createRoom2);
router.get('/allRooms', protect, getAllRooms);
router.get('/checkRoom', protect, checkRoomCreated);
router.post('/founderData', getFounderInfo);

module.exports = router;