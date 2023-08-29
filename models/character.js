const mongoose = require("mongoose");
const {Schema} = mongoose;

const characterSchema = new Schema({
    name: {type: String, required: true},
    x: {type: Number, required:true},
    y: {type: Number, required:true},
    isFound: {type:Boolean, required: true},
    game: {type: Schema.Types.ObjectId, ref: "Game",required: true}
})

module.exports = mongoose.model("Characters", characterSchema)

