webpackJsonp([6],{YOyO:function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=s("Dd8w"),a=s.n(r),c=s("2X+S"),o=s("8stH"),i=s("T452"),n=s("6Xyt"),h=s("NYxO"),l=s("vhoT"),u=s("XEAW"),f=s("qwAB"),v=s("pU8y"),y={mixins:[v.b,v.c],created:function(){this._getHotKey()},data:function(){return{hotKey:[]}},computed:a()({shortcut:function(){return this.hotKey.concat(this.searchHistory)}},Object(h.c)(["searchHistory"])),methods:a()({handlePlaylist:function(t){console.log(t.length);var e=t.length>0?"60px":"";this.$refs.shortcutWrapper.style.bottom=e,this.$refs.shortcut.refresh(),this.$refs.searchResult.style.bottom=e,this.$refs.suggest.refresh()},showConfirm:function(){this.$refs.confirm.show()},_getHotKey:function(){var t=this;Object(o.a)().then(function(e){e.code===i.c&&(console.log(e.data),t.hotKey=e.data.hotkey.slice(0,10))})}},Object(h.b)(["clearSearchHistory"])),watch:{query:function(t){var e=this;t||setTimeout(function(){e.$refs.shortcut.refresh()},20)}},components:{SearchBox:c.a,Suggest:n.a,SearchList:l.a,Confirm:u.a,Scroll:f.a}},d={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"search"},[s("div",{staticClass:"search-box-wrapper"},[s("search-box",{ref:"searchBox",on:{query:t.onQueryChange}})],1),t._v(" "),s("div",{directives:[{name:"show",rawName:"v-show",value:!t.query,expression:"!query"}],ref:"shortcutWrapper",staticClass:"shortcut-wrapper"},[s("scroll",{ref:"shortcut",staticClass:"shortcut",attrs:{refreshDelay:t.refreshDelay,data:t.shortcut}},[s("div",[s("div",{staticClass:"hot-key"},[s("h1",{staticClass:"title"},[t._v("热门搜索")]),t._v(" "),s("ul",t._l(t.hotKey,function(e){return s("li",{key:e.id,staticClass:"item",on:{click:function(s){t.addQuery(e.k)}}},[s("span",[t._v(t._s(e.k))])])}),0)]),t._v(" "),s("div",{directives:[{name:"show",rawName:"v-show",value:t.searchHistory.length,expression:"searchHistory.length"}],staticClass:"search-history"},[s("h1",{staticClass:"title"},[s("span",{staticClass:"text"},[t._v("搜索历史")]),t._v(" "),s("span",{staticClass:"clear",on:{click:t.showConfirm}},[s("i",{staticClass:"icon-clear"})])]),t._v(" "),s("search-list",{attrs:{searches:t.searchHistory},on:{select:t.addQuery,delete:t.deleteSearchHistory}})],1)])])],1),t._v(" "),s("div",{directives:[{name:"show",rawName:"v-show",value:t.query,expression:"query"}],ref:"searchResult",staticClass:"search-result"},[s("suggest",{ref:"suggest",attrs:{query:t.query},on:{select:t.saveSearch,listScroll:t.blurInput}})],1),t._v(" "),s("confirm",{ref:"confirm",attrs:{text:"清空所有搜索历史",confirmBtnText:"清空"},on:{confirm:t.clearSearchHistory}}),t._v(" "),s("router-view")],1)},staticRenderFns:[]};var m=s("VU/8")(y,d,!1,function(t){s("av2H")},"data-v-84664532",null);e.default=m.exports},av2H:function(t,e){}});
//# sourceMappingURL=6.f9972cb12ccf6c57c79d.js.map