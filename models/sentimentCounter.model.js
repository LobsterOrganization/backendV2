const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const sentimentCounterSchema = new Schema(
  {
    date: {
      type: String,
      required: true,
    },
    negative: {
      type: Number,
      required: true,
    },
    neutral: {
      type: Number,
      required: true,
    },
    positive: {
      type: Number,
      required: true,
    },
  },
  {
    collection: "SentimentCounter",
    timestamps: true,
  }
);

const Node = mongoose.model("SentimentCounter", sentimentCounterSchema);
module.exports = Node;
