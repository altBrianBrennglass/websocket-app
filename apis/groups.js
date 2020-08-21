const groups = require('../model/Groups');
const express = require('express');

const router = express.Router();

router.post('/', (req, res)=>{
    const {room, owner} = req.body;
    console.log({room, owner, users:[owner]});
    
    const newGroup = new groups({
        owner, room, users: [owner]
    })
    newGroup.save()
    .then(()=>{
        res.status(201);
        res.json({group: "created"})
    })
    .catch(()=>{
        res.status(500);
        res.json({group: 'not created'})
    })
});

router.put('/', (req, res)=>{
    const {room, user} = req.body;
    console.log(room, user);
    groups.findOneAndUpdate({room}, { $addToSet: {users: {$each: user}}})
    .then(results=>{
        if(results)
            res.json({roomUpdated: true});
        else
            res.json({roomUpdated: false});
    })
   .catch(err=>res.json({roomUpdated: false}));
});

router.get('/', (req, res)=>{
    const room = req.query.room;
    groups.findOne({room})
    .then(result=>res.json(result))
    .catch(err=>res.json({getRoom: false}));
})

router.delete('/', (req, res)=>{
    const room = req.body.room;
    groups.findOneAndDelete({room})
    .then(ignr=>res.json({deleted: true}))
    .catch(ignr=>res.json({deleted: false}));
})

module.exports = router;