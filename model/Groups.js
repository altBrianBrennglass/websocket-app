const mongoose = require('mongoose');
const {Schema, model} = mongoose;

const groups = Schema({
    owner: String,
    room: String,
    users: Array
})

const groupSchema = model('groups', groups);
module.exports = groupSchema;