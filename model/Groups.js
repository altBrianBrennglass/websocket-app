const mongoose = require('mongoose');
const {Schema, model} = mongoose;

const groups = Schema({
    owner: String,
    name: String,
    users: Array
})

const groupSchema = model('groups', groups);
module.exports = groupSchema;