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
  
  // 设置上传文件相关的事件处理函数
  upload.addEventListener("progress", uploadProgress, false); 
  upload.addEventListener("load", uploadSucceed, false); 
  upload.addEventListener("error", uploadError, false); 
  // 上传文件
  xhr.open("POST", "http://47.104.228.220:3000/upload?"+file.name);  
  xhr.onreadystatechange = function(){
    if(xhr.readyState === 4 && xhr.status === 200){
      console.log("upload complete");
      console.log("response: "+xhr.responseText);
    }
  }
  xhr.send(formData)
}

function uploadProgress(event){ 
  if (event.lengthComputable){ 
    // 将进度换算成百分比
    var percentage = Math.round((event.loaded * 100) / event.total); 
    console.log("percentage:" + percentage); 
    if (percentage < 100){ 
      event.target.progressbar.firstChild.style.width = percentage + "%"; 
      event.target.progressbar.lastChild.textContent = percentage + "%"; 
    }  
  } 
} 

function uploadSucceed(event){ 
  event.target.progressbar.firstChild.style.width = "100%"; 
  event.target.progressbar.lastChild.textContent = "100%"; 
  // event.target.progressbar.style.display = 'none';
}

function uploadError(error){ 
  console.log(err)
}