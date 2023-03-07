const express = require("express");
const dotenv = require("dotenv");
const connectDB = require("./config/db");
const mongoose = require("mongoose");
dotenv.config({path: "./config/config.env"});
const data = require("./routes/routes");
const app = express();




//For body parser.
app.use(express.json());

app.use("/api/v1/data",data);


//Connect db
connectDB();
// assing port from env or set 5000
const PORT  = process.env.PORT || 5000;

app.listen(PORT,console.log(`Server is running in ${process.env.NODE_ENV} mode on ${process.env.PORT} `));

