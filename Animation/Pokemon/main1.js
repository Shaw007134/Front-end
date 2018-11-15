var data =`
/*首先准备一张画布*/
.preview-wrapper{
  background-color: #a3a3ec;
  background-repeat: no-repeat;
}

/*先画小伊布的肚子*/
.body{
  height: 100px;
  width: 125px;
  top: 164px;
  left: 140px;
  background: #C49152;
  border-top-right-radius: 30%;
  border-bottom-right-radius: 50%;
  border-bottom-left-radius: 70%;
  box-shadow: inset -15px 0 0 #9D7442;
}
/*再画伊布的头*/
.head {
  height: 149px;
  width: 144px;
  top: -110px;
  left: -35px;
  z-index: 10;
  transform-style: preserve-3d;
  perspective: 1000px;
}
.head:before {
  content: '';
  position: absolute;
  display: block;
  height: 100%;
  width: 100%;
  top: 0;
  left: 0;
}
.head:after {
  content: '';
  position: absolute;
  display: block;
  height: 20%;
  width: 20%;
  background: green;
  transform: skewX(30deg) rotate(40deg);
  left: 50%;
  top: -2%;
  background: #C49152;
  box-shadow: -15px 8px #ca9d65, -25px 22px #cca069, -35px 50px #cda36f;
  z-index: -1;
}
/*接着画耳朵*/
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
  transform-origin: bottom left;
  transform: translateX(40px);
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
/*然后画脸和眼睛*/
.face {
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  background: linear-gradient(to top left, #9D7442, #C49152 60%, #C49152 70%, #d7b58b 100%);
}
.face, .face:before {
  border-top-left-radius: 40% 50%;
  border-top-right-radius: 40% 50%;
  border-bottom-left-radius: 50% 30%;
  border-bottom-right-radius: 50% 30%;
}
.face:before {
  content: '';
  display: block;
  position: absolute;
  height: 100%;
  width: 100%;
  background: radial-gradient(farthest-side, rgba(0, 0, 0, 0.6), transparent);
  z-index: -1;
  top: 20%;
  left: 0%;
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
  background-image: radial-gradient(ellipse 5px 10px at 50% 65%, #260F02 0%, #260F02 99%, transparent 100%), radial-gradient(ellipse 10px 20px at 50% 90%, #955D27 0%, #955D27 99%, transparent 100%), radial-gradient(ellipse 4px 6px at 55% 20%, white 0%, white 99%, transparent 100%);
}
.eye:last-child {
  right: 10%;
  transform: rotateY(180deg);
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
.eye > .eyelid {
  height: 102%;
  width: 102%;
  left: -1%;
  top: -1%;
  overflow: hidden;
}
.eye > .eyelid:before {
  content: '';
  position: absolute;
  display: block;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  background: #C49152;
  border-bottom: 3px solid #260F02;
  transform-origin: center bottom;
  transform: translateY(-100%);
  border-radius: 50% 50% 15% 15%;
}
/*然后是鼻子和嘴巴*/
.nose {
  width: 6%;
  height: 4%;
  background: #260F02;
  border-bottom-left-radius: 50% 65%;
  border-bottom-right-radius: 50% 65%;
  border-top-left-radius: 50% 35%;
  border-top-right-radius: 50% 35%;
  bottom: 26%;
  left: 35%;
}
.mouth {
  width: 12%;
  height: 6%;
  bottom: 13%;
  left: 33%;
  border-radius: 50%;
  box-shadow: 0 -2px #260F02;
}
.mouth:before, .mouth:after {
  content: '';
  display: block;
  position: absolute;
  width: 60%;
  height: 100%;
  border-radius: 50%;
  bottom: 53%;
  border-bottom: 2px solid #260F02;
}
.mouth:before {
  right: 87%;
}
.mouth:after {
  left: 87%;
}
/*然后画前胸*/
.chest {
  height: 110%; 
  width: 130px;
  left: -30px;
  z-index: 1;
}
/*在画毛发*/
.fur {
  height: 80px;
  width: 80px;
  top: 0;
  border-radius: 50%;
  background: linear-gradient(to top, #EFE1AF, white 40%, white 50%, #EFE1AF 75%);
}
.fur:first-child {
  -webkit-animation: fur-center 10s 0.1s cubic-bezier(0.645, 0.045, 0.355, 1) both infinite;
          animation: fur-center 10s 0.1s cubic-bezier(0.645, 0.045, 0.355, 1) both infinite;
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
  -webkit-transform-style: none;
          transform-style: none;
  bottom: 8%;
}
.fur:first-child > .patch:before {
  -webkit-animation: fur-center-patch-left 10s 0s cubic-bezier(0.645, 0.045, 0.355, 1) both infinite;
          animation: fur-center-patch-left 10s 0s cubic-bezier(0.645, 0.045, 0.355, 1) both infinite;
  left: 25%;
  top: 0;
  -webkit-transform: rotate(65deg) skewX(15deg);
          transform: rotate(65deg) skewX(15deg);
  box-shadow: 2px 0 #BFB48C;
  background: linear-gradient(-45deg, #BFB48C, #EFE1AF 9%, transparent 20%);
  border-top-right-radius: 60%;
  border-bottom-right-radius: 8%;
}
.fur:first-child > .patch:after {
  -webkit-animation: fur-center-patch-right 10s 0.07s cubic-bezier(0.645, 0.045, 0.355, 1) both infinite;
          animation: fur-center-patch-right 10s 0.07s cubic-bezier(0.645, 0.045, 0.355, 1) both infinite;
  left: initial;
  right: 25%;
  top: 0;
  -webkit-transform: rotate(35deg) skewX(15deg);
          transform: rotate(35deg) skewX(15deg);
  box-shadow: 0 3px #BFB48C;
  background: linear-gradient(-37deg, #BFB48C, #EFE1AF 9%, transparent 20%);
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
  border-bottom-left-radius: 60%;
  border-bottom-right-radius: 8%;
}
.fur:nth-child(2) {
  left: -3px;
}
.fur:nth-child(3) {
  -webkit-animation: fur-right 10s 0.15s cubic-bezier(0.645, 0.045, 0.355, 1) both infinite;
          animation: fur-right 10s 0.15s cubic-bezier(0.645, 0.045, 0.355, 1) both infinite;
  right: -20px;
}
.fur > .patch:before, .fur > .patch:after {
  content: '';
  display: block;
  position: absolute;
  width: 100%;
  height: 100%;
  border-bottom-left-radius: 100%;
}
.fur > .patch:before {
  background: linear-gradient(-30deg, #BFB48C, #EFE1AF 6%, white 55%, transparent);
}
.fur > .patch:after {
  background: linear-gradient(-30deg, #BFB48C, #EFE1AF 6%, white 55%, transparent);
}
.fur:not(:first-child) > .patch {
  height: 35%;
  width: 35%;
  bottom: 10%;
  left: 30%;
}
.fur:not(:first-child) > .patch:before, .fur:not(:first-child) > .patch:after {
  -webkit-animation: fur-right-patch 10s 0s cubic-bezier(0.645, 0.045, 0.355, 1) both infinite;
          animation: fur-right-patch 10s 0s cubic-bezier(0.645, 0.045, 0.355, 1) both infinite;
  top: -15%;
  left: 110%;
  -webkit-transform-origin: top left;
          transform-origin: top left;
  box-shadow: 2px 0 #BFB48C;
  border-top-right-radius: 75%;
  border-bottom-right-radius: 10%;
}
.fur:not(:first-child) > .patch:before {
  left: 150%;
  top: -25%;
}
.fur:not(:first-child) > .patch:after {
  -webkit-animation-delay: 0.1s;
          animation-delay: 0.1s;
  left: 100%;
  top: 0%;
}
/*接着画脚*/
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
.leg:before, .leg:after {
  content: '';
  display: block;
  position: absolute;
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
.inner-leg:before {
  content: '';
  display: block;
  position: absolute;
  bottom: -10%;
  width: 105%;
  height: 50%;
  border-top-left-radius: 40% 40%;
  border-top-right-radius: 40% 40%;
  border-bottom-left-radius: 20%;
  border-bottom-right-radius: 20%;
  background-image: linear-gradient(to bottom, #C49152 0%, #C49152 50%, transparent 100%), 
  linear-gradient(to right, transparent 0%, transparent 25%, rgba(0, 0, 0, 0.5) 26%, 
  rgba(0, 0, 0, 0.5) 35%, transparent 36%, transparent 65%, rgba(0, 0, 0, 0.5) 66%, 
  rgba(0, 0, 0, 0.5) 75%, transparent 76%), linear-gradient(to top, #9D7442, #C49152, #cca069);
}
/*最后画小尾巴*/
.tail {
  height: 120px;
  width: 120px;
  z-index: -1;
}
.tail:before, .tail:after {
  content: '';
  display: block;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}
.tail:after {
  background: #C49152;
  border-radius: 50%;
  transform: rotate(-135deg);
}
.body > .tail {
  z-index: -2;
  right: -40px;
  top: -70px;
}
.body > .tail:after {
  background: linear-gradient(to bottom right, #9D7442, #9D7442 20%, #C49152, #C49152);
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
.tail.-end:after {
  background: #EFE1AF;
  background: linear-gradient(to bottom right, #EFE1AF, white);
  border-radius: initial;
  border-bottom-left-radius: 100% 50%;
  border-top-right-radius: 50% 100%;
  border-top-left-radius: 50%;
}
.tail.-end:before {
  content: '';
  display: block;
  position: absolute;
  background: #C49152;
  height: 40%;
  width: 40%;
  z-index: 1;
  border-radius: 50% 50% 0 0;
  top: initial;
  bottom: -15%;
  left: 30%;
  box-shadow: -20px -5px #C49152, 20px -5px #C49152;
}

`

!function(){
  function writecode(data){
    return new Promise((resolve)=>{
      let duration = 1
      let $styleTag = $('#styleTag')
      let $code = $('#code')
      let i = 0
      let timer 
      timer = setTimeout(function fn(){
        i = i+1
        if(i<=data.length){
          $styleTag.html(data.substring(0,i))
          $code.html(data.substring(0,i))
          $code.scrollTop($code[0].scrollHeight)
          timer = setTimeout(fn,duration)
        }else{
          resolve && resolve.call()
        }
      },duration)
    })
  }
  
  writecode(data)
}.call()

