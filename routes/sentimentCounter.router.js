var express = require("express");
var router = express.Router();
const sentimentCounterController = require("../controllers/sentimentCounter/sentimentCounter.controller");

/* GET nodes listing. */
router.get(
  "/sentimentCounters",
  sentimentCounterController.getSentimentCounter
);

/* POST nodes listing. */
router.post("/sentimentCounter", sentimentCounterController.addOne);
router.post(
  "/groupedSentiment",
  sentimentCounterController.getGroupedSentiments
);

module.exports = router;
