const express = require('express');
const router = express.Router();
const { protect } = require('../middleware/authMiddleware');
const { editProfile, getProfile } = require('../controllers/userController');

router.get('/profile', protect, getProfile);
router.put('/profile', protect, editProfile);

module.exports = router;