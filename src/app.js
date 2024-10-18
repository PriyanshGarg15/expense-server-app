const express = require('express');
const dbConnect = require("./config/dbConnect"); 
const { registerUser } = require('./controllers/users/usersCtrl');
const userRoute = require('./routes/users/usersRoute');
const { errorHandler,notFound } = require('./middlewares/errorMiddleware');


const app = express();


//dbConnect
dbConnect();


//middlewares
app.use(express.json())

//routes
app.use('/api/users',userRoute);


//error
app.use(notFound);
app.use(errorHandler);


//income
//expenses

module.exports = app;
