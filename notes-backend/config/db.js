const mongoos = require('mongoose');

const connectDB = async () =>{
 try{
  await mongoos.connect("mongodb://127.0.0.1:27017/NotesApp");
  console.log("MongoDB connected Successfully");
 }catch(error){
   console.error("MongoDM connection Failed");
   console.error(error.message);
   process.exit(1);   // If error occur , server close
 }
}

module.exports = connectDB;