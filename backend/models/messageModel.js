const mongoose = require("mongoose");

const messageSchema = mongoose.Schema(
    {
        // role: {
        //     type: String,
        //     required: true
        // },
        sender: {
            type: mongoose.Schema.Types.ObjectId,
            refPath: 'senderModel'
            // ref: function () {
            //     return (this.role === "Founder") ? 'User' : 'Investor';
            // }
        },
        senderModel: {
            type: String,
            enum: ['User', 'Investor']
        },
        content: {
            type: String,
            trim: true
        },
        chat: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Chat"
        },
        readBy: [{
            type: mongoose.Schema.Types.ObjectId,
            ref: "User"
        }],
    },
    { timestamps: true }
);

const Message = mongoose.model("Message", messageSchema);

module.exports = Message;
