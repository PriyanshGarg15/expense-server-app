const express = require("express");
const { registerUser,fetchUsersCtr } = require("../../controllers/users/usersCtrl");
const userRoute=express.Router();


userRoute.post('/register',registerUser);

userRoute.get('/',fetchUsersCtr);

module.exports=userRoute;