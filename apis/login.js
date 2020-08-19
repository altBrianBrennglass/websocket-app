const express = require('express');
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const user = require('../model/UserSchema');

const router = express.Router();

router.get('/', (req, res)=>{
    console.log(req.query.username);
    const {username} = req.query;
    user.findOne({username}, (err, data)=>{
        if(data)res.json({match: true})
        else res.json({match: false});
    })
});

router.post('/', (req, res)=>{
    res.status(201);
    const {username, password} = req.body;
    user.findOne({username})
        .then((data)=>{
            bcrypt.compare(password, data.password)
            .then(result=>{
                let {_id, groups, username, photo} = data;
                res.json({match:true, _id, groups, username, photo})
            })
            .catch(err=>res.json({match:false}))
        })
        .catch(err=>res.json({match: false}))    
});

module.exports = router;