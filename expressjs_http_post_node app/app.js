const express = require('express');
const path = require('path');
const app = express();
const bodyparser = require('body-parser');
 
app.use('/public',express.static(path.join(__dirname,'static')));
app.use(bodyparser.urlencoded({extended:  false}));

app.get('/',(req,res) => {
    res.sendFile(path.join(__dirname,'static','index.html' ));
});

app.post('/',(req,res) =>{
    console.log(req.body);
    // database work here
    res.send('successfully posted data');
});

app.listen(3000);