const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const lockSchema = new Schema(
  {
    ten: {
      type: String,
      required: true
    },
    viTri: {
      type: String,
      required: true
    }
  },
  {
    collection: "locks",
  }
);

const lock = mongoose.model("locks", lockSchema);

module.exports = lock;
