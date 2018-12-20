function preview(img,file){
  var popup = document.createElement('div')
  popup.className = 'popup'
  popup.innerHTML = 
  `
  <div class="preview has-arrows">
      <div class="popup-node">
        <img src=${img.src} alt="">
      </div>
      <div class="popup-content">
        <ul class="popup-meta">

          <li>
            <span>Title:</span>
            <h5 class="title"></h5>
          </li>

          <li>
            <span>Type:</span>
            <h5 class="type"></h5>
          </li>

          <li>
            <span>Size:</span>
            <h5 class="size"></h5>
          </li>

          <li>
            <span>Dimensions:</span>
            <h5 class="dimensions"></h5>
          </li>
        </ul>

        <ul class="popup-tools">
          <li>
            <a data-action>
              <span></span>
              <span>Crop</span>
            </a>
          </li>

          <li>
            <a data-action>
              <span></span>
              <span>Rotate</span>
            </a>
          </li>

          <li>
            <a data-action>
              <span></span>
              <span>Remove</span>
            </a>
          </li>
        </ul>

        <div class="popup-button">
          <a data-action class="button-cancel">Cancel</a>
          <a data-action class="button-confirm">Confirm</a>
        </div>
      </div>
    </div>
  `
  document.body.appendChild(popup)
  var title = document.getElementsByClassName("title")[0]
  var type = document.getElementsByClassName("type")[0]
  var size = document.getElementsByClassName("size")[0]
  var dimensions = document.getElementsByClassName("dimensions")[0]

  title.innerHTML = file.name
  type.innerHTML = file.type.split('/')[1].toUpperCase()
  size.innerHTML = (parseInt(file.size)/1024/1024).toFixed(2).toString()+' MB'
  dimensions.innerHTML = img.naturalWidth + 'x' + img.naturalHeight + 'px'
  var cancel = document.getElementsByClassName("button-cancel")[0]
  var confirm = document.getElementsByClassName("button-confirm")[0]

  cancel.addEventListener('click',function(){
    popup.remove()
  })
  confirm.addEventListener('click',function(){
    popup.remove()
  })
}