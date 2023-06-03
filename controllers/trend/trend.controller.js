const Trend = require("../../models/trend.model");
const config = require("config");

var trendController = {
  /**
   * Get all trends
   */
  getTrends: async (req, res, next) => {
    try {
      let trends = await Trend.find({});
      res.json(trends);
    } catch (err) {
      console.error(err);
      next(err);
    }
  },

  /**
   * Add trend
   */
  addOne: async (req, res, next) => {
    try {
      let trend = await Trend.create(req.body);
      res.json(trend);
    } catch (err) {
      console.err(err);
      next(err);
    }
  }
};

module.exports = trendController;
