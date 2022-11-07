import Room from "../models/Rooms.js";
import Hotel from "../models/Hotels.js";
import {createError} from "../utils/error.js";

export const createRoom = async(req, res, next) => {
    const hotelId = req.params.hotelId;
    const newRoom = new Room(req.body)

    try{
        const savedRoom = await newRoom.save()
        try{
            await Hotel.findByIdAndUpdate(hotelId, {
                $push: {rooms : savedRoom._id},
            });
        }catch(err){
            next(err)
        }
        res.status(200).json(savedRoom)
    }catch(err){
        next(err)
    }
}


//UPDATE
export const updateRoom = async (req, res, next) =>{
    try{
        const updatedRoom = await Room.findByIdAndUpdate(
            req.params.id, 
            {$set : req.body}, 
            {new: true}
        );
        //성공시 200을 return
        res.status(200).json(updatedRoom)
    }catch(err){
        next(err);
    }
}

//DELETE
export const deleteRoom = async (req, res, next) =>{
    const hotelId = req.params.hotelId;
    try{
        //delete하므로 어떤것도 return하지 않을것이다.
        await Room.findByIdAndDelete(req.params.id);
        try{
            await Hotel.findByIdAndUpdate(hotelId, {
                $pull: {rooms : req.params.id},
            });
        }catch(err){
            next(err)
        }
        //지웠을 때 메시지를 보내준다. 
        res.status(200).json("Room has been deleted.")
    }catch(err){
        next(err);
    }
}

//GET
export const getRoom = async (req, res, next) =>{
    try{
        const room = await Room.findById(req.params.id);
        res.status(200).json(room)
    }catch(err){
        next(err);
    }
}

//GET ALL
export const getRooms = async (req, res, next) =>{
    try{
        const rooms = await Room.find();
        res.status(200).json(rooms)
    }catch(err){
        next(err)
    }
}
