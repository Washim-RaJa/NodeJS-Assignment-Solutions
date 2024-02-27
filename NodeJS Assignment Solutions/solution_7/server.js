const http = require('http');

const myServer = http.createServer(function(req, res){
    if (req.url === '/') {
        res.write('<h1 style="text-align:center">I Am Happy To Learn Full Stack Web Development From PW Skills !</h1>')
    }
    res.end();
})

myServer.listen(5000);
console.log('The server is hosted on port 5000 successfully');