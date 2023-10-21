const express = require("express");
const mongoose = require("mongoose")
const cors  = require("cors");
const e = require("express");
require("dotenv").config();
const cookieParser = require("cookie-parser");
const authRoute = require("./Routes/AuthRoute.js");
const app = express();
const PORT = 4000;
const MONGO_URL = process.env.MONGO_URL;

mongoose.connect(MONGO_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(()=> console.log("MongoDB is connected successfully!"))
.catch((err)=>console.log(err))

app.use(cors({
  origin: ["http://localhost:3000"],
  methods:["GET", "POST", "PUT", "DELETE"],
  credentials: true,
}))

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});

app.use(cookieParser());
app.use(express.json());
app.use("/", authRoute);
