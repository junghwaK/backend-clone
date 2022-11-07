//use cookies, json, web tokens, ete.. 
import express from "express";
import {createRoom, updateRoom, deleteRoom, getRoom, getRooms } from "../controllers/room.js";
import { verifyAdmin } from "../utils/verifyToken.js";

const router = express.Router();

//CREATE
router.post("/:hotelId", verifyAdmin, createRoom);
//UPDATE
router.put("/:id",  verifyAdmin, updateRoom);

//DELETE
router.delete("/:id/:hotelId",  verifyAdmin, deleteRoom);
//GET
router.get("/:id", getRoom);

//GET ALL
//모든 호텔이니까 특정 id는 이제 필요없다. 
router.get("/", getRooms);

export default router