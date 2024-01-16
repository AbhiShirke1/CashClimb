const mongoose = require('mongoose');

const investorSchema = mongoose.Schema({
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
    },

    invested_companies: {
        type: Number
    },

    investing_category: {
        type: String
    },

    favourites:[
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User"
        }
    ],

    invested_company_names: {
        type: [String]
    },

    amount_invested: {
        type: [Number]
    },

    auction_reg_companies: {
        type: [String]
    }

},
{timestamps: true});

const InvestorModel = mongoose.model("Investor", investorSchema);
module.exports = InvestorModel;