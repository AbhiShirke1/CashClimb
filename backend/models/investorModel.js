const mongoose = require('mongoose');

const investorSchema = mongoose.Schema({
    approve_status: {
        type: Boolean,
        default: true
    },
    
    name: {
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

    pic: {
        type: String,
        default:
        "https://icon-library.com/images/anonymous-avatar-icon/anonymous-avatar-icon-25.jpg",
    },

    address: {
        type: String
    },

    pan: {
        type: String
    },

    company: {
        type: String,
        unique: true
    },

    invested_companies: {
        type: [Number]
    },

    investing_category: {
        type: [String]
    },

    favourites:[
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User"
        }
    ],

    invested_data: [{
        invested_company_names: {
            type: String
        },

        invested_amount: {
            type: Number
        },

        percentage: {
            type: Number
        }
    }],

    room_reg_companies: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Room"
        }
    ],
},
{timestamps: true});

const InvestorModel = mongoose.model("Investor", investorSchema);
module.exports = InvestorModel;