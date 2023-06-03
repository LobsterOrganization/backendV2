const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const polariteSchema = new Schema(
  {
    Clean_Tweet: {
      type: [String],
      required: true,
    },
    Compound: {
      type: String,
      required: true,
    },
    Content: {
      type: String,
      required: true,
    },
    Date: {
      type: Date,
      required: true,
    },
    Sentiment: {
      type: String,
      required: true,
    },
    ThemeTEco: {
      type: String,
      required: true,
    },
    ThemeTEner: {
      type: String,
      required: true,
    },
    ThemeTEco: {
      type: String,
      required: true,
    },
    ThemeEcologique: {
      type: String,
      required: true,
    },
    ThemeEnergetique: {
      type: String,
      required: true,
    },
  },
  {
    collection: "polarite",
    timestamps: true,
  }
);

const Node = mongoose.model("polarite", polariteSchema);
module.exports = Node;
