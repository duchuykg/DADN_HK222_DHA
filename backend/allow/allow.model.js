const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const allowSchema = new Schema(
  {
    userID: {
      type: Schema.Types.ObjectId,
      ref: 'user',
      required: true
    },
    lockID: {
      type: Schema.Types.ObjectId,
      ref: 'allow',
      required: true
    }
  },
  {
    collection: "allows",
  }
);

const allow = mongoose.model("allows", allowSchema);

module.exports = allow;
