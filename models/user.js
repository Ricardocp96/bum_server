const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const userSchema = new mongoose.Schema({
    type: {
        type: String,
        enum: ['adult', 'student'],
        required: true
      },
      profile: {
        type: mongoose.Schema.Types.ObjectId,
        refPath: 'type',
        required: true
      }
    });

    const studentSchema = new mongoose.Schema({
        mobile: {
          type: String,
          required: true,
          unique: true
        },
        name: {
          type: String,
          required: true
        },
        password: {
          type: String,
          required: true
        },
   
        school: {
          type: String,
          required: true
        },
        grade: {
          type: String,
          required: true
        },
        teacherName: {
          type: String,
          required: true
        }
      });
      const adultSchema = new mongoose.Schema({
        mobile: {
          type: String,
          required: true,
          unique: true
        },
        name: {
          type: String,
          required: true
        },
        password: {
          type: String,
          required: true
        },
      
      });



module.exports = mongoose.model('User', userSchema);