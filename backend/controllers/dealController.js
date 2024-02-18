const asyncHandler = require("express-async-handler");
const Deal = require('../models/dealModel');
const User = require('../models/userModel');
const Room = require('../models/roomModel');
const Investor = require('../models/investorModel');

const sendOffer = asyncHandler(async (req, res) => {
    const { roomId, amount, percent } = req.body;

    if (!roomId || !amount || !percent) {
        console.log("Invalid data passed into request");
        return res.sendStatus(400);
    }

    var newOffer = {
        room: roomId,
        investor: req.user._id,
        amount: amount,
        percentage: percent
    }

    try {
        var offer = await Deal.create(newOffer);

        offer = await offer.populate("room");
        offer = await offer.populate("investor", "email");

        res.json(offer);
    } catch (error) {
        res.status(400);
        throw new Error(error.message);
    }
});

const dealAccept = async(req, res)=>{
    const {percent, amount, investorId, roomId} = req.body;
    const founder = req.user._id;
    const companyName = req.user.company;
    try {
        const room = await Room.findById({_id: roomId});
        // console.log(room.final_investor);
        // if(room.final_investor == investorId) console.log("hsdfi");
        if(room.final_investor == investorId){
            // console.log("hi");
            res.send("Deal is closed!!");
        }

        else{
            const updateRoom = await Room.updateOne({
                _id: roomId
            }, {
                $set: {
                    final_amount: amount,
                    final_percent: percent,
                    final_investor: investorId
                }
            });

            // console.log(updateRoom);


            const investorData = {
                invested_company_names: companyName,
                invested_amount: amount,
                percentage: percent
            };
            const updateInvestor = await Investor.updateOne({
                _id: investorId
            }, {
                $push:{
                    invested_data: investorData
                }
            });


            //investor name from investorId
            const getInvestorName = await Investor.findOne({_id: investorId});
            // console.log(getInvestorName);
            const investorName = getInvestorName.name;

            const userData = {
                where: true,
                funding_stage: "-",
                amount_raised: amount,
                percentage: percent,
                investor_name: "abhi"
            }
            const updateUser = await User.updateOne({
                _id: founder
            }, { 
            $push:{
                funding:userData
            }})

            if(updateRoom && updateInvestor && updateUser){
                return res.send("Deal accepted!", {percent, amount, investorName});
            }
        }

        res.send("Deal not accepted")
    } catch (error) {
        console.log(error);
        res.send("Some error occured");
    }
}

module.exports = { sendOffer, dealAccept };