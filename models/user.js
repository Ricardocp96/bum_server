const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const userSchema = new mongoose.Schema({
name:{

    type:String,
    required:true,
    min:7,
    max:255

},
mobile:{

    type: Number,
    min: 0,
    max:100

},
password:{
 type:String,
 max:10,
 min:6
 

}


});

module.exports = mongoose.model('User', userSchema);