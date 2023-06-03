const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const freqOccJanvierSchema = new Schema(
  {
    Freq: {
      type: Number,
      required: true,
    },
    Mots:{
        type:String,
        required:true,
    }
  },
  {
    collection: "freqOccJanvier",
    timestamps: true,
  } 
);

const Node = mongoose.model("freqOccJanvier", freqOccJanvierSchema);
module.exports = Node;
