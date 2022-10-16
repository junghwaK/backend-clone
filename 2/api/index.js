const express = require("express");
// const { contentSecurityPolicy } = require("helmet");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const helmet = require("helmet");
const morgan = require("morgan");
const userRoute = require("./routes/users.js");
const authRoute = require("./routes/auth.js");
const postRoute = require("./routes/posts.js");

dotenv.config();

mongoose.connect(process.env.MONGO_URL, {useNewUrlParser : true}, (err)=>{
    if(err) console.log(err)
    else
    console.log("Connected to MongoDB");
});

//middleware
app.use(express.json());
app.use(helmet());
app.use(morgan("common"));

app.use("/api/users", userRoute);
app.use("/api/auth", authRoute);
app.use("/api/posts", postRoute);

//rest api만들거라서 아래는 필요가 없지

// app.get("/", (req, res) => {
//     res.send("Welcome to homepage")
// })

// app.get("/users", (req, res) => {
//     res.send("Welcome to user page")
// })


app.listen(8080, () => {
    console.log("Backend server is running!")
})