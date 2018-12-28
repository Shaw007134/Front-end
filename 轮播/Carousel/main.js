let $buttons = $('#buttonWrapper li')
let $slides = $('#slides')
let $images = $slides.children('img')
let current = 0
let width = 920

makeFakeSlides()

$slides.css({transform:'translateX(-width)'})

bindEvents()
$(next).on('click',function(){
  goToSlide(current+1)
})
$(previous).on('click',function(){
  goToSlide(current-1)
})

let timer = setInterval(function(){
  goToSlide(current+1)
},2000)

$('.container').on('mouseenter',function(){
  window.clearInterval(timer)
  console.log('mouse enter')
}).on('mouseleave',function(){
  console.log('mouse leave')
  timer = setInterval(function(){
  goToSlide(current+1)
},2000)
})


document.addEventListener('visibilitychange',function(){
  if(document.hidden){
    console.log('hidden')
    window.clearInterval(timer)
  }else{
    console.log('show')
    timer = setInterval(function(){
      goToSlide(current+1)
    },2000)
  }
})


function bindEvents(){
  $('#buttonWrapper').on('click','button',function(e){
    let $button = $(e.currentTarget)
    let index = $button.index()
    goToSlide(index)
  })
}

function active(index){
  $buttons.eq(index).addClass('active').siblings().removeClass('active')
}

function goToSlide(index){
  if(index > $buttons.length-1){
    index = 0
  }else if(index < 0){
    index = $buttons.length-1
  }
  if(current === $buttons.length-1 && index === 0){
    $slides.css({transform:`translateX(${-($buttons.length+1)*width}px)`})
      .one('transitionend',function(){
        $slides.hide()
        $slides.offset()
        $slides.css({transform:`translateX(${-(index+1)*width}px)`}).show()
      })
    }else if(current === 0 && index === $buttons.length-1){
      $slides.css({transform:`translateX(0px)`})
        .one(`transitionend`,function(){
          $slides.hide().offset()
          $slides.css({transform:`translateX(${-(index+1)*width}px`}).show()
        })
      }else{
        $slides.css({transform:`translateX(${-(index+1)*width}px)`})
      }
      current = index
      active(index)
}

function makeFakeSlides(){
  let $firstCopy = $images.eq(0).clone(true)
  let $lastCopy = $images.eq($images.length-1).clone(true)
  $slides.append($firstCopy)
  $slides.prepend($lastCopy)
}