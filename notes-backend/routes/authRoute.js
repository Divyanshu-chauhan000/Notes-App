const express = require('express');
const {registerUser} = require('../controllers/authController');
const {loginUser} = require('../controllers/authController')
const User = require('../models/User');
const authMiddleware = require('../middleware/authMiddleware');
const router = express.Router();

router.post('/register', registerUser);
router.post('/login' , loginUser);

//Making profile route protected
router.get('/profile' , authMiddleware , async (req , res) =>{
  try{
    const user = await User.findById(req.user.id).select('-password');

    if(!user){
      return res.status(400).json({message : "user not found"});
    }

    res.status(200).json(user);
  }
  catch(error){
    res.status(500).json({message :  error.message});
  }
})

module.exports =  router;