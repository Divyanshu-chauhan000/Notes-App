const express = require("express");  // for Http server
const connectDB = require('./config/db');

const app = express(); // It is the Express Application Instance
app.use(express.json());  // so that we can get req.body in JSON formate <---Middleware
 
connectDB();

const noteRoute = require('./routes/noteRoute');
app.use('/api/notes', noteRoute);

app.get('/' , (req,res) =>{
  res.send("Server is running");   // To check whether Server is running or not
});

const PORT = 5000;
app.listen(PORT,()=>{
  console.log(`Server is running on port ${PORT}`);   //It listen the server on port
});
