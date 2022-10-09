//main 

//아래 둘다 가능하지만 import로 쓸것.
import express from "express"
// const express = require("express");
import dotenv from "dotenv"
import mongoose from "mongoose"
//auth.js ...etc
import authRoute from "./routes/auth.js"
import usersRoute from "./routes/users.js"
import hotelsRoute from "./routes/hotels.js"
import roomsRoute from "./routes/rooms.js"


const app = express()
dotenv.config()

const connect = async () => {
    try{
        await mongoose.connect(process.env.MONGO);
        console.log("Connected to mongoDB")
    } catch (error) {
        throw error;
    }
};

mongoose.connection.on("disconnected", () => {
    console.log("mongoDB disconnected!")
})

mongoose.connection.on("connected", () => {
    console.log("mongoDB connected!")
})

//middlewares
app.use(express.json())

app.use("/api/auth", authRoute);
//users
app.use("/api/users", usersRoute);
//hotels
app.use("/api/hotels", hotelsRoute);
//rooms
app.use("/api/rooms", roomsRoute);

//err handleing middleware
app.use((err, req, res, next) => {
    const errorStatus = err.status || 500
    const errorMessage = err.message || "Somethin went wrong!"
    return res.status(errorStatus).json({
        success: false,
        status: errorStatus,
        message: errorMessage,
        stack: err.stack
    });
});

app.listen(8000, ()=>{
    connect()
    console.log("Connected to backend.")
})