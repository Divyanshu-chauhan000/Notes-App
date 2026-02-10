const User = require('../models/User');
const bcrypt = require('bcrypt');  // bcrypt use krte ha taki user jo password dalta ha usko unreadable formate m convert krne k liy
const jwt = require('jsonwebtoken');

const registerUser = async (req , res) => {
  try{
    const{name , email , password } = req.body;

    // name, email , password -->  basic validation here
    if(!name || !email || !password){
      return res.status(400).json({message : "All fields are required"});
    }

    // if user already exists
    const userExists = await User.findOne({email});  // findOne will find if user exists using email
    if(userExists){
      return res.status(400).json({message : "User Already Exixts"});
    } 
    
    // Password hashing using bcrypt
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password , salt);


    //Now creating User
    await User.create({
      name,
      email,
      password : hashedPassword
    });
    
    res.status(201).json({message : "User registered Successfully"});
  }catch(error){
    res.status(500).json({message : error.message});
  }
};


const loginUser = async (req , res )=>{
  try{
    const{email , password } = req.body;
    // Email and Password validation
    if(!email || !password){
      return res.status(400).json({message : "Email and password required"});
    }

    // To find user
    const user = await User.findOne({email});
    if(!user)
    {
      return res.status(400).json({message : "Invalid credentials"});
    }

    // Compare the passwords
    const isMatch = await bcrypt.compare(password , user.password);
    if(!isMatch)
    {
      return res.status(400).json({message : "Invalid credentials"});
    }
    // here server will generate the token
    const token = jwt.sign({id: user._id},
       process.env.JWT_SECRET,
      {expiresIn: "1d"}
      );


    // Successfull
    res.status(200).json({message : "Login Successfull" , token : token});
  
  }catch(error){
     res.status(500).json({message : error.message});
  }
}

module.exports= {registerUser , loginUser}; 