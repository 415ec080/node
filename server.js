var http=require('http');
var fs=require('fs');
var url=require('url');
var  filename ='info.html';


http.createServer(function(req,res){
res.writeHead(200,{'Content-Type':'text/html'});

fs.readFile(filename,function(error,contents){
res.write(contents);
console.log(req.url);

});



}).listen(8081,'0.0.0.0');

console.log("running at 127.0.0.1:8081");