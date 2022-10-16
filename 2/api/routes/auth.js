const router = require("express").Router();
const User = require("../models/User.js");
const bcrypt = require("bcrypt");


//REGISTER
router.post("/register", async (req, res) => {
    try{
        //generate new password
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(req.body.password, salt);

        //create new user
        const newUser = new User({
            username: req.body.username,
            email: req.body.email,
            password: hashedPassword
        });

        //save user and respond
        const user = await newUser.save();
        res.status(200).json(user);
    }catch(err){
        console.log(err)
    }
});

//LOGIN
router.post("/login", async(req, res) => {
    
    try{
        const user = await User.findOne({email:req.body.email});
        // console.log( '__user', user );
        !user && res.status(404).json("user not found");
        console.log(req.body.password, user.password);

        const validPassword = await bcrypt.compare(req.body.password, user.password)
        console.log(validPassword);
        !validPassword && res.status(400).json("Worng password")

        res.status(200).json(user)
    } catch(err){
        console.log(err);
    }
});

module.exports = router;