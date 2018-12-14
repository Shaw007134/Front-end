function uploadFile(file,progressBar){ 
  var xhr = new XMLHttpRequest(); 
  var upload = xhr.upload; 
  var formData = new FormData()
  formData.append('image',file)
  var span = document.createElement('span'); 
  var div = document.createElement('div');

  span.textContent = "0%"; 
  progressBar.appendChild(div);
  progressBar.appendChild(span);
  upload.progressbar = progressBar; 

  var action = progressBar.previousSibling.lastChild
  console.log(action)
  var a = document.createElement('a');
  var i = document.createElement('i');
  i.className = 'remove icon-jfi-times'
  a.appendChild(i)
  action.appendChild(a)

  upload.a = a
  
  // 设置上传文件相关的事件处理函数
  upload.addEventListener("progress", uploadProgress, false); 
  upload.addEventListener("load", uploadSucceed, false); 
  upload.addEventListener("error", uploadError, false); 
  upload.addEventListener("abort", uploadAbort, false); 
  // 上传文件
  xhr.open("POST", "http://47.104.228.220:3000/upload?"+file.name); 
  a.addEventListener('click',function(e){
    var i = e.currentTarget.firstChild.className
    if(i.indexOf('remove')!=-1){
      xhr.abort()
      // xhr = null
    }else{
      var li = e.currentTarget.parentNode.parentNode.parentNode
      var ul = li.parentNode
      ul.removeChild(li)
    }
  }) 
  
  xhr.onreadystatechange = function(){
    console.log('readyState :' + xhr.readyState)
    if(xhr.readyState === 4){
      if(xhr.status === 200){
        console.log("upload complete");
        console.log("response: "+xhr.responseText);
      }
    }
  }
  xhr.send(formData)
}



function uploadProgress(event){ 
  var a = event.target.a
  if(a.firstChild.className.indexOf('remove')!=-1){
    
  }
  if (event.lengthComputable){ 
    // 将进度换算成百分比
    var percentage = Math.round((event.loaded * 100) / event.total); 
    // console.log("percentage:" + percentage); 
    if (percentage < 100){ 
      event.target.progressbar.firstChild.style.width = percentage + "%"; 
      event.target.progressbar.lastChild.textContent = percentage + "%"; 
    }  
  } 
} 

function uploadSucceed(event){ 
  event.target.progressbar.firstChild.style.width = "100%"; 
  event.target.progressbar.lastChild.textContent = "100%"; 
  event.target.progressbar.style.display = 'none';
  event.target.a.firstChild.className = 'success icon-jfi-check'
}


function uploadError(err){ 
  console.log(err)
}

function uploadAbort(event){
  console.log(event)
  var li = event.target.a.parentNode.parentNode.parentNode
  var ul = li.parentNode
  ul.removeChild(li)
}