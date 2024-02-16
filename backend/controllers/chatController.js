const asyncHandler = require("express-async-handler");
const Chat = require("../models/chatModel");
const User = require("../models/userModel");
const Message = require("../models/messageModel");
const Investor = require('../models/investorModel');

const accessChat = asyncHandler(async (req, res) => {
    const { userId } = req.body;

    if (!userId) {
        console.log("UserId param not sent with request");
        return res.sendStatus(400);
    }

    const user = await User.findOne({ _id: req.user._id });
    const investor = await Investor.findOne({ _id: req.user._id });

    if (user) {
        var isChat = await Chat.find({
            // isGroupChat: false,
            $and: [
                // { users: { $elemMatch: { $eq: req.user._id } } },
                // { users: { $elemMatch: { $eq: userId } } },
                { user1: req.user._id },
                { user2: userId },
            ],
        })
            .populate("user1", "-password")
            .populate("user2", "-password")
            .populate({
                path: "latestMessage",
                populate: {
                    path: "sender",
                    select: "email"
                }
            });
    }
    else if (investor) {
        var isChat = await Chat.find({
            // isGroupChat: false,
            $and: [
                // { users: { $elemMatch: { $eq: req.user._id } } },
                // { users: { $elemMatch: { $eq: userId } } },
                { user1: userId },
                { user2: req.user._id },
            ],
        })
            .populate("user1", "-password")
            .populate("user2", "-password")
            .populate({
                path: "latestMessage",
                populate: {
                    path: "sender",
                    select: "email"
                }
            });
    }

    // .populate("latestMessage")
    // .populate("latestmessage.sender", "email");

    // isChat = await User.populate(isChat, {
    //     path: "latestMessage.sender",
    //     select: "email",
    // });

    if (isChat.length > 0) {
        res.send(isChat[0]);
    } else {

        // const user = await User.findOne({ _id: req.user._id });
        // const investor = await Investor.findOne({ _id: req.user._id });

        if (user) {
            var chatData = {
                chatName: "sender",
                user1: req.user._id,
                user2: userId,
                // isGroupChat: false,
                // users: [req.user._id, userId],
                // usersModel: "User"
            };
        }
        else if (investor) {
            var chatData = {
                chatName: "sender",
                user1: userId,
                user2: req.user._id,
                // isGroupChat: false,
                // users: [req.user._id, userId],
                // usersModel: "User"
            };
        }


        try {
            const createdChat = await Chat.create(chatData);
            const FullChat = await Chat.findOne({
                _id: createdChat._id,
            }).populate("user1", "-password").populate("user2", "-password");
            res.status(200).json(FullChat);
        } catch (error) {
            res.status(400);
            throw new Error(error.message);
        }
    }
});

const fetchChats = asyncHandler(async (req, res) => {
    const user = await User.findOne({ _id: req.user._id });
    const investor = await Investor.findOne({ _id: req.user._id });

    if (user) {
        try {
            // const keyword = req.query.search
            //     ? {
            //         $or: [
            //             { user1: { $elemMatch: { $eq: req.user._id } } },
            //             { user2: { $elemMatch: { $eq: req.user._id } } },
            //         ],
            //     }
            //     : {};
            Chat.find({ user1: req.user._id })
                .populate("user1", "-password")
                .populate("user2", "-password")
                // .populate("groupAdmin", "-password")
                .populate({
                    path: "latestMessage",
                    populate: {
                        path: "sender",
                        select: "email"
                    }
                })
                // .populate("latestMessage.sender", "-password")
                .sort({ updatedAt: -1 })
                .then(async (results) => {
                    // results = await User.populate(results, {
                    //     path: "latestMessage.sender",
                    //     select: "email",
                    // });
                    res.status(200).send(results);
                });
        } catch (error) {
            res.status(400);
            throw new Error(error.message);
        }
    }
    else if (investor) {
        try {
            // const keyword = req.query.search
            //     ? {
            //         $or: [
            //             { user1: { $elemMatch: { $eq: req.user._id } } },
            //             { user2: { $elemMatch: { $eq: req.user._id } } },
            //         ],
            //     }
            //     : {};
            Chat.find({ user2: req.user._id })
                .populate("user1", "-password")
                .populate("user2", "-password")
                // .populate("groupAdmin", "-password")
                .populate({
                    path: "latestMessage",
                    populate: {
                        path: "sender",
                        select: "email"
                    }
                })
                // .populate("latestMessage.sender", "-password")
                .sort({ updatedAt: -1 })
                .then(async (results) => {
                    // results = await User.populate(results, {
                    //     path: "latestMessage.sender",
                    //     select: "email",
                    // });
                    res.status(200).send(results);
                });
        } catch (error) {
            res.status(400);
            throw new Error(error.message);
        }
    }
});

// const createGroupChat = asyncHandler(async (req, res) => {
//     if (!req.body.users || !req.body.name) {
//         return res.status(400).send({ message: "Please Fill all the feilds" });
//     }

//     var users = JSON.parse(req.body.users);

//     if (users.length < 2) {
//         return res
//             .status(400)
//             .send("More than 2 users are required to form a group chat");
//     }

//     users.push(req.user);

//     try {
//         const groupChat = await Chat.create({
//             chatName: req.body.name,
//             users: users,
//             isGroupChat: true,
//             groupAdmin: req.user,
//         });

//         const fullGroupChat = await Chat.findOne({ _id: groupChat._id })
//             .populate("users", "-password")
//             .populate("groupAdmin", "-password");

//         res.status(200).json(fullGroupChat);
//     } catch (error) {
//         res.status(400);
//         throw new Error(error.message);
//     }
// });

// // @desc    Rename Group
// // @route   PUT /api/chat/rename
// // @access  Protected
// const renameGroup = asyncHandler(async (req, res) => {
//     const { chatId, chatName } = req.body;

//     const updatedChat = await Chat.findByIdAndUpdate(
//         chatId,
//         {
//             chatName: chatName,
//         },
//         {
//             new: true,
//         }
//     )
//         .populate("users", "-password")
//         .populate("groupAdmin", "-password");

//     if (!updatedChat) {
//         res.status(404);
//         throw new Error("Chat Not Found");
//     } else {
//         res.json(updatedChat);
//     }
// });

// // @desc    Remove user from Group
// // @route   PUT /api/chat/groupremove
// // @access  Protected
// const removeFromGroup = asyncHandler(async (req, res) => {
//     const { chatId, userId } = req.body;

//     // check if the requester is admin

//     const removed = await Chat.findByIdAndUpdate(
//         chatId,
//         {
//             $pull: { users: userId },
//         },
//         {
//             new: true,
//         }
//     )
//         .populate("users", "-password")
//         .populate("groupAdmin", "-password");

//     if (!removed) {
//         res.status(404);
//         throw new Error("Chat Not Found");
//     } else {
//         res.json(removed);
//     }
// });

// // @desc    Add user to Group / Leave
// // @route   PUT /api/chat/groupadd
// // @access  Protected
// const addToGroup = asyncHandler(async (req, res) => {
//     const { chatId, userId } = req.body;

//     // check if the requester is admin

//     const added = await Chat.findByIdAndUpdate(
//         chatId,
//         {
//             $push: { users: userId },
//         },
//         {
//             new: true,
//         }
//     )
//         .populate("users", "-password")
//         .populate("groupAdmin", "-password");

//     if (!added) {
//         res.status(404);
//         throw new Error("Chat Not Found");
//     } else {
//         res.json(added);
//     }
// });

module.exports = {
    accessChat,
    fetchChats,
    // createGroupChat,
    // renameGroup,
    // addToGroup,
    // removeFromGroup,
};
