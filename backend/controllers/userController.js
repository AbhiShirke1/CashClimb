const generateToken = require("../config/generateToken");
const User = require("../models/userModel");
const Investor = require("../models/investorModel");
const asyncHandler = require("express-async-handler");

const registerUser = async (req, res) => {
    const { role } = req.body;

    if (role === "Founder") {
        const { email, password, full_name, company, cin, location, website, established_year, founders, description, domain, valuation, funding, no_of_employees, pitch_desc, links } = req.body;

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
            // console.log("test");
            const user = await User.create({
                email, password, full_name, company, cin, location, website, established_year, founders, description, domain, valuation, funding, no_of_employees, pitch_desc, links
            });
            // console.log("test");
            if (user) {
                const sendData = {
                    user: user,
                    role: role
                }
                res.status(201).send(sendData);
            }
        } catch (error) {
            res.status(422).json(error);
        }
    }

    else if (role === "Investor") {
        const { name, email, password, company, invested_companies, investing_category, favourites, invested_data, amount_invested, auction_reg_companies } = req.body;

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
                name,
                email,
                password,
                company,
                invested_companies,
                invested_data,
                investing_category,
            });

            if (user) {
                const sendData = {
                    user: user,
                    role: role
                }
                res.status(201).send(sendData);
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
        if (email === "admin" && password == "password") {
            return res.json("admin");
        }

        const user = await User.findOne({ email });
        const user2 = await Investor.findOne({ email });

        if (user) {
            if (user.approve_status) {
                if (await user.matchPassword(password)) {
                    res.status(201).json({
                        user,
                        role:"Founder",
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
                if (await user2.matchPassword(password)) {
                    res.status(201).json({ user:user2,role:"Investor", token: generateToken(user2._id) });
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
    const { full_name, location, website, founders, description, domain,pic, sales,valuation, finances, funding, no_of_employees, pitch_desc, links, established_year, summary } = req.body;

    const id = req.user._id;

    try {

        const update = await User.updateOne({ _id: id }, {
            $set: {
                full_name, location, website, founders, description, finances,pic, domain,sales, valuation, funding, no_of_employees, pitch_desc, links, established_year, summary
            }
        });
        const user = await User.findOne({ _id: id });
        res.json(user);
    } catch (error) {
        res.json("Some error occured");
    }
}

const getAllFounders = async (req, res) => {
    try {
        const founders = await User.find({});

        res.json(founders);
    } catch (error) {
        res.json("Unable to fetch founders");
    }
}

const getAllInvestors = async (req, res) => {
    try {
        const founders = await User.find({});

        res.json(founders);
    } catch (error) {
        res.json("Unable to fetch founders");
    }
}

const allUsers = asyncHandler(async (req, res) => {
    const keyword = req.query.search
        ? {
            $or: [
                // { name: { $regex: req.query.search, $options: "i" } },
                { email: { $regex: req.query.search, $options: "i" } },
            ],
        }
        : {};

    const users = await User.find(keyword).find({ _id: { $ne: req.user._id } });
    res.send(users);
});

module.exports = { registerUser, loginUser, getProfile, editProfile, getAllFounders, getAllInvestors, allUsers };