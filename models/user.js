const mongoose = require('mongoose');
const userSchema = new mongoose.Schema({
  uname:{
  
      type:String,
      required:true
     
  
  },
  mobile:{
  
      type:Number,
      required:true
     
  
  },
  password:{
   type:String,
   required:true,
   max: 1024,
   min:6
  
  
  }


});

module.exports = mongoose.model('db', userSchema);