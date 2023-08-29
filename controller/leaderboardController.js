const asyncHandler = require('express-async-handler');
const Leaderboard = require("../models/leaderboard");


exports.get = asyncHandler(async(req,res,next) => {
    const allWinners = await Leaderboard.find().sort({time:1}).exec();
    if(allWinners){
        res.status(200).json(allWinners)
    }
    else {
        res.status(500);
    }
})
exports.post = asyncHandler(async(req, res, next) => {
    const newWinner =  new Leaderboard(
       { name: req.body.name,
        time: req.body.time,
        date: req.body.date}
    )
    await newWinner.save();
    const findNewWinner = await Leaderboard.findOne({name: req.body.name, date: req.body.date})
    if(findNewWinner) {
        res.status(201).json({message:"success"});
    }
    else{
        res.status(500).json({message: "Error saving new winner"})
    }
})