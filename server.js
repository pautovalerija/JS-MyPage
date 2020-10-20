const express = require('express');
const ejs = require('ejs');
const errorPage = require('./routes/404');
const app = express();

app.set('view engine', ejs);
app.use(express.static('public'));


app.use(errorPage);

app.listen(3000, ()=> {
    console.log("server is running on port 3000.");
    
});