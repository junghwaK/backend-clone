//use cookies, json, web tokens, ete.. 
import express from "express";
import Hotel from "../models/Hotels.js";

const router = express.Router();

//CREATE
router.post("/", async (req,res) => {
    //stored hotel information
    const newHotel = new Hotels(req.body)
    
    try{
        const savedHotel = await newHotel.save()
        res.status(200).json(savedHotel)
    }catch(err){
        res.status(500).json(err)
    }
})
//UPDATE
//DELETE
//GET
//GET ALL


export default router