const express = require("express");
// const { contentSecurityPolicy } = require("helmet");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const helmet = require("helmet");
const morgan = require("morgan");

dotenv.config();
mongoose.connect(process.env.MONGO_URL, {useNewUrlParser : true}, ()=>{
    console.log("Connected to MongoDB")
});


app.listen(8080, () => {
    console.log("Backend server is running!")
})