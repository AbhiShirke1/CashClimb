const mongoose = require("mongoose");

const roomSchema = mongoose.Schema(
    {
        active: {
            type: Boolean,
        },

        company: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User"
        },

        interested_investors: [
            {
                type: mongoose.Schema.Types.ObjectId,
                ref: "Investor"
            }
        ],

        // fund: {
        //     type: [Number]
        // },

        // percentage: {
        //     type: [Number]
        // },

        start_time: {
            type: String,
        },

        start_date: {
            type: String,
        },

        base_amount: {
            type: Number
        },

        base_percentage: {
            type: Number
        },

        final_amount: {
            type: Number
        },

        final_percent: {
            type: Number
        },

        final_investor: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Investor"
        }
    },
    { timestamps: true });


const RoomModel = mongoose.model("Room", roomSchema);
module.exports = RoomModel;
