const express = require('express');
var cors = require('cors');
const connection = require('./connection');
const userRoute = require('./routes/users');
const app = express();

app.use(cors());
app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use('/users',userRoute);


module.exports = app;
