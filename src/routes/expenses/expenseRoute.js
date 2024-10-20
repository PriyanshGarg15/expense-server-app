const express = require("express");
const { createExpCtrl,fetchAllExpCtrl,fetchSingleExpCtrl,updateExpCtrl,deleteExpCtrl } = require("../../controllers/expenses/expenseCtrl");
const expenseRoute=express.Router()

expenseRoute.post("/",createExpCtrl)
expenseRoute.get("/",fetchAllExpCtrl)
expenseRoute.get("/:id",fetchSingleExpCtrl)
expenseRoute.put("/:id",updateExpCtrl)
expenseRoute.delete("/:id",deleteExpCtrl)

module.exports=expenseRoute;