const express = require("express");
const { registerUser,fetchUsersCtr,loginUserCrtrl} = require("../../controllers/users/usersCtrl");
const userRoute=express.Router();


userRoute.post('/register',registerUser);

userRoute.post('/login',loginUserCrtrl);

userRoute.get('/',fetchUsersCtr);

module.exports=userRoute;