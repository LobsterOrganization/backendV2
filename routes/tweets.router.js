var express = require("express");
var router = express.Router();

var tweetsController = require("../controllers/tweets/tweets.controller");

router.get("/tweets", tweetsController.getTweets);

router.post("/tweetsGroupedByDate",tweetsController.getTweetsGroupedByDate);
router.post("/tweets", tweetsController.addOne);
router.post("/top5LikedTweets",tweetsController.getTop5LikedTweets);
router.post("/top5ControversialTweets",tweetsController.getTop5ControversialTweets);

module.exports = router;
