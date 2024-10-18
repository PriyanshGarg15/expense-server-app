const mongoose = require("mongoose");
require('dotenv').config();

const dbConnect = async () => { 
    try {
        await mongoose.connect(process.env.MONGO_URL);
        console.log("Database connected successfully");
    } catch (error) {
        console.error("Database connection failed:", error);
    }
};

module.exports = dbConnect;



// priyanshgargcs22
// 1dG3uIV7yHx4m8Ah