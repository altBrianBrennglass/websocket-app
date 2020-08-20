const groups = require('../model/Groups');
const express = require('express');

const router = express.Router();

router.post('/', (req, res)=>{
    const {room, owner} = req.body;
    const newGroup = new groups({
        owner, room
    })
    newGroup.save()
    .then(()=>res.json({group: "created"}))
    .catch(res.json({group: 'not created'}))
});

router.put('/', (req, res)=>{
    const {name, user} = req.body;
    console.log(name, user);
    groups.findOneAndUpdate({name}, { $addToSet: {users: {$each: user}}})
   .catch(err=>console.log(err));
});

router.get('/', (req, res)=>{
    const room = req.query.owner;
    groups.findOne({room})
    .then(result=>res.json(result))
    .catch(err=>console.log(err));
})

router.delete('/', (req, res)=>{
    const room = req.body.room;
    groups.findOneAndDelete({name})
    .then(ignr=>res.json({deleted: true}))
    .catch(err=>console.log(err));
})

module.exports = router;