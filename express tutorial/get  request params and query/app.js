const express = require('express');
const app = express();

app.get('/',(req,res) => {
    res.send('Hello world')
});

app.listen(3000);

app.get('/example',(req,res) => {
    res.send('this is example route');
});

app.get('/example/:name/:age',(req,res) => {
    console.log(req.params);
    console.log(req.query);
    res.send(req.params.name + " : " + req.params.age);
});