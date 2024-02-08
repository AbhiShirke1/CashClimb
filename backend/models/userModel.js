const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    approve_status: {
        type: Boolean,
        default: false
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

    full_name: {
        type: String
    },

    company: {
        type: String,
        unique: true
    },

    pic: {
        type: String,
        default:
            "https://icon-library.com/images/anonymous-avatar-icon/anonymous-avatar-icon-25.jpg",
    },

    cin: {
        type: String
    },

    location: {
        type: String
    },

    website: {
        type: String
    },

    established_year: {
        type: String
    },

    founders: [{
        name: {
            type: String
        },

        designation: {
            type: String
        }
    }],

    description: {
        type: String,
    },

    domain: {
        type: [String],
    },

    valuation: {
        type: String,
    },

    funding: [{
        funding_stage: {
            type: String
        },

        amount_raised: {
            type: String
        },

        investor_name: {
            type: String
        },
    }],

    no_of_employees: {
        type: Number,
    },

    //pitch
    pitch_desc: {
        type: String
    },

    links: {
        tye: String
    }
},
    { timestamps: true });

const UserModel = mongoose.model("User", userSchema);
module.exports = UserModel;