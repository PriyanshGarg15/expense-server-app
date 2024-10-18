const User = require("../../model/User");
const expressAsyncHandler = require("express-async-handler");

//register
const registerUser=expressAsyncHandler(async (req,res) => {
    const {email,firstname,lastname,password} = req?.body;
    //check if user exists in db
    const userExists = await User.findOne({email});
    if(userExists) throw new Error("User already Exists !")
    try{
        const user=await User.create({email,firstname,lastname,password});
        res.status(200).json(user);

    }
    catch (error) {
        res.status(500).json({ message: error.message || "Some error occurred" });
    }
    
});


//fetch all users
const fetchUsersCtr=expressAsyncHandler(async (req,res)=>{
    try{
        const users=await User.find({});
        res.json(users);
    }
    catch(error){
        res.json(error);
    }
});


module.exports={registerUser,fetchUsersCtr};