// var Prism = require('prismjs')

var data1 = `
  /* 
 * 面试官你好，我是XXX
 * 只用文字作做我介绍太单调了
 * 我就用代码来介绍吧
 * 首先准备一些样式
 */
{
  transition: all 1s;
}
html{
  background: #eee;
}
#code{
  border: 1px solid #aaa;
  padding: 16px;
}
/* 我需要一点代码高亮 */
.token.selector{ color: #690; }
.token.property{ color: #905; }
/* 加一个呼吸效果 */
#code{
  animation: breath 0.5s infinite alternate-reverse;
}
/* 现在正式开始 */
/* 我需要一张白纸 */
#code-wrapper{
  width: 50%; left: 0; position: fixed; 
  height: 100%;
}
#paper > .content {
 display: block;
}
/* 于是我就可以在白纸上写字了，请看右边 */

`;

var data2 = `
/* 接下来用一个优秀的库 marked.js
 * 把 Markdown 变成 HTML
 */
`;

var md = `
# 自我介绍
我叫 XXX
1990 年 1 月出生
XXX 学校毕业
自学前端半年
希望应聘前端开发岗位
# 技能介绍
熟悉 JavaScript CSS
# 项目介绍
1. XXX 轮播
2. XXX 简历
3. XXX 画板
# 联系方式
- QQ xxxxxxxx
- Email xxxxxxxx
- 手机 xxxxxxx
# 联系方式
- QQ xxxxxxxx
- Email xxxxxxxx
- 手机 xxxxxxx
# 联系方式
- QQ xxxxxxxx
- Email xxxxxxxx
- 手机 xxxxxxx
# 联系方式
- QQ xxxxxxxx
- Email xxxxxxxx
- 手机 xxxxxxx
# 联系方式
- QQ xxxxxxxx
- Email xxxxxxxx
- 手机 xxxxxxx
# 联系方式
- QQ xxxxxxxx
- Email xxxxxxxx
- 手机 xxxxxxx
# 联系方式
- QQ xxxxxxxx
- Email xxxxxxxx
- 手机 xxxxxxx
# 联系方式
- QQ xxxxxxxx
- Email xxxxxxxx
- 手机 xxxxxxx
`;
let css3 = `
/*
 * 这就是我的会动的简历
 * 谢谢观看
 */
`;

function write(data, id, type, highlight) {
  return new Promise(resolve => {
    console.log("write to " + id);
    var i = 0;
    id = $(id);
    if (highlight) {
      let timer = setInterval(() => {
        id.html(
          Prism.highlight(data.substr(0, i), window["Prism"].languages[type])
        );
        id.scrollTop(id[0].scrollHeight);
        i = i + 1;
        if (i > data.length) {
          clearInterval(timer);
          resolve.call();
        }
      }, 10);
    } else {
      let timer = setInterval(() => {
        id.html(data.substr(0, i));
        id.scrollTop(id[0].scrollHeight);
        i = i + 1;
        if (i > data.length) {
          clearInterval(timer);
          resolve.call();
        }
      }, 10);
    }

    // function write_highlight(code){
    //   id.html(Prism.highlight(code,window['Prism'].languages[type]))
    // }

    // function write_plain(code){
    //   id.html(code)
    // }

    // function settime(data,fun,id,resolve){
    //   var i = 0
    //   let timer = setInterval(()=>{
    //     fun(data.substr(0,i))
    //     id.scrollTop(id[0].scrollHeight)
    //     i = i+1
    //     if(i>data.length){
    //       clearInterval(timer)
    //       resolve.call()
    //     }
    //   },10)
    // }
  });
  // return new Promise(resolve)
}

function createPaper() {
  return new Promise(resolve => {
    var paper = document.createElement("div");
    paper.id = "paper";
    var content = document.createElement("pre");
    content.className = "content";
    content.id = "content";
    paper.appendChild(content);
    document.body.appendChild(paper);
    resolve.call();
  });
}

write(data1, "#code", "css", true);
write(data1, "#style_m", "css", "")
  .then(createPaper)
  .then(write(md, "#content", "markup", true));
// var write_css = write(data1,"#style_m")
// write(data1,"#code",'css',true)
// write(data1,"#style_m",'css','',()=>{
//   createPaper(()=>{
//     write(md,"#content",'markup',true)
//   })
// })
