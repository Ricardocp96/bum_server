const express = require('express');
const app = express();

const authURLRoute= require('./routes/auth') ;
const dotenv = require('dotenv'); 
const bodyParser = require('body-parser');
const mongoose = require ('mongoose'); 
var cors = require('cors');
app.use(cors());


const uri="mongodb+srv://Ricardo:santamonica@bum.yh7cobc.mongodb.net/?retryWrites=true&w=majority"


async function connection(){

     try{
          await mongoose.connect(uri);
          console.log("connected to mongoose")

     }catch (error){
          console.error(error);
     }
}

connection();
// Route middlewares 
app.use(express.json());
app.use('/api/user',  authURLRoute  );




app.listen(3000, () => console.log("were up"));
