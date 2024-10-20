const express = require('express');
const dbConnect = require("./config/dbConnect"); 
const { registerUser } = require('./controllers/users/usersCtrl');
const userRoute = require('./routes/users/usersRoute');
const { errorHandler,notFound } = require('./middlewares/errorMiddleware');
const incomeRoute = require('./routes/income/incomeRoute');
const expenseRoute = require('./routes/expenses/expenseRoute');
const app = express();
//dbConnect
dbConnect();


//middlewares
app.use(express.json())



app.get('/',(req,res)=>{
    res.json("welcome to my site")
})


//users routes
app.use('/api/users',userRoute);



//income routes
app.use('/api/income',incomeRoute); 


//expense routes
app.use('/api/expense',expenseRoute);

//error
app.use(notFound);
app.use(errorHandler);


//income
//expenses

module.exports = app;
