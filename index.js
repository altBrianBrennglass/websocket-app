const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const login = require('./apis/login');
const register = require('./apis/register');
const groups = require('./apis/groups');
const searchUsers = require('./apis/searchUsers');

mongoose.connect(`mongodb+srv://BrianBrennglass:Pickles123!456789@websocketapp.yrgkr.mongodb.net/websocketApp?retryWrites=true&w=majority`,
                 {useNewUrlParser: true, useUnifiedTopology: true}
)
.then(console.log('connected'))
.catch((err)=>console.log('\n\nstupid\n\n'))

const app = express();
app.use(cors);
app.use(express.json());
app.use(express.static('public'));
app.use('/login', login);
app.use('/register', register);
app.use('/groups', groups);
app.use('/searchUsers', searchUsers);
app.use('/', (req, res, err, next)=>{
    console.log(err);
})


app.listen(8080, ()=>console.log('listening port 8080'));