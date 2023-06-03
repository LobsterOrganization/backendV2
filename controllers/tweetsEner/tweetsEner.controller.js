// const Tweet = require("../../models/tweettener.model");
// const config = require("config");
// const tweetsService = require("../../services/tweetsEnerService");
// var tweetsEnerController = {
//   /**
//    * Get all Tweets
//    */
//   getTweets: async (req, res, next) => {
//     try {
//       let tweets = await Tweet.find({});
//       res.json(tweets);
//     } catch (err) {
//       console.error(err);
//       next(err);
//     }
//   },

//   getTweetsGroupedByDate: async (req, res, next) => {
//     try {
//       let tweets = await tweetsService.groupTweetsByDate(req);
//       res.json(tweets);
//     } catch (err) {
//       console.error(err);
//       next(err);
//     }
//   },

//   getTop5LikedTweets: async (req, res, next) => {
//     try {
//       let tweets = await tweetsService.Top5LikedTweets(req);
//       res.json(tweets);
//     } catch (err) {
//       console.error(err);
//       next(err);
//     }
//   },

//   getTop5ControversialTweets: async (req, res, next) => {
//     try {
//       let tweets = await tweetsService.Top5ControversialTweets(req);
//       res.json(tweets);
//     } catch (err) {
//       console.error(err);
//       next(err);
//     }
//   },
//   /**
//    * Add Tweet
//    */
//   addOne: async (req, res, next) => {
//     try {
//       let tweets = await Tweet.create(req.body);
//       res.json(tweets);
//     } catch (err) {
//       console.log(err);
//       next(err);
//     }
//   },
// };

// module.exports = tweetsEnerController;
