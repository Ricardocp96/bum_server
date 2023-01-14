const router = require('express').Router();
const mongoose=  require('mongoose')
const feeling = require('../models/mood')
const Schema= require('mongoose')



router.post('/my_mood', async (req,res) =>{

    const mood = new feeling({

      Mood: req.body.Mood, 
      User: req.body.User
     
    })
    try { 
        const user_feeling =mongoose.Schema('feeling',feeling)

        user_feeling = await mood.save()
        res.send("This user feeling was saved")

    }
catch(err){
    res.send(err)
    console.log(err)
   
}
});

module.exports = router;