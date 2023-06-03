const FreqOcc = require("../models/freqoccJanvier.model");
exports.Top10UsedWords = async () => {
  const Top10UsedWords = await FreqOcc.find({})
    .sort({ Freq: -1 })
    .limit(10)
    .exec();

  return Top10UsedWords;
};
