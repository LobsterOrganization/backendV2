const Polarite = require("../../models/polarite.model");
const config = require("config");
const polariteService = require("../../services/polariteSerivce");
var polariteController = {
  /**
   * Get all Polarities
   */
  getPolarities: async (req, res, next) => {
    try {
      let polarities = await Polarite.find({});
      res.json(polarities);
    } catch (err) {
      console.error(err);
      next(err);
    }
  },

  /**
   * Get all Polarities
   */
  getEcologicalThemesCount: async (req, res, next) => {
    try {
      let groupedEcologicalThemes = await polariteService.groupEcologicalThemes(
        req
      );
      res.json(groupedEcologicalThemes);
    } catch (err) {
      console.error(err);
      next(err);
    }
  },

  /**
   * Get all Polarities
   */
  getEnergeticalThemesCount: async (req, res, next) => {
    try {
      let groupedEnergeticalThemes =
        await polariteService.groupEnergetiqueThemes(req);
      res.json(groupedEnergeticalThemes);
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
      let polarities = await Polarite.create(req.body);
      res.json(polarities);
    } catch (err) {
      console.log(err);
      next(err);
    }
  },
};

module.exports = polariteController;
