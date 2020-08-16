const express = require('express');
const path = require('path');
const app = express();
const bodyparser = require('body-parser');
const Joi = require('joi');
 
app.use('/public',express.static(path.join(__dirname,'static')));
app.use(bodyparser.urlencoded({extended:  false}));
app.use(bodyparser.json());

app.get('/',(req,res) => {
    res.sendFile(path.join(__dirname,'static','index.html' ));
});

app.post('/',(req,res) =>{
    console.log(req.body);
    
    const schema = Joi.object().keys({
        email : Joi.string().trim().email().required(),
        password : Joi.string().min(5).max(12).trim().required(),
    });
    Joi.validate(req.body,schema,(err,result) => {
        if(err){
            console.log(err);
            res.send('an error has occured');
        }
        else{
            console.log(result);
            res.send('succesfully posted data');

        }

    })
});

app.listen(3000);