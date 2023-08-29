const express = require("express");
const cors = require("cors");
const path = require("path");
const cookieParser = require("cookie-parser");
const app = express();
const mongoose = require("mongoose");
const { Schema } = mongoose;
require("dotenv").config();
mongoDb = process.env.SECRET_KEY;
mongoose.connect(mongoDb, { useUnifiedTopology: true, useNewUrlParser: true });


app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
const Game = require("./models/game")
const Character = require("./models/character")
const Leaderboard = require("./models/leaderboard")
const gameRouter = require("./router/gameRouter")
const characterRouter = require("./router/characterRouter")
const leaderboardRouter = require("./router/leaderboardRouter")

app.use("/", gameRouter);
app.use("/character", characterRouter)
app.use("/leaderboard", leaderboardRouter)
const port = process.env.PORT || 3000;

app.listen(port, "0.0.0.0", function () {
  console.log(`Server is running on port 3000`);
});