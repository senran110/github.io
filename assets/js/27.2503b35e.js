(window.webpackJsonp=window.webpackJsonp||[]).push([[27],{392:function(t,n,e){"use strict";function a(){const t=["#e15b64","#f47e60","#f8b26a","#abbd81","#849b87","#e15b64","#f47e60","#f8b26a","#f26d6d","#67cc86","#fb9b5f","#3498db"];return t[Math.floor(Math.random()*t.length)]}e.d(n,"a",(function(){return a}))},398:function(t,n,e){},413:function(t,n,e){"use strict";e(398)},420:function(t,n,e){"use strict";e.r(n);var a=e(392),r={props:{currentTag:{type:String,default:""}},computed:{tags(){return[{name:"全部",path:"/tag/"},...this.$tags.list]}},methods:{tagClick(t){this.$emit("getCurrentTag",t)},getOneColor:a.a}},c=(e(413),e(2)),s=Object(c.a)(r,(function(){var t=this,n=t._self._c;return n("div",{staticClass:"tags"},t._l(t.tags,(function(e,a){return n("span",{key:a,class:{active:e.name==t.currentTag},style:{backgroundColor:t.getOneColor()},on:{click:function(n){return t.tagClick(e)}}},[t._v(t._s(e.name))])})),0)}),[],!1,null,"36b9f66a",null);n.default=s.exports}}]);