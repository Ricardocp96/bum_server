const router = require('express').Router();
const mongoose=  require('mongoose')
const feelings = require('../models/mood')
const User = require('../models/user')



router.post('/my_mood', async (req,res) =>{
    const phone=req.body.mobile;
    const mood = req.body.Mood;
  
    try { 
        // find user by mobile 
        User.findOne({mobile:phone}, (error,user) =>{

            if (error) {
                console.log(error);
            } else {
                //create new feeling and associate it with the user
                const newFeeling = new feelings({
                    userId: user._id,
                    feeling: mood
                });
                newFeeling.save((error) => {
                    if (error) {
                        console.log(error);
                    } else {
                        console.log('Feeling saved successfully');
                        res.send("The feeling was saved")
                    }
                });



            }
        }
        
)}
catch(err){
    res.send(err)
    console.log(err)
   
}
});

module.exports = router;
