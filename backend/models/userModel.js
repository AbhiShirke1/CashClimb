const mongoose = require('mongoose');
const bcrypt = require("bcryptjs");

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
        type: String
    }
},
    { timestamps: true });

userSchema.methods.matchPassword = async function (enteredPassword) {
    return await bcrypt.compare(enteredPassword, this.password);
};

userSchema.pre("save", async function (next) {
    if (!this.isModified) {
        next();
    }

    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt);
});

const UserModel = mongoose.model("User", userSchema);
module.exports = UserModel;