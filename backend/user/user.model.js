const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const userSchema = new Schema(
  {
    ten: {
      type: String,
      required: true,
    },
    thongTin: {
      type: String,
    },
    anhDaiDien: {
      type: String,
    },
  },
  {
    collection: "users",
  }
);

const user = mongoose.model("users", userSchema);

module.exports = user;
