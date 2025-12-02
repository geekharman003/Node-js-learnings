const http = require("http");

http.createServer(function(req,res){
    res.writeHead(200,{'content-type':'text/html'});
    if(req.url === "/"){
        res.end("<h1>Hello World</h1>");
    }
    else if(req.url === "/pizza"){
        res.end("<h1>This is your pizza</h1>");
    }
    else if(req.url === "/home"){
        res.end("<h1>Welcome home</h1>");
    }
    else if (req.url === "/about") {
      res.end("<h1>Welcome to About Us</h1>");
    }
    else if (req.url === "/node") {
      res.end("<h1>Welcome to my Node Js project</h1>");
    }
    else{
        res.end("<h1>Page Not Found</h1>");
    }
    
}).listen(8080);