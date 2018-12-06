//读取文件路径，返回文件内容
const fs = require('fs')
const path = require('path')

function getFileByPath(fpath,successFunc, errorFunc){
  fs.readFile(fpath,'utf-8',(err,dataStr)=>{
    if(err) return errorFunc(err)
    successFunc(dataStr)
  })

}


// getFileByPath(path.join(__dirname,'./files/11.txt'),function(data){
//   console.log(data+' success')
// },function(err){
//   console.log('error'+err.message)
// })

//promise本质单纯为了解决回调地狱问题，并不能帮我们减少代码量
getFileByPath(path.join(__dirname,'./files/1.txt'),function(data){
  console.log(data+' success')

  getFileByPath(path.join(__dirname,'./files/2.txt'),function(data){
    console.log(data+' success')

    getFileByPath(path.join(__dirname,'./files/3.txt'),function(data){
      console.log(data+' success')
    })
  })
})

