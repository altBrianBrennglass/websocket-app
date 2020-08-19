const express = require('express');
const users = require('../model/UserSchema');

const router = express.Router();

router.get('/', (req, res)=>{
    const {userSearch} = req.query;
    const rgx = new RegExp(`${userSearch}\S*`)
    users.find({email: {$regex: rgx, $options: 'i'}})
        .limit(10)
        .then((result)=>console.log(result))
        .catch((err)=>console.log(err))

})

module.exports = router;