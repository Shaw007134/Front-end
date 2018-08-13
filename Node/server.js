var http = require("http");
var url = require("url");

function start(route,handle){
  http.createServer(function(request,response){
    var postData = "";
    var pathname = url.parse(request.url).pathname;
    console.log("Request for " + pathname + " received.");
    
    request.setEncoding("utf-8");

    request.addListener("data",function(postDataChunk){
      postData += postDataChunk;
      console.log("Received POST data chunk "+
      postDataChunk+".");
    });

    request.addListener("end",function(){
      route(handle,pathname,response,postData)
    })
    //var content = route(handle, pathname, response);
    
    //console.log("Request received")
    // response.writeHead(200,{"Content-Type":"text/plain"});
    // response.write(content);
    // response.end(); 
  }).listen(8888);

  console.log("Server has started.");
}

exports.start = start;