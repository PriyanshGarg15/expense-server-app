const express = require("express");
const { createIncCtrl,fetchAllIncCtrl,fetchSingleIncCtrl,updateIncCtrl,deleteIncCtrl} = require("../../controllers/income/incomeCtrl");
const incomeRoute=express.Router()



incomeRoute.post("/",createIncCtrl)
incomeRoute.get("/",fetchAllIncCtrl)
incomeRoute.get("/:id",fetchSingleIncCtrl)
incomeRoute.put("/:id",updateIncCtrl)
incomeRoute.delete("/:id",deleteIncCtrl)

module.exports=incomeRoute;