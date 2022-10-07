//main 

//아래 둘다 가능하지만 import로 쓸것.
import express from "express";
// const express = require("express");

const app = express()

app.listen(8000, ()=>{
    console.log("Connected to backend.")
})