const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const adminSchema = new Schema(
  {
    userID: {
      type: Schema.Types.ObjectId,
      required: true,
      ref: 'users'
    },
    taiKhoan: {
      type: String,
      unique: true
    },
    matKhau: {
      type: String
    },
  },
  {
    collection: "admins",
  }
);

const admin = mongoose.model("admins", adminSchema);

module.exports = admin;
