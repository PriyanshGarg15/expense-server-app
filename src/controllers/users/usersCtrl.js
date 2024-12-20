const generateToken = require("../../middlewares/generateToken");
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


//login user
const loginUserCrtrl=expressAsyncHandler(
    async(req,res)=>{
            const {email,password} =req.body;
            // res.json("Login");
            //find user in db
            const userFound=await User.findOne({email});
            //check if the user password watched or not
            if(userFound && (await userFound.isPasswordMatch(password)))
            {
                res.json({
                    _id:userFound._id,
                    firstname:userFound.firstname,
                    lastname:userFound.lastname,
                    email:userFound.email,
                    isAdmin:userFound.isAdmin,
                    token:generateToken(userFound._id)
                });
            }else
            {
                
                res.status(401);
                throw new Error("inavlid login credentials");
            }
            
    
})

module.exports={registerUser,fetchUsersCtr,loginUserCrtrl};