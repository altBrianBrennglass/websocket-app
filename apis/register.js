const express = require('express');
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const user = require('../model/UserSchema');

const router = express.Router();

router.post('/', (req, res)=>{
    res.status(201);
    const {username, password, email} = req.body;
    let failure;
    bcrypt.hash(password, 8, (err, hash)=> {
        const newUser = new user({ password: hash, email, username});
        newUser.save()
        .then(results=>{
            const {_id, groups, username} = newUser;
            res.json({_id, username});
        })
        .catch(err=>failure = err);
    });
    if(failure) return new Error('database failure');
    else console.log("user registered");
});

module.exports = router;