const mongoose = require("mongoose");
const User = require('./userModel');
const Investor = require('./investorModel');

const chatModel = mongoose.Schema(
    {
        chatName: {
            type: String,
            trim: true
        },
        // isGroupChat: { type: Boolean, default: false },
        // users: [{
        //     type: mongoose.Schema.Types.ObjectId,
        //     refPath: 'usersModel'
        // }],
        user1: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User'
        },

        user2: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Investor'
        },

        // usersModel: {
        //     type: String,
        //     enum: ['User', 'Investor']
        // },
        latestMessage: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Message",
        },
        // groupAdmin: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
    },
    { timestamps: true }
);

const Chat = mongoose.model("Chat", chatModel);

module.exports = Chat;
