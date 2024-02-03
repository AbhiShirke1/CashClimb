const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    email: {
        type: String,
        unique: true,
        require: true
    },

    password: {
        type: String,
        require: true
    },

    company: {
        type: String,
        unique: true
    },

    pic: {
        type: String
    },

    founders: {
        type: [String],
    },

    description: {
        type: Number,
    },

    domain: {
        type: [String],
    },

    valuation: {
        type: Number,
    },

    amount_raised: {
        type: Number,
    },

    no_of_employees: {
        type: Number,
    },

    ceo: {
        type: String,
    }
},
    { timestamps: true });

const UserModel = mongoose.model("User", userSchema);
module.exports = UserModel;