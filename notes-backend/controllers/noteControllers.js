const Note = require('../models/Note')

const getNotes  = async (req , res)=>{
  try{
  const notes = await Note.find({user: req.user.id});   // To get all notes
    res.status(200).json(notes); //success
  }catch(error){
    res.status(500).json({message : error.message}); //server eror
  }
};

const createNote = async (req, res) =>{
  try{
    console.log("req.user:", req.user);

    const {title, content } = req.body;
    if(!title || !content){
      return res.status(400).json({message : "Title and Content are required"});
    }

    const newNote = new Note({
      title,
      content,
      user: req.user.id
    });

    const savedNote = await newNote.save(); // newly made notes will be saved 
    res.status(201).json(savedNote);
  console.log("Saved Note:", savedNote);
console.log("Collection:", savedNote.collection.name);

  }catch(error){
     res.status(500).json({message :"error"});
  }
};

const updateNote = async(req, res) =>{
  try{
    const {id} = req.params;
    const {title , content } = req.body;

    const updatedNote = await Note.findByIdAndUpdate(
      id,
      {title , content},
      {new : true}
    );

    if(!updatedNote){
      return res.status(404).json({message : "Notes not found"});
    }

    if(updatedNote.user.toString() !== req.user.id){
      return res.status(403).json({message : "Not authorized"});
    }

    updatedNote.title = title || updatedNote.title;
    updatedNote.content = content || updatedNote.content;
    
    const finalNote = await updatedNote.save();
    return res.status(200).json(finalNote);
    
  }catch(error){
   return res.status(500).json({message  : error.message});
  }
};


const deleteNote = async(req, res) =>{
  try{
    const {id} = req.params;
   
    const note = await Note.findById(
      {
        _id : id,
        user: req.user.id,
      }
    );

    if(!note){
      return res.status(404).json({message : "Notes not found"});
    }

     if (note.user.toString() !== req.user.id) {
      return res.status(403).json({ message: "Not authorized" });
    }
     await note.deleteOne();
    return res.status(200).json({message : "Note Deleted Successfully"});
    }catch(error){
   return res.status(500).json({message  : error.message});
  }
};

module.exports = {getNotes , createNote , updateNote , deleteNote};