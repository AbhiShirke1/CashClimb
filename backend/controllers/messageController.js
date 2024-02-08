const asyncHandler = require("express-async-handler");
const Message = require("../models/messageModel");
const User = require("../models/userModel");
const Chat = require("../models/chatModel");
const Investor = require("../models/investorModel");

const allMessages = asyncHandler(async (req, res) => {
    try {
        const messages = await Message.find({ chat: req.params.chatId })
            .populate("sender", "email")
            .populate("chat");
        res.json(messages);
    } catch (error) {
        res.status(400);
        throw new Error(error.message);
    }
});

const sendMessage = asyncHandler(async (req, res) => {
    const { content, chatId } = req.body;
    const id = req.user._id;

    if (!content || !chatId) {
        console.log("Invalid data passed into request");
        return res.sendStatus(400);
    }

    const user = await User.findOne({ _id: id });
    const investor = await Investor.findOne({ _id: id });

    if (user) {
        var newMessage = {
            sender: req.user._id,
            senderModel: "User",
            content: content,
            chat: chatId,
        };

        try {
            var message = await Message.create(newMessage);

            message = await message.populate("sender", "email");
            message = await message.populate("chat");
            message = await message.populate("chat.user1", "-password");
            message = await message.populate("chat.user2", "-password");
            // message = await User.populate(message, {
            //     path: "chat.user1",
            //     select: "email",
            // });

            await Chat.findByIdAndUpdate(req.body.chatId, {
                latestMessage: message,
            });

            res.json(message);
        } catch (error) {
            res.status(400);
            throw new Error(error.message);
        }
    }
    else if (investor) {
        var newMessage = {
            sender: req.user._id,
            senderModel: "Investor",
            content: content,
            chat: chatId,
        };

        try {
            var message = await Message.create(newMessage);

            message = await message.populate("sender", "email");
            message = await message.populate("chat");
            message = await message.populate("chat.user1", "-password");
            message = await message.populate("chat.user2", "-password");
            // message = await User.populate(message, {
            //     path: "chat.user1",
            //     select: "email",
            // });

            await Chat.findByIdAndUpdate(req.body.chatId, {
                latestMessage: message,
            });

            res.json(message);
        } catch (error) {
            res.status(400);
            throw new Error(error.message);
        }
    }

    // var newMessage = {
    //     sender: req.user._id,
    //     content: content,
    //     chat: chatId,
    // };

    // try {
    //     var message = await Message.create(newMessage);

    //     message = await message.populate("sender", "email").execPopulate();
    //     message = await message.populate("chat").execPopulate();
    //     message = await User.populate(message, {
    //         path: "chat.users",
    //         select: "email",
    //     });

    //     await Chat.findByIdAndUpdate(req.body.chatId, {
    //         latestMessage: message,
    //     });

    //     res.json(message);
    // } catch (error) {
    //     res.status(400);
    //     throw new Error(error.message);
    // }
});

module.exports = { allMessages, sendMessage };
