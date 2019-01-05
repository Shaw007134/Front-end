const express = require('express') 
const url = require('url') 
const path = require('path') 
const fs = require('fs') 
const multer = require('multer') 
const mongoose = require('mongoose') 
const ImageFile = require('./imagefile') 
const app = express() 
const port = 8888
 
 
var allowCrossDomain = function(req,res,next){
    res.header('Access-Control-Allow-Origin','*')
    next()
}

var storage = multer.diskStorage({
    destination: function(req,file,cb){
        cb(null,'uploads')
    },
    filename: function(req,file,cb){
        cb(null,file.originalname)
    }
})
var upload = multer({storage:storage})

app.use(allowCrossDomain)
app.get('/',(req,res)=>{
          res.send('Hello Express!')
        })
app.post('/upload',upload.array('image'),(req,res,next)=>{
    var queryValue = decodeURIComponent(url.parse(req.url).query)
    console.log(req.files)
    var data = req.files.forEach(function(item){
          console.log(item)
          var imagefile = new ImageFile({
                title: item.filename,
                size: item.size,
                url: item.path
            })
            imagefile.save(function(err){
                if(err) console.log(err)
            })
    })
    res.send('upload suceessful')
})
app.get('/download',(req,res,next)=>{
    var queryValue = url.parse(req.url).query
    queryValue = decodeURIComponent(queryValue)
    //res.header('Content-Type',"image/png")
    //console.log('get '+queryValue)
    mongoose.connect('mongodb://localhost/files')
    var ImageFile = mongoose.model('ImageFile')
    ImageFile.findOne({'title':queryValue},'url',function(err,imagefile){
        if(err) return handleError(err)
        console.log(imagefile.url)
        //console.log('uploads/'+queryValue)
        var content = fs.readFileSync(imagefile.url,'binary')
        res.write(content,'binary')
        res.end()
    })
})


var server = app.listen(port,function(){
    var host = server.address().address
    console.log(host)
    console.log(`App listening on ${host}:${port}!`)
})

