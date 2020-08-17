const express = require('express');
const path = require('path');
const app = express();

app.use('/public',express.static(path.join((__dirname,'static'))));
app.set('view engine','ejs');

app.get('/:userquery',(req,res) => {
    res.render('index',{data : {userquery: req.params.userquery,
                        searchResults : ['book1','book2','book3'],
                        loggedIn : true,
                        username : 'olksjak'
                    }});
});
app.listen(3000);