const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const trendSchema = new Schema(
  {
    word: {
      type: String,
      required: true,
    },
    enrollment: {
      type: Number,
      required: true,
    }
  },
  {
    collection: "Trends",
    timestamps: true,
  }
);

const Node = mongoose.model("Trends", trendSchema);
module.exports = Node;
