const SentimentCounter = require("../../models/sentimentCounter.model");
const config = require("config");
const sentimentService = require("../../services/sentimentCounterService")

var sentimentCounterController = {
  /**
   * Get all sentimentCounter
   */
  getSentimentCounter: async (req, res, next) => {
    try {
      let sentimentCounters = await SentimentCounter.find({});
      res.json(sentimentCounters);
    } catch (err) {
      console.error(err);
      next(err);
    }
  },

    /**
   * Get all sentiment grouped
   */
    getGroupedSentiments: async (req, res, next) => {
      try {
        let sentimentCounters = await sentimentService.groupSentiments(req)
        res.json(sentimentCounters);
      } catch (err) {
        console.error(err);
        next(err);
      }
    },

  /**
   * Add sentimentCounter
   */
  addOne: async (req, res, next) => {
    try {
      let sentimentCounters = await SentimentCounter.create(req.body);
      res.json(sentimentCounters);
    } catch (err) {
      console.log(err);
      next(err);
    }
  },
};

module.exports = sentimentCounterController;
