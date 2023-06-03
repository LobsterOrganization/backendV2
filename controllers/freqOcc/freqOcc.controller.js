const FreqOcc = require("../../models/freqocc.model");
const config = require("config");
const freqOccService = require("../../services/freqOccService")
var freqOccController = {
  /**
   * Get all freqOcc
   */
  getFreqOcc: async (req, res, next) => {
    try {
      let freqOccs = await FreqOcc.find({});
      res.json(freqOccs);
    } catch (err) {
      console.error(err);
      next(err);
    }
  },

    /**
   * Get all top10UsedWords
   */
    getTop10UsedWords: async (req, res, next) => {
      try {
        let top10UsedWords = await freqOccService.Top10UsedWords();
        res.json(top10UsedWords);
      } catch (err) {
        console.error(err);
        next(err);
      }
    },

  /**
   * Add freqOcc
   */
  addOne: async (req, res, next) => {
    try {
      let freqOccs = await FreqOcc.create(req.body);
      res.json(freqOccs);
    } catch (err) {
      console.log(err);
      next(err);
    }
  },
};

module.exports = freqOccController;
