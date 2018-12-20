function createDropzone(element,callback){
  var input = document.createElement('input')
  input.setAttribute('type','file')
  input.setAttribute('multiple',true)
  input.style.display = 'none'


  input.addEventListener('change',triggerCallback,false)
  element.appendChild(input)

  element.addEventListener('dragover',function(e){
    e.preventDefault()
    e.stopPropagation()
    element.classList.add('dragover')
  })

  element.addEventListener('dragleave',function(e){
    e.preventDefault()
    e.stopPropagation()
    var inner = document.getElementsByClassName('droppable')[0]
    if(!inner.contains(e.relatedTarget)){
      element.classList.remove('dragover')
    }
  })

  element.addEventListener('drop',function(e){
    e.preventDefault()
    e.stopPropagation()
    element.classList.remove('dragover')
    triggerCallback(e)
  })

  element.addEventListener('click',function(e){
    input.value = null
    input.click()
  })

  function triggerCallback(e){
    var files
    if(e.dataTransfer){
      files = e.dataTransfer.files
    }else if(e.target){
      files = e.target.files
    }
    callback.call(null,Array.prototype.slice.call(files))
  }
}



