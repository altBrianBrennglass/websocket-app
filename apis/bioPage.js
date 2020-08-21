const express = require('express');
const mongoose = require('mongoose');
const user = require('../model/UserSchema');


const router = express.Router();

router.post('/', (req, res)=>{
    const {username, photoURL, bio} = req.body;
    console.log(username, photoURL, bio);
    user.findOneAndUpdate(username, {bio, photoURL})
    .then((results)=>{
        console.log(results);
        if(results)res.json({bioCreated: true})
        else res.json({bioCreated: false})
    })
    .catch(()=>res.json({bioCreated: false}));
});

module.exports = router;