var http = require('http');
var dt = require('./myfirstmodule');
http.createServer(function(req,res){
    res.writeHead(200, {'Content-Type':'text/html'});
    res.write("Current date and time: <br>" + dt.myDateTime());
    
    res.end('Hello Arvind!');
}).listen(8080);


