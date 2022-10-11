import User from "../models/User.js";


//UPDATE
export const updateUser = async (req, res, next) =>{
    try{
        const updatedUser = await User.findByIdAndUpdate(
            req.params.id, 
            {$set : req.body}, 
            {new: true}
        );
        //성공시 200을 return
        res.status(200).json(updatedUser)
    }catch(err){
        next(err);
    }
}

//DELETE
export const deleteUser = async (req, res, next) =>{
    try{
        //delete하므로 어떤것도 return하지 않을것이다.
        await User.findByIdAndDelete(req.params.id);
        //지웠을 때 메시지를 보내준다. 
        res.status(200).json("User has been deleted.")
    }catch(err){
        next(err);
    }
}

//GET
export const getUser = async (req, res, next) =>{
    try{
        const user = await User.findById(req.params.id);
        res.status(200).json(user)
    }catch(err){
        next(err);
    }
}

//GET ALL
export const getUsers = async (req, res, next) =>{
    try{
        const users = await User.find();
        res.status(200).json(users)
    }catch(err){
        next(err)
    }
}
