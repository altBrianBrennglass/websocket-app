const express = require('express');
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const user = require('../model/UserSchema');

const router = express.Router();

router.get('/', (req, res)=>{
    const {username} = req.query;
    console.log(username);
    user.findOne({username}, (err, data)=>{
        if(data)res.json({match: true})
        else res.json({match: false});
    })
});

router.post('/', (req, res)=>{
    res.status(201);
    const {username, password, email} = req.body;
    let failure;
    bcrypt.hash(password, 8, (err, hash)=> {
        const newUser = new user({ password: hash, email, username});
        let isErr = null;
        newUser.save()
        .then(results=>{
            const {_id, groups, username, photo} = newUser;
            res.json({_id, groups,username, photo, match: false});
        })
        .catch(err=>failure = err);
    });
    if(failure) return new Error('database failure');
    else console.log("user registered");
});

module.exports = router;