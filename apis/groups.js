const groups = require('../model/Groups');
const express = require('express');

const router = express.Router();

router.post('/', (req, res)=>{
    const {name, owner} = req.body;
    const newGroup = new groups({
        owner, name
    })
    newGroup.save()
    .then(()=>res.json({group: "created"}))
    .catch(err=>console.log(err))
});

router.put('/', (req, res)=>{
    const {name, user} = req.body;
    console.log(name, user);
    groups.findOneAndUpdate({name}, { $addToSet: {users: {$each: user}}})
   .catch(err=>console.log(err));
});

router.get('/', (req, res)=>{
    const owner = req.query.owner;
    groups.findOne({owner})
    .then(result=>res.json(result))
    .catch(err=>console.log(err));
})

router.delete('/', (req, res)=>{
    const name = req.body.name;
    console.log(name)
    groups.findOneAndDelete({name})
    .then(ignr=>res.json({deleted: true}))
    .catch(err=>console.log(err));
})

module.exports = router;