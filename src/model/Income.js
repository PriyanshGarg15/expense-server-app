const mongoose = require("mongoose");
const moongosePaginate = require("mongoose-paginate-v2");


// Define income schema
const incomeSchema = new mongoose.Schema(
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
      default:'income'
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
    toJSON:{
      virtual:true,
    },
    toObject:{
      virtuals:true
    }
  }
);


//pagination
incomeSchema.plugin(moongosePaginate);

const Income=mongoose.model("Income",incomeSchema);
module.exports=Income;