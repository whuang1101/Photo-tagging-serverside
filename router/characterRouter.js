const express = require("express");
let router = express.Router();

const characterController = require("../controller/characterController");


router.get("/:id", characterController.get)

module.exports = router;