const router =  require("express").Router();
const Post = require("../models /Post.js");

//CREATE A POST
router.post("/", async(req, res)=>{
    const newPost = new Post(req.body)
    try{
        const savedPost = await newPost.save();
        res.status(200).json(savedPost)
    }catch(err){
        res.status(500).json(err)
    }
})
//UPDATE A POST
//DELETE A POST
//LIKE A POST
//GET A POST
//GET TIMELINE POSTS (of the user following, 그니까 팔로잉하는애들꺼 post가져온다고)




module.exports = router;