const http = require('http')
const urlModule = require('url')
//解析url地址，拿到pathname query
const server = http.createServer()
server.on('request',function(req,res){

  const {pathname:url,query} = urlModule.parse(req.url,true)
  if(url === '/getscript'){
    //拼接一个合法的JS脚本，这里拼接的是一个方法调用
    var data = {
      name: 'xx',
      age: 20,
    }
    var scriptStr = `${query.callback}(${JSON.stringify(data)})`
    //res.end发送给客户端，客户端把这个字符串当作JS代码去解析执行
    res.end(scriptStr)
  }else{
    res.end('404')
  }
})

server.listen(3000,function(){
  console.log('server listen at http://127.0.0.1:3000')
})