const mongoose = require('mongoose');

const Schema  = mongoose.Schema;

const user = Schema({
    username: String,
    email: String,
    password: String,
    groups: Array,
    photoURL: String,
    bio: String
})

const model = mongoose.model('user', user);

module.exports = model;