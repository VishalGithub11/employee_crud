const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      maxlength: 32,
      trim: true,
    },
    email: {
      type: String,
      trim: true,
      required: true,
      unique: true,
    },
    age: {
      type: Number,
      required: true,
      maxlength: 3,
      trim: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Employee", userSchema);
