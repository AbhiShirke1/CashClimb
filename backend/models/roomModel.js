const mongoose = require("mongoose");

const roomSchema = mongoose.Schema(
    {
        active: {
            type: Boolean,
        },

        roomId:{
            type:String
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
            type: String
        },

        base_percentage: {
            type: String
        },

        final_amount: {
            type: String
        },

        final_percent: {
            type: String
        },

        final_investor: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Investor"
        }
    },
    { timestamps: true });


const RoomModel = mongoose.model("Room", roomSchema);
module.exports = RoomModel;