const mongoose = require("mongoose");

const userDetailsSchema = new mongoose.Schema(
  {
    fname: String,
    lname: String,
    email: { type: String, unique: true },
    password: String,
    userType: String,
  },
  {
    collection: "UserInfo",
  }
);

const UserDetails = mongoose.model("UserInfo", userDetailsSchema);

module.exports = UserDetails;
