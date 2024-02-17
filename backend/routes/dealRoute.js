const express = require('express');
const { sendOffer } = require('../controllers/dealController');
const { protectInvestor } = require('../middleware/authMiddlewareInvestor');
const router = express.Router();

router.route('/send').post(protectInvestor, sendOffer);

module.exports = router;