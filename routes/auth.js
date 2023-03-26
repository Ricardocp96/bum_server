const router = require('express').Router();
const User = require('../models/user');
const {reg_val,log_val} =require ('./validation');
const bcrypt= require ('bcryptjs');
const jwt = require('jsonwebtoken')
require('dotenv').config();
router.post('/register', async (req, res) => {


  const {error} = reg_val(req.body)
    if (error) return res.status(400).send(error.details[0].message);
    const pass1= req.body.password
    const pass2=req.body.confirmpassword
    if(pass1 !=pass2) return res.status(400).send("password missmatch")
    //user val 
    const userexists = await User.findOne({mobile: req.body.mobile});
    if(userexists) return res.status(400).send("this mobile number is already registered")
  
    
   

    const salt = await bcrypt.genSalt(10);
    const hashedPassword= await bcrypt.hash(req.body.password, salt);

const user = new User({

    uname:req.body.uname,
    mobile:req.body.mobile,
    password:hashedPassword
   
   
});
try{
    // work on this feature 
    const savedUser = await user.save()
    savedUser
    res.send(user)
}catch(err){
    res.status(400).send(err);
}

});


//LOGIN 

router.post('/login', async (req,res) =>{

    //Data validated first 
    const {error} = log_val(req.body)
    if (error) return res.status(400).send(error.details[0].message);
    // valiadte mobile number 

    const user = await User.findOne({mobile:req.body.mobile});
    if(!user) return res.status(400).send('wrong format');

    const validkey = await bcrypt.compare(req.body.password, user.password);
    if(!validkey) res.status(400).send("invalid creds")
//
    const token =jwt.sign({_id: user._id},process.env.JWT_TOKEN);
  
      res.send("ok")
    console.log(token);
    
   


   

});

module.exports = router;
