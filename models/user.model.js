const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const { isEmail } = require("validator");

const userSchema = new Schema(
  {
    userFirstName: { type: String, required: true },
    userLastName: { type: String, required: true },
    userEmail: { type: String, required: true, validate: [isEmail] },
    userPassword: { type: String, required: true },
    emailValide: { type: Boolean, required: true, default: false },
    premium: { type: Boolean, required: true, default: false },
  },

  {
    collection: "Users",
    timestamps: true,
  }
);

const User = mongoose.model("User", userSchema);
module.exports = User;
