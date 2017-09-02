var http=require('http');
var fs=require('fs');
var url=require('url');
var  filename ='info.html';
var port = process.env.PORT || process.env.OPENSHIFT_NODEJS_PORT || 8081;

http.createServer(function(req,res){
res.writeHead(200,{'Content-Type':'text/html'});

fs.readFile(filename,function(error,contents){
res.write(contents);
console.log(req.url);

});



}).listen(port);

console.log("running at 127.0.0.1:8081");