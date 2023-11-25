const { Schema, model } = require("mongoose");

const friendSchema = new Schema({
  username: {
    type: String,
    unique: true,
    required: true,
    trim: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    match: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
  },
  createdAt: {
    type: Date,
    default: Date.now,
    get: (createdAtVal) => new Date(createdAtVal).toLocaleString(),
  },
});

const Friend = model("Friend", friendSchema);
module.exports = friendSchema;
