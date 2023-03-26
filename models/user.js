const mongoose = require('mongoose');
const userSchema = new mongoose.Schema({
  uname:{
  
      type:String,
      required:true,
      min:7,
      max:255
  
  },
  mobile:{
  
      type:Number,
      required:true,
      max: 255,
      min:6
  
  },
  password:{
   type:String,
   required:true,
   max: 1024,
   min:6
  
  
  }


});

module.exports = mongoose.model('db', userSchema);