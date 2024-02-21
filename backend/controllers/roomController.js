const User = require('../models/userModel');
const Room = require('../models/roomModel');
const Investor = require('../models/investorModel');

const createRoom = async (req, res) => {
    const { date, time, base_amount, base_percent } = req.body;
    let active = true;
    const name = req.user._id;
    // console.log(name);
    let date1 = new Date(date);
    // console.log(date1);

    let day_after_tomorrow = new Date();
    day_after_tomorrow.setDate(day_after_tomorrow.getDate() + 2);
    const date2 = day_after_tomorrow;
    // console.log(date2);

    let Difference_In_Time = date2.getTime() - date1.getTime();
    // console.log(Difference_In_Time);

    let Difference_In_Days = Math.floor(
        Difference_In_Time / (1000 * 3600 * 24)
    );
    // console.log(Difference_In_Days);
    if (Difference_In_Days < 0) {
        try {
            const user = await Room.findOne({
                $and: [{ company: name }, { active: active }],
            });

            if (user) {
                return res.json("Room already created");
            }

            const room = await Room.create({
                active: active, company: name, base_amount: base_amount, start_date: date, start_time: time, base_percent: base_percent
            });

            if (room) {
                res.json(room);
            }
        } catch (error) {
            res.json("Error ocurred while creating room");
        }
    } else {
        res.json("There should be gap");
    }
};

const createRoom2 = async (req, res) => {
    const { money, percent } = req.body;
    const id = req.user._id;

    try {
        const newRoom = await Room.create({
            active: true,
            roomId: id,
            company: id,
            base_amount: money,
            base_percentage: percent
        });

        res.status(200).json(newRoom);


    } catch (error) {
        res.json("Some error ocurred")
    }
};

const getAllRooms = async (req, res) => {
    try {
        const allRooms = await Room.find({});

        res.json(allRooms);
    } catch (error) {
        res.json(error);
    }
}

const getRegisteredRooms = async (req, res) => {
    const { id } = req.body;
    try {
        const registedRoom = await Room.find({ interested_investors: id });

        res.json(registedRoom);
    } catch (error) {
        res.json(error);
    }
}

const getFounderInfo = async (req, res) => {
    const {id} = req.body;

    try {
        const founderData = await User.findOne({_id: id});

        res.json(founderData);
    } catch (error) {
        res.json(error);
    }
}

const checkRoomCreated = async(req, res)=>{
    const id = req.user._id;
    // console.log(id);

    try {
        let exist = await Room.findOne({company: id}).populate("interested_investors", "name");
        // console.log(exist);

        if(exist){
            // exist = await exist.populate("company", "full_name");

            console.log(exist);
            return res.json(exist)
        }

        else{
            return res.json("Room not created");
        }
    } catch (error) {
        res.json(error);
    }
}


const registerRoom = async (req, res) => {
    const id = req.params.id;
    const investorID = req.user._id;
    // console.log(typeof(investorID));
    try {
        const registered = await Room.findOne({ roomId: id });
        console.log(registered);

        let arr = registered.interested_investors;

        // if (!arr.contains(investorID)) {
        //     return res.json("You have already registered for the room");
        // }

        registered.interested_investors.push(investorID);
        console.log(registered);
        const updatedData = await registered.save();
        console.log(updatedData);
        res.json(updatedData);

    } catch (error) {
        res.json(error)
    }
}

const checkPermission = async (req, res) => {
    const id = req.params.id;
    const ownId = req.user._id;

    try {
        const isRegistered = await Room.findById({ _id: id });

        if (isRegistered.interested_investors.includes(ownId)) {
            return res.status(200).send("allowed");
        }

        else {
            return res.json("Not registered for the room");
        }
    } catch (error) {
        res.json(error);
    }

}



module.exports = { createRoom, registerRoom, checkPermission, createRoom2, getAllRooms, getRegisteredRooms, getFounderInfo, checkRoomCreated };