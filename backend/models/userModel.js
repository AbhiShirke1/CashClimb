const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    username: {
        type: String
    },
    
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

    pic:{
        type: String,
        default:
        "https://icon-library.com/images/anonymous-avatar-icon/anonymous-avatar-icon-25.jpg",
    },

    founders: {
        type: [String],
    },

    description: {
        type: String,
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
{timestamps: true});

const UserModel = mongoose.model("User", userSchema);
module.exports = UserModel;