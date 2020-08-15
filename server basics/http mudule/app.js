const http = require('http');
const server = http.createServer((req,res) =>{

    if(req.url == '/hello')
    {
        res.write('Hello world from node js');
        res.end();
    }
    else{
        res.write('404 page not found');
        res.end();
    }
});

server.listen('3000');