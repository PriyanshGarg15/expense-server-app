const expressAsyncHandler = require("express-async-handler");
const Income = require("../../model/Income");

//create

const createIncCtrl=expressAsyncHandler(async (req,res) => {
    const {title,amount,description,user} =req.body;
    try {
        const income=await Income.create({
            title,
            amount,
            description,
            user
        });
        res.json(income);
    } catch (error) {
        res.json(error);
    }
})



//fetchallIncome
const fetchAllIncCtrl=expressAsyncHandler(async (req,res) => {
    const {page}=req.query.page;
    try {
        const income=await Income.paginate({}, {limit:10,page:Number(page),
            populate:'user'
        });
        res.json(income);
    } catch (error) {
        res.json(error);
    }
})



//fech single income

const fetchSingleIncCtrl=expressAsyncHandler(async (req,res) => {
    try {
        const income=await Income.findById(req.params.id);
        if(income){
            res.json(income);
        }else{
            res.status(404).json({message:"Income not found"});
        }
    } catch (error) {
        res.json({"Suspecious":"Income not found"});
    }
})


//update

const updateIncCtrl=expressAsyncHandler(async (req,res) => {
    const {title,amount,description} =req.body;
    try {
        const income=await Income.findByIdAndUpdate(req.params.id,{
            title,
            amount,
            description
        },{new:true});
        if(income){
            res.json(income);
        } else{
            res.status(404).json({message:"Income not found"});
        }
    } catch (error) {
        res.json(error);
    }
})


//delete income
const deleteIncCtrl=expressAsyncHandler(async (req,res) =>{
    try {
        const income=await Income.findByIdAndDelete(req.params.id);
        if(income){
            res.json({message:"Income deleted successfully"});
        } else{
            res.status(404).json({message:"Income not found"});
        }
    } catch (error) {
        res.json(error);
    }
 })

module.exports={createIncCtrl,fetchAllIncCtrl,fetchSingleIncCtrl,updateIncCtrl,deleteIncCtrl};

