const http = require('http');
const fs = require("fs")
const url = require('url');

const app = http.createServer(function (req,res) {

    let url = req.url;
    let queryData = url.parse(_url, true).query;
    res.end(queryData.id);

    // if(url === '/')
    //     url = '/index.html';
    // if(url === '/favoricon.ico')
    //     return res.writeHead(404);
    //
    // res.writeHead(200);
    // res.end(fs.readFileSync(__dirname + url));
    // res.writeHead(200);
    // res.end(fs.readFileSync());
    //
    // console.log(__dirname);
    // res.end("Hello World");
});

app.listen(3333);
