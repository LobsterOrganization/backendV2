var express = require("express");
var router = express.Router();

// Set Cors
var cors = require("cors");
const freqOccController = require("../controllers/freqOcc/freqOcc.controller");

/* GET nodes listing. */
router.get("/freqOcc", freqOccController.getFreqOcc);
router.get("/top10UsedWords", freqOccController.getTop10UsedWords);

/* POST nodes listing. */
router.post("/freqOcc", freqOccController.addOne);

module.exports = router;
