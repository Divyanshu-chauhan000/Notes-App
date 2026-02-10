const express = require("express");  // for Http server
const connectDB = require('./config/db');
const dotenv = require('dotenv');

dotenv.config();

const app = express(); // It is the Express Application Instance
app.use(express.json());  // so that we can get req.body in JSON formate <---Middleware
 
connectDB();

const noteRoute = require('./routes/noteRoute');
app.use('/api/notes', noteRoute);

const authRoute = require('./routes/authRoute');
app.use('/api/auth' , authRoute);

app.get('/' , (req,res) =>{
  res.send("Server is running");   // To check whether Server is running or not
});

const PORT = process.env.PORT || 5000;
app.listen(PORT,()=>{
  console.log(`Server is running on port ${PORT}`);   //It listen the server on port
});
