const express = require('express');
const dbConnect = require('./config/dbConnect');
const app = express();

//dB Connect
dbConnect();

//routes
app.post('/register', (req, res)=>{
   res.json({user: "admin"});
});
module.exports = app;
