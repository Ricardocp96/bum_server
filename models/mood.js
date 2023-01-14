const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const User = require('../models/user')
const moodSchema = new mongoose.Schema({



    feeling:{
    
        type:String,
        required:true,
        min:7,
        max:255
    
    },
    user:{
       user: [{ type: Schema.Types.ObjectId, ref: 'User' }]
    },
    timestamp:{
    type: Number, 
    default: function 
    () {
    
        return this_id.getTimestamp() 
        
    }
    
    }
    
    
    });
    module.exports = mongoose.model('moods', moodSchema);