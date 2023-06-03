const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const freqOccMarsSchema = new Schema(
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
    collection: "freqOccMars",
    timestamps: true,
  } 
);

const Node = mongoose.model("freqOccMars", freqOccMarsSchema);
module.exports = Node;
