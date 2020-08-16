const express = require('express');
const path = require('path');
const app = express();

app.use('/public',express.static(path.join(__dirname,'static')));

app.get('/',(req,res) => {
    res.send(path.join(__dirname,'static','index.html' ));
});

app.listen(3000);