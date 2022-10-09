import Hotel from "../models/Hotels.js";

export const createHotel = async (req, res, next) =>{
    const newHotel = new Hotel(req.body);
    //stored hotel information
    try{
        const savedHotel = await newHotel.save()
        res.status(200).json(savedHotel)
    }catch(err){
        next(err);
    }
}

//UPDATE
export const updateHotel = async (req, res, next) =>{
    try{
        const updatedHotel = await Hotel.findByIdAndUpdate(
            req.params.id, 
            {$set : req.body}, 
            {new: true}
        );
        //성공시 200을 return
        res.status(200).json(updatedHotel)
    }catch(err){
        next(err);
    }
}

//DELETE
export const deleteHotel = async (req, res, next) =>{
    try{
        //delete하므로 어떤것도 return하지 않을것이다.
        await Hotel.findByIdAndDelete(req.params.id);
        //지웠을 때 메시지를 보내준다. 
        res.status(200).json("Hotel has been deleted.")
    }catch(err){
        next(err);
    }
}

//GET
export const getHotel = async (req, res, next) =>{
    try{
        const hotel = await Hotel.findById(req.params.id);
        res.status(200).json(Hotel)
    }catch(err){
        next(err);
    }
}

//GET ALL
export const getHotels = async (req, res, next) =>{
    try{
        const hotels = await Hotel.find();
        res.status(200).json(hotels)
    }catch(err){
        next(err)
    }
}
