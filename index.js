//mypage web app
var http = require("http"); 
const port = 8000; 

http.createServer(function(req, res) { console.log
    res.writeHead(200, { "Content-Type": "text/plain" });
    res.end("Thank You!");
    }).listen(port, function() { 
        console.log(`Node server is running on port ${port}...`); 
}); 
