const { Schema, model } = require("mongoose");

const userSchema = new Schema(
  {
    firstName: {
      type: String,
      required: true,
      trim: true,
    },
    lastName: {
      type: String,
      required: true,
      trim: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      trim: true,
    },
    password: {
      type: String,
      required: true,
      select: false,
    },
    bloodGroup: {
      type: String,
      default: null,
    },
    NIDNumber: {
      type: Number,
    },
    phoneNumber: {
      type: String,
      default: "",
    },
  },
  { timestamps: true }
);
const User = model("User", userSchema);
module.exports = User;
