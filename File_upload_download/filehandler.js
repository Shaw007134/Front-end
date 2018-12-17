function filehandler(files) {
  var fileList = document.getElementsByClassName("upload-items")[0]
  if(document.getElementsByClassName("upload-items")){
    for (var i = 0; i < files.length; i++){ 
      var file = files[i];
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

      
      if(file.type.indexOf('image')!=-1){
        img.src = window.URL.createObjectURL(files[i]); 
        img.width = 32 
        img.height = 32 
      }
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
      fileList.appendChild(li); 
      uploadFile.call(null,file,progress) 
    }
  }
}