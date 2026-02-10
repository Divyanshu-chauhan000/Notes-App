const mongoose = require('mongoose');

const noteSchema = new mongoose.Schema(
  {
    title:{
      type: String,
      required: true,   // used for validation
      trim: true,      // to remove extra spaces
    },
    content:{
      type : String,
      required : true,
    },
   
  },
   {
      timestamps : true,
    }

)

module.exports = mongoose.model('Note' , noteSchema);