const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const freqOccAvrilSchema = new Schema(
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
    collection: "freqOccAvril",
    timestamps: true,
  } 
);

const Node = mongoose.model("freqOccAvril", freqOccAvrilSchema);
module.exports = Node;
