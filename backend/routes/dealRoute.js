const express = require('express');
const { sendOffer, dealAccept } = require('../controllers/dealController');
const { protectInvestor } = require('../middleware/authMiddlewareInvestor');
const { protect } = require('../middleware/authMiddleware');
const router = express.Router();

router.route('/send').post(protectInvestor, sendOffer);
router.put('/deal-accept', protect, dealAccept)

module.exports = router;