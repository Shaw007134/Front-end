var exec = require("child_process").exec;

function start(response) {
  console.log("Request handler 'start' was called");
  var content = '<html>'+'<head>'+
                '<meta http-equiv="Content-Type" content="text/html;"+
                'charset=UTF-8"/>'+
                '</head>'+
                '<body>'+
                '<form action="/upload" method="post">'+
                ;

  exec("dir",function(error,stdout,stderr){
    response.writeHead(200,{"Content-Type":"text/plain"});
    response.write(stdout);
    response.end();
  });

  //return content;
  // function sleep(milliSeconds) {
  //   var startTime = new Date().getTime();
  //   while (new Date().getTime() < startTime + milliSeconds);
  // }

  // sleep(10000);

  // return "Hello Start";
}

function upload(response) {
  console.log("Request handler 'upload' was called.");
  response.writeHead(200,{"Content-Type":"text/plain"});
  response.write("Hello Upload");
  response.end();
}

exports.start = start;
exports.upload = upload;

