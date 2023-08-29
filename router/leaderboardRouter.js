var express = require('express');
var router = express.Router();
const leaderBoardController = require("../controller/leaderboardController");

router.get("/", leaderBoardController.get);
router.post("/", leaderBoardController.post);


module.exports = router;