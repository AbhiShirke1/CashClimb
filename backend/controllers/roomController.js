const User = require("../models/userModel");
const Room = require("../models/roomModel");

const createRoom = async (req, res) => {
    const { active, name, date, time, base_amount } = req.body;

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
                active: active,
                company: name,
                base_amount,
                start_date: date,
                start_time: time,
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

const registerRoom = async (req, res) => {
    const id = req.params.id;
    const { email } = req.body;

    try {
        const user = await Room.findById(id);

        if (user.active) {
            let arr = user.interested_investors;
            if (arr.includes(email)) {
                return res.json("You have already registed for the room");
            }
            user.interested_investors.push(email);
            const updatedData = await user.save();

            return res.json(updatedData);
        } else {
            return res.json("Room is not active");
        }
    } catch (error) {
        // console.log(error);
        res.json(error);
    }
};

module.exports = { createRoom, registerRoom };
