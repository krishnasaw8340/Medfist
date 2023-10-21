const User = require("../Models/UserModels.js");
const dotenv = require("dotenv");
const jwt = require("jsonwebtoken");
const cookieParser = require("cookie-parser");

const express = require("express");
const app = express();
app.use(cookieParser());

dotenv.config();


module.exports.userVerification = (req, res) => {
    const token = req.cookies.token; // Access the token from cookies
    console.log("Token from cookie:", token); // Log the token
  
    if (!token) {
      console.log("Token not found!");
      return res.json({ status: false });
    }

  jwt.verify(token, process.env.SECRET_TOKEN, async (err, data) => {
    if (err) {
      return res.json({ status: false });
    } else {
      const user = await User.findById(data.id);
      if (user) return res.json({ status: true, user: user.username });
      else return res.json({ status: false });
    }
  });
};
module.exports.cook = (req, res) => {
    const token = req.cookies.token; // Access the token from cookies
    console.log("Token from cookie:", token); // Log the token
  
    if (!token) {
      console.log("Token not found!");
      return res.json({ status: false });
    }
    else{
    console.log("Found");
    }
}
