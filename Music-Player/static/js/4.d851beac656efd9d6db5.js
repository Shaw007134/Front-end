webpackJsonp([4],{BRgg:function(t,n,e){"use strict";n.a=function(){var t=i()({},o.m,{platform:"h5",needNewCode:1});return Object(a.a)(o.h,t,o.n)},n.b=function(t){var n=i()({},o.m,{topid:t,platform:"h5",needNewCode:1,page:"detail",type:"top",tpl:3});return Object(a.a)(o.d,n,o.n)};var s=e("woOf"),i=e.n(s),a=e("eGN8"),o=e("T452")},ebXY:function(t,n){},s3x3:function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var s=e("Dd8w"),i=e.n(s),a=e("kvay"),o=e("NYxO"),r=e("BRgg"),c=e("T452"),u=e("dQLd"),d={data:function(){return{songs:[],desc:"",rank:!0}},computed:i()({title:function(){return this.topList.topTitle},bgStyle:function(){if(this.songs.length)return"background-image:url("+this.songs[0].image+")"},bgImage:function(){return this.topList.picUrl},listennum:function(){var t=this.topList.listenCount;try{return t.toString().length>5?"播放量: "+(t/1e4|0)+"万次":"播放量: "+t+"次"}catch(t){return"播放量: 0次"}}},Object(o.c)(["topList"])),created:function(){this._getDetail()},methods:{_getDetail:function(){var t=this;this.topList.id?Object(r.b)(this.topList.id).then(function(n){n.code===c.c&&(t.desc=n.topinfo.info,t.songs=t._normalizeSong(n.songlist))}):this.$router.push("/rank")},_normalizeSong:function(t){var n=[];return t.forEach(function(t){var e=t.data;e.songid&&e.albumid&&n.push(Object(u.a)(e))}),n}},components:{MusicList:a.a}},l={render:function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("transition",{attrs:{name:"slide"}},[e("music-list",{attrs:{rank:t.rank,bgStyle:t.bgStyle,songs:t.songs}},[e("div",{staticClass:"avatar"},[e("img",{attrs:{src:t.bgImage}})]),t._v(" "),e("div",{staticClass:"info"},[e("h1",{staticClass:"name",domProps:{innerHTML:t._s(t.title)}}),t._v(" "),e("div",{staticClass:"fans"},[t._v(t._s(t.listennum))]),t._v(" "),e("div",{staticClass:"desc",domProps:{innerHTML:t._s(t.desc)}})])])],1)},staticRenderFns:[]};var g=e("VU/8")(d,l,!1,function(t){e("ebXY")},"data-v-88ee9fde",null);n.default=g.exports}});
//# sourceMappingURL=4.d851beac656efd9d6db5.js.map