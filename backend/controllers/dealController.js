const asyncHandler = require("express-async-handler");
const Deal = require('../models/dealModel');
const { model } = require("mongoose");

const sendOffer = asyncHandler(async (req, res) => {
    const { roomId, amount, percent } = req.body;

    if (!roomId || !amount || !percent) {
        console.log("Invalid data passed into request");
        return res.sendStatus(400);
    }

    var newOffer = {
        room: roomId,
        investor: req.user._id,
        amount: amount,
        percentage: percent
    }

    try {
        var offer = await Deal.create(newOffer);

        offer = await offer.populate("room");
        offer = await offer.populate("investor", "email");

        res.json(offer);
    } catch (error) {
        res.status(400);
        throw new Error(error.message);
    }
});

module.exports = { sendOffer };