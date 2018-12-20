var imgMaxSize = 200 * 1024 //超过200k进行图片压缩

function CompressImg(fileobj,bool){
  var reader = new FileReader()
  var canvas = document.createElement('canvas')
  var img = new Image()
  var columns = fileobj["progress"].parentNode.firstChild.getElementsByTagName('div')
  var thumbnail = columns[0]
  var title = columns[1]

  var thumbnail_img = thumbnail.getElementsByTagName('img')[0]
  var title_size = title.getElementsByTagName('span')[0]

  reader.readAsDataURL(fileobj["file"])
  reader.onload = function(e){
    var dataurl = e.target.result

    img.src = dataurl

    thumbnail_img.addEventListener('click',function(){
      preview(img,fileobj['file'])
    })

    img.onload = function(){
      var ctx = canvas.getContext('2d')
      var targetWidth=originWidth = img.width 
      var targetHeight=originHeight = img.height 
      var name = fileobj["file"].name
      var type = fileobj["file"].type
      console.log("file type: "+type)
      if(bool){
        var maxWidth = 400
        var maxHeight = 400
        if(originWidth > maxWidth || originHeight > maxHeight){
          if (originWidth / originHeight > maxWidth / maxHeight) {
            targetWidth = maxWidth;
            targetHeight = Math.round(maxWidth * (originHeight / originWidth));
          }else{
            targetHeight = maxHeight;
            targetWidth = Math.round(maxHeight * (originWidth / originHeight));
          }
        }
      }
      canvas.width = targetWidth
      canvas.height = targetHeight
      ctx.clearRect(0, 0, targetWidth, targetHeight);
      ctx.drawImage(img,0,0,targetWidth, targetHeight)
      
      //需要指定toDataURL的编码格式
      // compressed_dataurl = canvas.toDataURL(img.type,0.2)
      canvas.toBlob(function(blob){
        blob.name = name
        fileobj["file"] = blob
        title_size.innerHTML = (parseInt(blob.size)/1024/1024).toFixed(2).toString()+' MB'
        file_array.push(fileobj)
        console.log("blob "+blob.name + " blob type: "+blob.type)
        set_progress.call()
      },type)
    }
  }
}


function filehandler(files) {
  var fileList = document.getElementsByClassName("upload-items")[0]
  for (var i = 0; i < files.length; i++){ 
    var file = files[i]
    var li = document.createElement('li'); 
    var column = document.createElement('div'); 

    var progress = document.createElement('div'); 
    
    var thumbnail = document.createElement('div'); 

    var img = document.createElement('img'); 
    
    var title = document.createElement('div'); 
    var name = document.createElement('div'); 
    var size = document.createElement('span');
    
    var action = document.createElement('div')
    
    li.setAttribute('class','upload-item')
    column.setAttribute('class','item-column')
    progress.setAttribute('class','item-progress'); 
    thumbnail.setAttribute('class','column-thumbnail')
    title.setAttribute('class','column-title')
    action.setAttribute('class','column-action')

    name.innerHTML = file.name; 
    size.innerHTML = (parseInt(file.size)/1024/1024).toFixed(2).toString()+' MB'

    thumbnail.appendChild(img)
    title.appendChild(name)
    title.appendChild(size)

    column.appendChild(thumbnail); 
    column.appendChild(title); 
    column.appendChild(action)
      
    li.appendChild(column)
    li.appendChild(progress)
    
    var fileobj = {"file":file,"progress":progress};

    if(file.type.indexOf('image')!=-1){
      img.src = window.URL.createObjectURL(file); 
      img.width = 32
      img.height = 32 
      // 图片加载完成，释放该URL，无需再指向它
      img.onload = function(e){
        window.URL.revokeObjectURL(this.src)
      }
      if(file.size > imgMaxSize){
        CompressImg(fileobj,true)
      }else{
        CompressImg(fileobj,false)
      }
    }else{
      file_array.push(fileobj)
      set_progress.call()
    }

    fileList.appendChild(li); 

  }
}