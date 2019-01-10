var input = document.getElementsByTagName('input')[0]
input.setAttribute('multiple',true)
input.addEventListener('change',trigger,false)
var queue = []
var file_list = []

var ul = document.getElementsByClassName('items-list')[0]
var current_li

function createDrag_Thumbnail(){  
  var li = document.createElement('li')
  var div = document.createElement('div')
  var i = document.createElement('i')
  li.setAttribute('class','list-item')
  div.setAttribute('class','thumbnail-inner')
  i.innerHTML = '+'

  div.appendChild(i)
  li.appendChild(div)
  ul.appendChild(li)

  li.addEventListener('click',trigger_input)
}

function trigger_input(e){
  input.click()
  console.log(input.value)
  current_li = e.currentTarget
}

function trigger(e){
  var file = e.target.files[0]
  var item_inner = current_li.firstChild
  var i = item_inner.firstChild
  i.remove()
  var type_holder = document.createElement('div')
  var actions_holder = document.createElement('div')
  var thumbnail_holder = document.createElement('div')
  var content_holder = document.createElement('div')
  var progress_holder = document.createElement('div')

  var item_img = document.createElement('div')
  var span_img = document.createElement('span')
  type_holder.setAttribute('class','type-holder')
  actions_holder.setAttribute('class','actions-holder')
  thumbnail_holder.setAttribute('class','thumbnail-holder')
  content_holder.setAttribute('class','content-holder')
  progress_holder.setAttribute('class','progress-holder')

  item_img.setAttribute('class','item-image')
  span_img.setAttribute('class','action-popup')
  item_inner.appendChild(type_holder)
  item_inner.appendChild(actions_holder)
  item_inner.appendChild(thumbnail_holder)
  item_inner.appendChild(content_holder)
  item_inner.appendChild(progress_holder)

  var h5 = document.createElement('h5')
  var size = document.createElement('span')
  
  type_holder.innerHTML = file.type.split('/')[1].toUpperCase()
  h5.innerHTML = file.name
  size.innerHTML = (parseInt(file.size)/1024/1024).toFixed(2).toString()+' MB'
  content_holder.appendChild(h5)
  content_holder.appendChild(size)
  
  thumbnail_holder.appendChild(item_img)
  thumbnail_holder.appendChild(span_img)
  var reader = new FileReader()
  reader.readAsDataURL(file)
  reader.onload = function(e){
    current_li.removeEventListener('click',trigger_input)
    var dataurl = e.target.result
    var img = new Image()
    img.src = dataurl
    img.onload = function(){
      console.log(img)
      console.log('img.width: '+img.naturalWidth)
      console.log('img.height: '+img.naturalHeight)
    }
    span_img.addEventListener('click',function(){
      preview(img,file)
    })
    item_img.appendChild(img)
    createDrag_Thumbnail()
    var fileobj = {
      "file": file,
      "actions": actions_holder,
      "progress": progress_holder,
      "thumbnail": thumbnail_holder
    }
    file_list.push(fileobj)
    sendFile()
  }
}

function sendFile(){
  if(queue.length == 0 && file_list.length>0){
    queue.push(file_list.pop())
    var file = queue[0]["file"]
    var progress = queue[0]["progress"]
    var action = queue[0]["actions"]
    var thumbnail = queue[0]["thumbnail"]

    var progress_bar = document.createElement('div')
    var bar = document.createElement('div')

    progress_bar.setAttribute('class','progressbar')
    bar.setAttribute('class','bar')

    progress_bar.appendChild(bar)
    progress.appendChild(progress_bar)

    var icon = document.createElement('a')
    var span_icon = document.createElement('span')
    icon.setAttribute('class','action')
    span_icon.setAttribute('class','remove icon-jfi-times')
    span_icon.setAttribute('title','Remove')
    icon.append(span_icon)
    action.appendChild(icon)

    var xhr = new XMLHttpRequest()
    var upload = xhr.upload
    var formData = new FormData()
    formData.append("image",file)
    xhr.open("POST","http://47.104.228.220:3000/upload?"+file.name)
    xhr.onreadystatechange = function(){
      if(xhr.readyState === 4 && xhr.status === 200){
        console.log(file.name + " upload successful")
      }
    }

    icon.addEventListener('click',function(e){
      if (window.confirm("Do you really want to delete?")) { 
        var li = action.parentNode.parentNode
        if(span_icon.className.indexOf('remove')!=-1){
          xhr.abort()
          if(li){  
            input.value = ''
            li.classList.add('fadeout')
            setTimeout(()=>{
              li.remove()
            },500)
          }
        }
      }
    }) 

    upload.addEventListener('progress',uploadProgress,false)
    upload.addEventListener('abort',uploadAbort,false)
    upload.addEventListener('loadend',uploadSuccess,false)
    upload.addEventListener('error',uploadError,false)

    function uploadProgress(e){
      if (e.lengthComputable){
        var percentage = Math.round(e.loaded*100/e.total)
        if (percentage < 100){
          bar.style.width=percentage+'%'
        }
      }
    }

    function uploadSuccess(e){
      bar.style.width='100%'
      progress_bar.parentNode.style.display = 'none'
      thumbnail.parentNode.className = 'item-inner'
      span_icon.className = 'success icon-jfi-check'
      span_icon.setAttribute('title','')
      icon.setAttribute('title','')
      icon.addEventListener('mouseover',function(e){
        if(span_icon.className.indexOf('success')!=-1){
          span_icon.className = 'remove icon-jfi-times'
        }
      })
      icon.addEventListener('mouseout',function(e){
        if(span_icon.className.indexOf('remove')!=-1){
          span_icon.className = 'success icon-jfi-check'
        }
      })
      queue.shift()
      sendFile()
    }

    function uploadAbort(e){
      console.log("执行了abort")
      
      input.value = ''
      var li = action.parentNode.parentNode
      li.classList.add('fadeout')
      setTimeout(()=>{
        li.remove()
      },500)
      queue.shift()
      sendFile()
    }

    function uploadError(e){
      console.log(e)
    }

    xhr.send(formData)

  }
}

