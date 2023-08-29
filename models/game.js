const mongoose = require("mongoose");
const { Schema } = mongoose;

const gameSchema = new Schema({
    title: {type: String, required: true} ,
    characters: [{type: Schema.Types.ObjectId, ref: "Characters",required: true}]
})
module.exports = mongoose.model("Game", gameSchema );