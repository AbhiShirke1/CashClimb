const generateToken = require("../config/generateToken");
const User = require("../models/userModel");
const Investor = require("../models/investorModel");
const asyncHandler = require("express-async-handler");

const registerUser = async (req, res) => {
    const { founder, investor } = req.body;

    if (founder && !investor) {
        const { email, password, full_name, company, cin, location, website, established_year, founders, description, domain, valuation, funding, no_of_employee, pitch_desc, links } = req.body;

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
                email, password, full_name, company, cin, location, website, established_year, founders, description, domain, valuation, funding, no_of_employee, pitch_desc, links
            });

            if (user) {
                res.status(201).json(user);
            }
        } catch (error) {
            res.status(422).json(error);
        }
    }

    else if (investor && !founder) {
        const { email, password, company, invested_companies, investing_category, favourites, invested_companies_names, amount_invested, auction_reg_companies } = req.body;

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
    const { email, password } = req.body;

    if (!email || !password) {
        return res.status(400).json("Please enter all the fields")
    }

    try {
        const user = await User.findOne({ email });
        const user2 = await Investor.findOne({ email });

        if (user) {
            if (user.approve_status) {
                if (user.password === password) {
                    res.status(201).json({
                        user,
                        token: generateToken(user._id),
                    });
                } else {
                    res.status(400).json("Invalid Email or Password");
                }
            }

            else {
                res.json("Your profile is not approved yet");
            }
        }

        else if (user2) {
            if (user2.approve_status) {
                if (user2.password === password) {
                    res.status(201).json({ user2, token: generateToken(user2._id) });
                }

                else {
                    res.status(400).json("Invalid Email or Password");
                }
            }

            else {
                res.json("Your profile is not approved yet");
            }
        }

        else {
            res.status(400).json("Invalid Email or Password");
        }

    } catch (error) {
        res.status(400).json("Some error ecourred");
    }
}

const getProfile = async (req, res) => {
    const id = req.user._id;
    try {
        const user = await User.findOne({ _id: id });

        if (user.approve_status) {
            return res.json(user);
        }
    } catch (error) {
        res.json("Some error occured");
    }
}

const editProfile = async (req, res) => {
    const { full_name, location, website, founders, description, domain, valuation, funding, no_of_employee, pitch_desc, links } = req.body;

    const id = req.user._id;

    try {

        const user = await User.updateOne({ _id: id }, {
            $set: {
                full_name, location, website, founders, description, domain, valuation, funding, no_of_employee, pitch_desc, links
            }
        });

        res.json("Data updated successfully");
    } catch (error) {
        res.json("Some error occured");
    }
}

module.exports = { registerUser, loginUser, getProfile, editProfile };