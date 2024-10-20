const mongoose = require("mongoose");
const moongosePaginate = require("mongoose-paginate-v2");

// Define Expense schema
const expenseSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, "Title is required"],
    },
    description: {
      type: String,
      required: [true, "description is required"],
    },
    type: {
      type: String,
      default:'Expense'
    },
    amount: {
      type: Number,
      required: [true, "Amount is required"],
    },
    user:{
        type:mongoose.Schema.Types.ObjectId,//must be mongodb id
        ref:'User',
        required:[true,"User id is required"]

    }

  },
  {
    timestamps: true,
  }
);

//pagination
expenseSchema.plugin(moongosePaginate);

const Expense=mongoose.model("Expense",expenseSchema);
module.exports=Expense;