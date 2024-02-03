const generateToken = require("../config/generateToken");
const User = require("../models/userModel");
const Investor = require("../models/investorModel");
const asyncHandler = require("express-async-handler");

const registerUser = async (req, res) => {
    const { founder, investor } = req.body;

    if (founder && !investor) {
        const { email, password } = req.body;

        if (!email || !password) {
            res.status(400).json("Please enter all the fields");
        }

        if (password.length <= 5) {
            res.status(400).json("Password length should be more than 8");
        }

        const userExists = await User.findOne({ email });
        if (userExists) {
            return res.status(400).json("User already exists ");
        }

        try {
            const user = await User.create({
                email,
                password,
            });

            if (user) {
                res.status(201).json(user);
            }
        } catch (error) {
            res.status(422).json(error);
        }
    } else if (investor && !founder) {
        const { email, password } = req.body;

        if (!email || !password) {
            res.status(400).json("Please enter all the fields");
        }

        if (password.length <= 5) {
            res.status(400);
            throw new Error("Password length should be more than 8");
        }

        const userExists = await Investor.findOne({ email });
        if (userExists) {
            return res.status(400).json("User already exists");
        }

        try {
            const user = await Investor.create({
                email,
                password,
            });

            if (user) {
                res.status(201).json(user);
            }
        } catch (error) {
            res.status(422).json(error);
        }
    }
};

const loginUser = async (req, res) => {
    const { founder, investor } = req.body;

    if (founder && !investor) {
        const { email, password } = req.body;

        if (!email || !password) {
            return res.status(400).json("Please enter all the fields");
        }

        try {
            const user = await User.findOne({ email });

            if (user) {
                if (user.password === password) {
                    res.status(201).json({
                        user,
                        token: generateToken(user._id),
                    });
                } else {
                    res.status(400).json("Invalid Email or Password");
                }
            } else {
                res.status(400).json("Invalid Email or Password");
            }
        } catch (error) {
            res.status(400).json("Some error ecourred");
        }
    } else if (investor && !founder) {
        const { email, password } = req.body;

        if (!email || !password) {
            return res.status(400).json("Please enter all the fields");
        }

        try {
            const user = await Investor.findOne({ email });

            if (user) {
                if (user.password === password) {
                    res.status(201).json({
                        user,
                        token: generateToken(user._id),
                    });
                } else {
                    res.status(400).json("Invalid Email or Password");
                }
            } else {
                res.status(400).json("Invalid Email or Password");
            }
        } catch (error) {
            res.status(400).json("Some error ecourred");
        }
    }
};

const allUsers = asyncHandler(async (req, res) => {
    const keyword = req.query.search
        ? {
              $or: [
                  { name: { $regex: req.query.search, $options: "i" } },
                  { email: { $regex: req.query.search, $options: "i" } },
              ],
          }
        : {};

    const users = await User.find(keyword).find({ _id: { $ne: req.user._id } });
    res.send(users);
});

module.exports = { registerUser, loginUser, allUsers };
