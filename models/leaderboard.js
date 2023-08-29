const mongoose = require("mongoose");
const {Schema} = mongoose;

const leaderBoardSchema = new Schema({
    name:{type:String, required: true},
    time: {type: Number, required: true},
    date: {type: Date, required: true}
})

module.exports = mongoose.model("Leaderboard", leaderBoardSchema)