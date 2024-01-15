const mongoose = require('mongoose');

const roomSchema = mongoose.Schema({
    company: {
        type: String,
        unique: true
    },

    interested_investors: {
        type: [String]
    },

    fund: {
        type: [Number]
    },

    start_time: {
        type: String
    },

    base_amount: {
        type: Number
    }

},
{timestamps: true});


const RoomModel = mongoose.model("Room", roomSchema);
module.exports = RoomModel;