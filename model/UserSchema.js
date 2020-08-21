const mongoose = require('mongoose');

const Schema  = mongoose.Schema;

const user = Schema({
    username: String,
    email: String,
    password: String,
    groups: Array,
    photoURL: {
        type: String,
        default: 'none'
    },
    bio: {
        type: String,
        default: 'N/A'
    }
})

const model = mongoose.model('user', user);

module.exports = model;