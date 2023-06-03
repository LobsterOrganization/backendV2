const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const nodeSchema = new Schema(
  {
    actorName: {
      type: String,
      required: true,
    },
    sectorClassification: {
      type: String,
      required: true,
    }
  },
  {
    collection: "Node",
    timestamps: true,
  }
);

const Node = mongoose.model("Node", nodeSchema);
module.exports = Node;
