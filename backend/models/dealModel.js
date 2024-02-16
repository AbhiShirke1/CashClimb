const mongoose = require('mongoose');

const dealSchema = mongoose.Schema({
    room: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Room"
    },

    investor: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Investor"
    },

    amount: {
        type: Number
    },

    percentage: {
        type: Number
    }
},
    { timestamps: true });


const DealModel = mongoose.model("Deal", dealSchema);
module.exports = DealModel;