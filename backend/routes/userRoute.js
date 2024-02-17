const express = require('express');
const router = express.Router();
const { protect } = require('../middleware/authMiddleware');
const { editProfile, getProfile, getAllFounders, getAllInvestors } = require('../controllers/userController');

router.get('/profile', protect, getProfile);
router.put('/profile', protect, editProfile);
router.get('/admin/founder', getAllFounders);
router.get('/admin/investor', getAllInvestors);

module.exports = router;