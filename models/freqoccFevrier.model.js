const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const freqOccFevrierSchema = new Schema(
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
    collection: "freqOccFevrier",
    timestamps: true,
  } 
);

const Node = mongoose.model("freqOccFevrier", freqOccFevrierSchema);
module.exports = Node;
