const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const freqOccSchema = new Schema(
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
    collection: "freqOcc",
    timestamps: true,
  } 
);

const Node = mongoose.model("freqOcc", freqOccSchema);
module.exports = Node;
