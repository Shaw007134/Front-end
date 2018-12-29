

function carousel(option, interval) {
  var $ = function(ele) {
      return document.getElementById(ele);
  };
  // 容器参数
  var slides_container = $(option.containerID);
  var slides = $(option.slides),
    slides_buttons = $(option.buttons),
    slides_prev = $(option.prev),
    slides_next = $(option.next);
  // 动画参数
  var animated = false,
      index = 1;
  // 图片参数
  
  var img = slides.getElementsByTagName('img'),
      len = img.length;
  // width = parseInt((img[0].width)),
  // height = parseInt((img[0].height));
  var width,
      height;
  // 初始化容器大小

  // function init() {
  //   slides_container.style.width = width + 'px';
  //   slides_container.style.height = height + 'px';
  //     slides.style.width = width * len * 2 + 'px';
  //     slides.style.height = height + 'px';
  // }
  // init();
  // 或者根据最外层容器实现自适应的设置图片大小
  function responseInit() {
    width = slides_container.offsetWidth;
    height = parseInt((img[0].height));
    // 宽度随视窗自适应
    slides.style.left = -width + 'px';
    slides.style.width = width * len + 'px';
    // 高度随图片自适应
    slides_container.style.height = height + 'px';
    slides.style.height = height + 'px';
    for (var i = 0; i < len; i++) {
        img[i].style.width = parseInt(width) + 'px';
    }
  }
  responseInit();
  // 实际图片数量
  var size = parseInt(len - 2);
  // 创建dom片段
  var btns = document.createDocumentFragment();
  // 动态生成焦点按钮
  for (var i = 0; i < size; i++) {
    var span = document.createElement('span');
    span.setAttribute('index', (i + 1));
    if (i == 0) {
        span.className = 'on';
    }
    btns.appendChild(span);
  }
  // 清理焦点按钮
  slides_buttons.innerHTML = '';
  slides_buttons.appendChild(btns);
    // 上一页
  slides_prev.onclick = function() {
  // 焦点跟随
  if (!animated) {
      if (index == 1) {
          // 当焦点位于第一个span时，跳转至最后一个
          index = size;
      } else {
          index -= 1;
      }
      showButtons();
      animate(width);
  }
};

  // 下一页
slides_next.onclick = function() {
    if (!animated) {
        if (index == size) {
            // 当焦点位于最后一个span时，跳转至第1个
            index = 1;
        } else {
            index += 1;
        }
        showButtons();
        animate(-width);
    }
  };

  // 封装一个动画函数
  function animate(offset) {
    // 处于动画状态
    animated = true;
    var newLeft = parseInt(slides.style.left) + offset;
    // 做到边缘时重新无过度实行定位，达到循环无缝的视觉效果
    function resetImg(index) {
        animated = true;
        slides.style.left = -(width * index) + 'px';
        slides.style.transition = 'all 0s';
        animated = false;
    }
    function go() {
      animated = false;
      // 重新设置过度属性
      console.log(slides.style.left)
      console.log(newLeft)
      console.log(offset)
      slides.style.transition = 'all 1.5s';
      slides.style.left = newLeft + 'px';
      // 左边缘
      if (newLeft > -width) {
          // 先有过度地完成动画动作 然后再无过度的重新定位，时间间隔为刚好等于动画transition时间
          setTimeout(function() {
              resetImg(size);
          }, 1500);
      }
      // 右边缘
      if (newLeft <= -(width * (size + 1))) {
          setTimeout(function() {
              resetImg(1);
          }, 1500);
      }
    }
    go();
  }
  // 焦点跟随激活
  var btn =slides_buttons.getElementsByTagName('span');

  function showButtons() {
    for (var i = 0; i < btn.length; i++) {
        btn[i].className = '';
    }
    btn[index - 1].className = 'on';
  }

  // 点击焦点切换
  for (var i = 0; i < btn.length; i++) {
    btn[i].onclick = function() {
      // 点击当前激活项不做动画操作
      if (this.className == 'on') {
          return;
      }
      // 点击焦点的索引
      var clickIndex = parseInt(this.getAttribute('index'));
      // 偏移量
      var offset = -width * (clickIndex - index);
      if (!animated) {
          animate(offset);
      }
      // 修改当前激活项
      index = clickIndex;
      // 焦点跟随
      showButtons();
    };
  }

  // 自动循环播放
  function play() {
    option.timer = setInterval(function() {
      // 模拟点击事件
    slides_next.onclick();
    }, interval);
  }

  // 停止播放
  function stop() {
    clearTimeout(option.timer);
    console.log(animated)
  }
  // 执行自动播放
  play();
  // 鼠标事件
  slides_container.onmouseover = stop;

  slides_container.onmouseout = play;

  window.addEventListener('resize', responseInit, false);
}