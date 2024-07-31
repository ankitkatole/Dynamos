const User = require('../models/user');

const screenTime = async (req,res) => {
    const time = req.body.time;
    const email = req.body.email;

    try {
        const user = await User.findOne({email});
        
        if(!user) {
            return res.status(400).send("User not found");
        }

        user.screenTime = user.screenTime + time;
        user.save();

        res.status(200).send("Time saved successfully");

    } catch (error) {
        res.status(500).send("Unable to send screenTime");
    }
};

const getScreenTime = async (req, res) => {
    const email = req.body.email;

    try {
        const user = await User.findOne({email});
        
        if(!user) {
            return res.status(400).send("User not found");
        }

        console.log(user.screenTime);
        res.status(200).send({screenTime : user.screenTime});

    } catch (error) {
        res.status(500).send("Unable to send screenTime");
    }
    
};

module.exports = {screenTime, getScreenTime};