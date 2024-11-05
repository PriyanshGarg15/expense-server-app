const expressAsyncHandler = require("express-async-handler");
const Expense = require("../../model/Expense");
const { populate } = require("../../model/Income");


//create

const createExpCtrl=expressAsyncHandler(async (req,res) => {
    const {title,amount,description,user} =req.body;
    try {
        const expense=await Expense.create({
            title,
            amount,
            description,
            user
        });
        res.json(expense);
    } catch (error) {
        res.json(error);
    }
})



//fetchallexpense
const fetchAllExpCtrl=expressAsyncHandler(async (req,res) => {
    const {page}=req.query.page;
    try {
        const expense=await Expense.paginate({},{limit:10,page:Number(page),populate:'user'});
        res.json(expense);
    } catch (error) {
        res.json(error);
    }
})



//fech single expense

const fetchSingleExpCtrl=expressAsyncHandler(async (req,res) => {
    try {
        const expense=await Expense.findById(req.params.id);
        if(expense){
            res.json(expense);
        }else{
            res.status(404).json({message:"Expense not found"});
        }
    } catch (error) {
        res.json({"Suspecious":"Expense not found"});
    }
})


//update

const updateExpCtrl=expressAsyncHandler(async (req,res) => {
    const {title,amount,description} =req.body;
    try {
        const expense=await Expense.findByIdAndUpdate(req.params.id,{
            title,
            amount,
            description
        },{new:true});
        if(expense){
            res.json(expense);
        } else{
            res.status(404).json({message:"Expense not found"});
        }
    } catch (error) {
        res.json(error);
    }
})


//delete expense
const deleteExpCtrl=expressAsyncHandler(async (req,res) =>{
    try {
        const expense=await Expense.findByIdAndDelete(req.params.id);
        if(expense){
            res.json({message:"Expense deleted successfully"});
        } else{
            res.status(404).json({message:"Expense not found"});
        }
    } catch (error) {
        res.json(error);
    }
 })

module.exports={createExpCtrl,fetchAllExpCtrl,fetchSingleExpCtrl,updateExpCtrl,deleteExpCtrl};

