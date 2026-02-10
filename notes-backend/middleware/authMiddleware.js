const jwt = require('jsonwebtoken');

const authMiddleware = (req , res , next)=>{

  try{
   const authHeader = req.headers.authorization;
   
   if(!authHeader || !authHeader.startsWith('Bearer ')){
    return res.status(401).json({message : "No token is provided"});
   }
  
   const token = authHeader.split(" ")[1];

   const decoded = jwt.verify(token, process.env.JWT_SECRET);

   req.user = decoded;   //id : userId
   next();

  }catch(error)
  {
    res.status(500).json({message : "Token expired"});
  }
}

module.exports =  authMiddleware;