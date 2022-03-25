const http = require('http');
const fs = require("fs")

const app = http.createServer(function (req,res) {

    let url = req.url;

    if(url === '/')
        url = '/index.html';
    if(url === '/favoricon.ico')
        return res.writeHead(404);

    res.writeHead(200);
    res.end(fs.readFileSync(__dirname + url));
    // res.writeHead(200);
    // res.end(fs.readFileSync());
    //
    // console.log(__dirname);
    // res.end("Hello World");
});

app.listen(3333);
