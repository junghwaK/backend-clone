//use cookies, json, web tokens, ete.. 
import express from "express";
import { createError } from "../utils/error.js";
import Hotel from "../models/Hotels.js";

const router = express.Router();

//CREATE
router.post("/", async (req,res) => {
    //stored hotel information
    const newHotel = new Hotel(req.body)
    
    try{
        const savedHotel = await newHotel.save()
        res.status(200).json(savedHotel)
    }catch(err){
        res.status(500).json(err)
    }
});
//UPDATE
router.put("/:id", async (req,res) => {    
    try{
        const updatedHotel = await Hotel.findByIdAndUpdate(req.params.id, { $set : req.body}, {new: true})
        //성공시 200을 return
        res.status(200).json(updatedHotel)
    }catch(err){
        res.status(500).json(err)
    }
});

//DELETE
router.delete("/:id", async (req,res) => {    
    try{
        //delete하므로 어떤것도 return하지 않을것이다.
        await Hotel.findByIdAndDelete(req.params.id);
        //지웠을 때 메시지를 보내준다. 
        res.status(200).json("Hotel has been deleted.")
    }catch(err){
        res.status(500).json(err)
    }
});
//GET
router.get("/:id", async (req,res) => {    
    try{
        const hotel = await Hotel.findById(req.params.id);
        res.status(200).json(Hotel)
    }catch(err){
        res.status(500).json(err)
    }
});

//GET ALL
//모든 호텔이니까 특정 id는 이제 필요없다. 
router.get("/", async (req,res,next) => {    
    try{
        const hotels = await Hotel.find();
        res.status(200).json(hotels)
    }catch(err){
        next(err)
    }
});


export default router