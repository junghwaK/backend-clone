//use cookies, json, web tokens, ete.. 
import express from "express";
import { createHotel, deleteHotel, getHotel, updateHotel, getHotels } from "../controllers/hotel.js";
import Hotel from "../models/Hotels.js";
import { verifyAdmin } from "../utils/verifyToken.js";
// import { createError } from "../utils/error.js";


const router = express.Router();

//CREATE
router.post("/", verifyAdmin, createHotel);
//UPDATE
router.put("/:id",  verifyAdmin, updateHotel);

//DELETE
router.delete("/:id",  verifyAdmin, deleteHotel);
//GET
router.get("/:id", getHotel);

//GET ALL
//모든 호텔이니까 특정 id는 이제 필요없다. 
router.get("/", getHotels);


export default router