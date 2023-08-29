const asyncHandler = require('express-async-handler');
const Game = require("../models/game");


exports.get = asyncHandler(async(req, res, next) => {
    const game = await Game.find().populate("characters").exec();
    res.send(game);
})