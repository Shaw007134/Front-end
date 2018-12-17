var i = 0
var progress = document.getElementsByClassName('item-progress')

function uploadFile(files){
  var origin = progress.length - files.length
  var progressBar = progress[origin+i]
  console.log('origin: ' + origin)
  console.log('i: '+ i)
  console.log("origin + i: " + (origin + i))
  var span = document.createElement('span'); 
  var div = document.createElement('div');

  span.textContent = "0%"; 
  progressBar.appendChild(div);
  progressBar.appendChild(span);
  
  var action = progressBar.previousSibling.lastChild
  var a = document.createElement('a');
  var span_1 = document.createElement('span');
  span_1.className = 'remove icon-jfi-times'
  span_1.setAttribute('title','Remove')
  a.appendChild(span_1)
  action.appendChild(a)
  
  var formData = new FormData()
  formData.append('image',files[i])

  var xhr = new XMLHttpRequest(); 
  var upload = xhr.upload; 
  upload.progressbar = progressBar; 
  upload.a = a

  xhr.open("POST", "http://47.104.228.220:3000/upload?"+files[i].name); 

  xhr.onreadystatechange = function(){
    // console.log('readyState :' + xhr.readyState)
    if(xhr.readyState === 4){
      if(xhr.status === 200){
        console.log("response: "+xhr.responseText);
        
      }
    }
  }
    
    // 设置上传文件相关的事件处理函数
  upload.addEventListener("progress", uploadProgress, false); 
  upload.addEventListener("load", uploadSucceed, false); 
  upload.addEventListener("error", uploadError, false); 
  upload.addEventListener("abort", uploadAbort, false); 
  // 上传文件

  a.addEventListener('click',function(e){
    var i = e.currentTarget.firstChild.className
    var li = e.currentTarget.parentNode.parentNode.parentNode
    if(i.indexOf('remove')!=-1){
      xhr.abort()
      if(li){  
        li.classList.add('fadeout')
        setTimeout(()=>{
          li.remove()
        },300)
      }
    }
  }) 
  
  function uploadProgress(event){ 
    if (event.lengthComputable){ 
      // 将进度换算成百分比
      var percentage = Math.round((event.loaded * 100) / event.total); 
      if (percentage < 100){ 
        event.target.progressbar.firstChild.style.width = percentage + "%"; 
        event.target.progressbar.lastChild.textContent = percentage + "%"; 
      }  
    } 
  } 

  function uploadSucceed(event){ 
    console.log(event.target.progressbar)
    event.target.progressbar.firstChild.style.width = "100%"; 
    event.target.progressbar.lastChild.textContent = "100%"; 
    event.target.progressbar.style.display = 'none';
    var a = event.target.a

    a.firstChild.className = 'success icon-jfi-check'
    a.setAttribute('title','')
    a.addEventListener('mouseover',function(e){
      var i = e.currentTarget.firstChild.className
      if(i.indexOf('success')!=-1){
        e.currentTarget.firstChild.className = 'remove icon-jfi-times'
      }
    })

    a.addEventListener('mouseout',function(e){
      var i = e.currentTarget.firstChild.className
      if(i.indexOf('remove')!=-1){
        e.currentTarget.firstChild.className = 'success icon-jfi-check'
      }
    })

    i = i + 1
    if (i>files.length-1) {
      i = 0
      return false
    }
    uploadFile(files)
  }


  function uploadError(err){ 
    console.log(err)
  }

  function uploadAbort(event){
    var li = event.target.a.parentNode.parentNode.parentNode
    li.classList.add('fadeout')
    setTimeout(()=>{
      li.remove()
    },300)
  }

  xhr.send(formData)
}



