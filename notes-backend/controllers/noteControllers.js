const Note = require('../models/Note')

const getNotes  = async (req , res)=>{
  try{
  const notes = await Note.find();   // To get all notes
    res.status(200).json(notes); //success
  }catch(error){
    res.status(500).json({message : error.message}); //server eror
  }
};

const createNote = async (req, res) =>{
  try{
    const {title, content } = req.body;
    if(!title || !content){
      return res.status(400).json({message : "Title and Content are required"});
    }

    const newNote = new Note({
      title,
      content
    });

    const savedNote = await newNote.save(); // newly made notes will be saved 
    res.send(201).json(savedNote);

  }catch(error){
     res.status(500).json({message :"error"});
  }
};

module.exports = {getNotes , createNote};