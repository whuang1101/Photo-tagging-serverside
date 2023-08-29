const asyncHandler = require('express-async-handler');
const Character = require("../models/character");


exports.get = asyncHandler(async(req, res, next) => {
    console.log("no")
    const character = await Character.findOne({name: req.params.id}).exec();
    if(character)
   { res.json({x:character.x, y:character.y});}
   else{
    res.status(500).json({message: "Character was not able to be found"});
   }
})