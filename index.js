//main 

//아래 둘다 가능하지만 import로 쓸것.
import express from "express"
// const express = require("express");
import dotenv from "dotenv"
import mongoose from "mongoose"

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

app.get("/users", (req,  res) =>{
    res.send("Hello first request!")
})


app.listen(8000, ()=>{
    connect()
    console.log("Connected to backend.")
})