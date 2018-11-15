
!function(){
  var duration = 1
  $('.actions').on('click', 'button', function(e){
    let $button = $(e.currentTarget) // button
    let speed = $button.attr('data-speed')
    $button.addClass('active')
      .siblings('.active').removeClass('active')
    switch(speed){
      case 'slow':
        duration = 1
        break
      case 'normal':
        duration = 1
        break
      case 'fast':
        duration = 1
        break
    }
  })

  function writeCode(prefix, code, fn){
    let container = document.querySelector('#code')
    let styleTag = document.querySelector('#styleTag')
    let n = 0
    let id
    id = setTimeout(function run(){
      n+=1
      container.innerHTML = code.substring(0,n)
      styleTag.innerHTML = code.substring(0,n)
      container.scrollTop = container.scrollHeight
      if(n < code.length){
        id = setTimeout(run, duration)
      }else{
        fn && fn.call()
      }
    }, duration)
  }
  let code =`
  .body {
    height: 100px;
    position: absolute;
    width: 125px;
    top: 164px;
    left: 140px;
    background: #C49152;
    border-top-right-radius: 30%;
    border-bottom-right-radius: 50%;
    border-bottom-left-radius: 70%;
    box-shadow: inset -15px 0 0 #9D7442;
  }
  .chest {
    animation: chest 10s 0.05s cubic-bezier(0.645, 0.045, 0.355, 1) both infinite;
    height: 110%; 
    width: 130px;
    left: -30px;
    z-index: 1;
  }

  .fur {
    height: 80px;
    width: 80px;
    top: 0;
    border-radius: 50%;
    background: linear-gradient(to top, #EFE1AF, white 40%, white 50%, #EFE1AF 75%);
  }
  .fur:first-child {
    height: 110px;
    width: 110px;
    left: calc(50% - 55px);
    z-index: 1;
    box-shadow: inset 0 0 0 2px rgba(0, 0, 0, 0.2), 3px 0 15px rgba(0, 0, 0, 0.2);
  }
  .fur:first-child > .patch {
    height: 50%;
    width: 50%;
    left: 25%;
    transform-style: none;
    bottom: 8%;
  }
  
  .fur:nth-child(2) {
    left: -3px;
  }
  .fur:nth-child(3) {
    right: -20px;
  }
  
  .fur:not(:first-child) > .patch {
    height: 35%;
    width: 35%;
    bottom: 10%;
    left: 30%;
  }

  .head {
    height: 149px;
    width: 144px;
    top: -110px;
    left: -35px;
    z-index: 10;
  }
  .face {
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    background: linear-gradient(to top left, #9D7442, #C49152 60%, #C49152 70%, #d7b58b 100%);
  }
  
  .ears {
    width: 100%;
    height: 54px;
    z-index: -2;
  }
  
  .ear {
    width: 160px;
    height: 70px;
    left: 50%;
    bottom: 10%;
  }

  .ear:before, .ear:after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    transform: skewX(-25deg) skewY(5deg);
    background: radial-gradient(farthest-side, #6a3c1c, #5a3318);
    transform-origin: bottom left;
    border: 12px solid #260F02;
    border-top-left-radius: 100%;
    border-bottom-right-radius: 100%;
  }

  .ear:after {
    border: 8px solid #9D7442;
    background: transparent;
  }
  
  .ear + .ear {
    transform: translateX(-40px) rotateY(180deg);
  }

  .ear > .lobe {
    height: 20%;
    width: 20%;
    background: #9D7442;
    bottom: 25%;
    left: -5%;
    transform: skewX(-50deg);
    border-top-right-radius: 15%;
    box-shadow: 9px 6px 0 #9D7442;
  }
  
  .eyes {
    width: 77%;
    height: 33%;
    left: 5%;
    top: 35%;
  }
  
  .eye {
    height: 100%;
    width: 28%;
    border-top-left-radius: 50% 65%;
    border-top-right-radius: 50% 65%;
    border-bottom-left-radius: 50% 35%;
    border-bottom-right-radius: 50% 35%;
    background-color: #260F02;
    box-shadow: inset 0 0 0 3px #260F02;
    background-image: radial-gradient(ellipse 5px 10px at 50% 65%, #260F02 0%, #260F02 99%, transparent 100%), 
      radial-gradient(ellipse 10px 20px at 50% 90%,#955D27 0%, #955D27 99%, transparent 100%), 
         radial-gradient(ellipse 4px 6px at 55% 20%, white 0%, white 99%, transparent 100%);
  }

  
  .eye:before {
    content: '';
    display: block;
    position: absolute;
    height: 30%;
    width: 30%;
    background: transparent;
    border-radius: 50%;
    border-right: 3px solid #260F02;
    border-left: 1px solid transparent;
    border-top: 1px solid transparent;
    border-bottom: 1px solid transparent;
    z-index: -1;
    transform: rotate(-38deg);
    top: -4px;
    left: initial;
    right: 2px;
    opacity: 0.6;
    z-index: 1;
  }

  .eye:last-child {
    right: 10%;
    -webkit-transform: rotateY(180deg);
            transform: rotateY(180deg);
  }
  
  .eye > .eyelid {
    height: 102%;
    width: 102%;
    left: -1%;
    top: -1%;
    overflow: hidden;
  }
  
  .mouth {
    width: 12%;
    height: 6%;
    bottom: 13%;
    left: 33%;
    border-radius: 50%;
    box-shadow: 0 -2px #260F02;
  }
  
  .nose {
    height: 4%;
    background: #260F02;
    border-bottom-left-radius: 50% 65%;
    border-bottom-right-radius: 50% 65%;
    border-top-left-radius: 50% 35%;
    border-top-right-radius: 50% 35%;
    bottom: 26%;
    left: 35%;
  }

  
  .tail {
    height: 120px;
    width: 120px;
    z-index: -1;
  }
  
  .body > .tail {
    z-index: -2;
    right: -40px;
    top: -70px;
  }
  
  .tail .tail {
    top: -35px;
    transform-origin: center bottom;
    transform: scale(0.85);
  }

  .tail > .tail .tail {
    z-index: 1;
  }
  .tail.-end {
    top: -60px;
  }
  
  
  
  .legs {
    top: 70%;
    width: 100%;
    height: 100%;
  }
  
  .leg {
    top: 0;
    background: linear-gradient(to left, #9D7442, #C49152, #cca069);
    transform-origin: center top;
  }

  .leg, .leg > .inner-leg {
    height: 40px;
    width: 30px;
    border-radius: 35%;
  }
  
  .leg > .inner-leg {
    top: 50%;
    transform-origin: center 10%;
  }
  
  .leg:nth-child(1) {
    left: 20px;
    top: -2px;
  }
  .leg:nth-child(2) {
    left: 70px;
  }
  .leg:nth-child(2) ~ * {
    z-index: -1;
  }
  
  .leg:nth-child(3) {
    left: 35px;
    top: -10px;
  }
  .leg:nth-child(4) {
    left: 90px;
    top: -10px;
  }
  
  .inner-leg {
    background: linear-gradient(to left, #9D7442, #C49152, #cca069);
  }
  `
  writeCode('',code)

}.call()