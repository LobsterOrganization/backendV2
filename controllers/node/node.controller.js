const Node = require("../../models/node.model");
const config = require("config");

var nodeController = {
  /**
   * Get all nodes
   */
  getNodes: async (req, res, next) => {
    try {
      let nodes = await Node.find({});
      res.json(nodes);
    } catch (err) {
      console.error(err);
      next(err);
    }
  },

  addOne: async (req, res, next) => {
    try {
      let node = await Node.create(req.body);
      res.json(node);
    } catch (err) {
      console.err(err);
      next(err);
    }
  }
};

module.exports = nodeController;
