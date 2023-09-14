const http = require('http')
const fs = require('fs');

const server = http.createServer((req, res) => {
    if (req.url == "/index.htm") {
        fs.readFile('index.htm', (err, data) => {
            if (err) throw err 
            res.end(data);
        });
    } 
    else if (req.url == "/about.html") {
        fs.readFile('about.html', (err, data) => {
            if (err) throw err;
            res.end(data);
        });
    }
    else if (req.url == "/login.html") {
        fs.readFile('login.html', (err, data) => {
            if (err) throw err;
            res.end(data);
        });
    }
    else if (req.url == "/pages.html") {
        fs.readFile('pages.html', (err, data) => {
            if (err) throw err;
            res.end(data);
        });
    }
    else if (req.url == "/register.html") {
        fs.readFile('register.html', (err, data) => {
            if (err) throw err;
            res.end(data);
        });
    }
});

server.listen(8090, () => {
    console.log('Server is listening on port 8090')
})