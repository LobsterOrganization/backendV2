const Tweet = require("../../models/tweet.model");
const config = require("config");
const tweetsService = require("../../services/tweetsService");
var tweetController = {
  /**
   * Get all Tweets
   */
  getTweets: async (req, res, next) => {
    try {
      let tweets = await Tweet.find({});
      res.json(tweets);
    } catch (err) {
      console.error(err);
      next(err);
    }
  },

  /**
   * Group Tweets By Date
   */
  getTweetsGroupedByDate: async (req, res, next) => {
    try {
      let tweets = await tweetsService.groupTweetsByDate(req);
      res.json(tweets);
    } catch (err) {
      console.error(err);
      next(err);
    }
  },

  /**
   * Top 5 Tweets
   */
  getTop5LikedTweets: async (req, res, next) => {
    try {
      let tweets = await tweetsService.Top5LikedTweets(req);
      res.json(tweets);
    } catch (err) {
      console.error(err);
      next(err);
    }
  },

  getTop5ControversialTweets: async (req, res, next) => {
    try {
      let tweets = await tweetsService.Top5ControversialTweets(req);
      res.json(tweets);
    } catch (err) {
      console.error(err);
      next(err);
    }
  },
  /**
   * Add Tweet
   */
  addOne: async (req, res, next) => {
    try {
      let tweets = await Tweet.create(req.body);
      res.json(tweets);
    } catch (err) {
      console.log(err);
      next(err);
    }
  },
};

module.exports = tweetController;
