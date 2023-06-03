const Polarite = require("../models/polarite.model");

exports.groupEcologicalThemes = async (req) => {
  const receivedDate = req.body.date;
  const startDate = new Date(receivedDate);
  startDate.setUTCHours(0, 0, 0, 0);
  const endDate = new Date(receivedDate);
  endDate.setUTCHours(23, 59, 59, 999);
  const ecologicalThemesCounts = await Polarite.aggregate([
    {
      $match: {
        Date: { $gte: startDate, $lt: endDate },
      },
    },
    {
      $group: {
        _id: "$ThemeEcologique",
        count: { $sum: 1 },
      },
    },
    {
      $project: {
        _id: 0,
        themeEcologique: "$_id",
        count: 1,
      },
    },
  ]);

  return ecologicalThemesCounts;
};

exports.groupEnergetiqueThemes = async (req) => {
  const receivedDate = req.body.date;
  const startDate = new Date(receivedDate);
  startDate.setUTCHours(0, 0, 0, 0);
  const endDate = new Date(receivedDate);
  endDate.setUTCHours(23, 59, 59, 999);
  const energeticalThemesCounts = await Polarite.aggregate([
    {
      $match: {
        Date: { $gte: startDate, $lt: endDate },
      },
    },
    {
      $group: {
        _id: "$ThemeEnergetique",
        count: { $sum: 1 },
      },
    },
    {
      $project: {
        _id: 0,
        themeEnergetique: "$_id",
        count: 1,
      },
    },
  ]);

  return energeticalThemesCounts;
};
