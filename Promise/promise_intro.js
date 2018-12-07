//1.Promise是一个构造函数
//+ new Promise
//+ Prototype .then方法
//+ 异步操作

const fs = require('fs')
//new构造函数Promise实例后，异步操作会立即执行
// var promise = new Promise(function(){
//   //这个function内部就是具体的异步操作
//   fs.readFile('./files/2.txt','utf-8',(err,dataStr)=>{
//     if (err) return console.log(err.message)
//     console.log(dataStr)
//   })
// })

function getFileByPath(fpath){
  return new Promise(function(resolve,reject){
    fs.readFile(fpath,'utf-8',(err,dataStr)=>{
      // if (err) return console.log(err.message)
      if (err) return reject(err)
      // console.log(dataStr)
      resolve(dataStr)
    })
  })
}

// getFileByPath('./files/1.txt').then(function(data){
//   console.log(data+'---')
// },function(err){
//   console.log(err.message)
// })

getFileByPath('./files/1.txt')
  .then(function(data){
    console.log(data)
    return getFileByPath('./files/22.txt')
  })
  // ,function(err){
  //   console.log('这是失败的结果'+err.message)
  //   return getFileByPath('./files/2.txt')
  // })
  .then(function(data){
    console.log(data)
    return getFileByPath('./files/3.txt')
  })
  .then(function(data){
    console.log(data)
  })
  .catch(function(err){
    console.log(err.message)
  })

  console.log('okokok')

  //某个promise执行失败不影响后续的执行，可以对该promise加上reject处理函数
  //任一promise执行失败结束后续的所有执行，可以在最后面加上.catch