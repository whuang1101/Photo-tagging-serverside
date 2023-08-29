const asyncHandler = require('express-async-handler');
const Game = require("../models/game");


exports.get = asyncHandler(async(req, res, next) => {
    res.send("nothing here")
})