const express = require('express');
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const user = require('../model/UserSchema');

const router = express.Router();

router.post('/', (req, res)=>{
    res.status(201);
    const {username, password} = req.body;
    user.findOne({username})
        .then((data)=>{
            bcrypt.compare(password, data.password)
            .then(result=>{
                let {groups, username, photoURL, _id} = data;
                res.json({groups, username, photoURL, _id})
            })
            .catch(err=>res.json({login:false}))
        })
        .catch(err=>res.json({login: false}))    
});

module.exports = router;