const express = require('express');
const mongoose = require('mongoose');
const user = require('../model/UserSchema');

const router = express.Router();

router.get('/usera', (req, res)=>{
    const {email} = req.query;
        user.findOne({email}, (err, data)=>{
            if(data)res.json({emailTaken: true})
            else res.json({emailTaken: false});
        }) 
});


router.get('/username', (req, res)=>{
    const {username} = req.query;
    user.findOne({username}, (err, data)=>{
        if(data)res.json({usernameRecognized: true})
        else res.json({usernameRecognized: false});
    })
});

module.exports = router;