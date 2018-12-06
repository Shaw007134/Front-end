//读取文件路径，返回文件内容
const fs = require('fs')
const path = require('path')

function getFileByPath(fpath,callback){
  fs.readFile(fpath,'utf-8',(err,dataStr)=>{
    if(err) return callback(err)
    console.log(dataStr)
    // return dataStr
    callback(null,dataStr)
  })

}

// var result = getFileByPath(path.join(__dirname,'./files/1.txt'))

// console.log(result)

getFileByPath(path.join(__dirname,'./files/11.txt'),(err,dataStr)=>{
  if(err) return console.log(err)
  console.log(dataStr+'---')
})