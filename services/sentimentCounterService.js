const SentimentCounter = require("../models/sentimentCounter.model");
const moment = require("moment");

exports.groupSentiments = async (req) => {
  const receivedDate = req.body.date;
  const startDate = new Date(receivedDate);
  startDate.setUTCHours(0, 0, 0, 0);
  const endDate = new Date(receivedDate);
  endDate.setUTCHours(23, 59, 59, 999);
  const sentimentCounts = await SentimentCounter.aggregate([
    {
      $match: {
        date: { $gte: startDate, $lt: endDate },
      },
    },
    {
      $group: {
        _id: null,
        positive: { $sum: "$positive" },
        neutral: { $sum: "$neutral" },
        negative: { $sum: "$negative" },
      },
    },
    {
      $project: {
        _id: 0,
        positive: 1,
        neutral: 1,
        negative: 1,
      },
    },
  ]);

  return sentimentCounts;
};
