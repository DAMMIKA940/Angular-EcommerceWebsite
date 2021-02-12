const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const mongoose = require('mongoose')
const PORT = 3000   //port number to run express
const api = require('./routes/api');
const todoList = require('./routes/TodoListRoutes')
const app = express()   //instance of express
var Task = require('./models/TodoListModel');
app.use(cors())

app.use(bodyParser.json())    //to handle json data

app.use('/api', api)
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/Tododb', {useNewUrlParser: true, useUnifiedTopology: true});
app.use('/api', todoList)
var routes = require('./routes/TodoListRoutes');
routes(app);
app.get('/', function(req, res){
    res.send('Server Works')    //checking statement
})

app.listen(PORT, function(){
    console.log('running LocalHost :'+PORT)
})