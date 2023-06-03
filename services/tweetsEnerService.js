// const Tweet = require("../models/tweettener.model");
// const moment = require("moment");

// exports.groupTweetsByDate = async (req) => {
  
//   const countByDate = await Tweet.aggregate([
//     {
//       $group: {
//         _id: { $dateToString: { format: "%Y", date: "$date" } }, // Change format to %Y
//         count: { $sum: 1 },
//       },
//     },
//     { $project: { year: "$_id", count: 1, _id: 0 } }, // Change month to year
//     { $sort: { year: 1 } }, // Change month to year
//   ]);

//   return countByDate;
// };

// exports.Top5LikedTweets = async (req) => {
//   const receivedDate = req.body.date;
//   const startDate = new Date(receivedDate);
//   startDate.setUTCHours(0, 0, 0, 0);
//   const endDate = new Date(receivedDate);
//   endDate.setUTCHours(23, 59, 59, 999);
//   const top5LikedTweets = await Tweet.find({
//     hearts: { $gte: 1 },
//     date: { $gte: startDate, $lt: endDate },
//   })
//     .sort({ hearts: -1 })
//     .limit(5)
//     .exec();
//   return top5LikedTweets;
// };

// exports.Top5ControversialTweets = async (req) => {
//   const receivedDate = req.body.date;
//   const startDate = new Date(receivedDate);
//   startDate.setUTCHours(0, 0, 0, 0);
//   const endDate = new Date(receivedDate);
//   endDate.setUTCHours(23, 59, 59, 999);

//   const top5ControvertialTweets = await Tweet.find({
//     quotes: { $gte: 1 },
//     date: { $gte: startDate, $lt: endDate },
//   })
//     .sort({ quotes: -1 })
//     .limit(5)
//     .exec();

//   return top5ControvertialTweets;
// };
