(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{256:function(t,e,n){var content=n(263);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(80).default)("797231fa",content,!0,{sourceMap:!1})},258:function(t,e,n){"use strict";n.r(e);n(47),n(138);var r=n(3),l=n(42),o=r.a.extend({props:{imageSource:{type:String,default:""},section:{type:String,default:""}},data:function(){return{isHovered:!1}},computed:{getHeight:function(){return window.innerHeight-Object(l.a)(l.b.split("rem")[0])}},methods:{toggleHover:function(t){this.isHovered=t}}}),c=(n(262),n(11)),component=Object(c.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"w-full relative",style:{height:t.getHeight+"px"},on:{mouseenter:function(e){return t.toggleHover(!0)},mouseleave:function(e){return t.toggleHover(!1)}}},[n("transition",{attrs:{name:"fade"}},[t.isHovered?n("div",{staticClass:"absolute h-full w-full",style:{backgroundColor:"rgba(48, 48, 48, 0.384)"}},[n("p",{staticClass:"text-white text-7xl md:text-8xl font-thin w-full h-full text-center flex justify-center items-center"},[t._v(t._s(t.section.toUpperCase()))])]):t._e()]),t._v(" "),n("div",{staticClass:"md:hidden absolute h-full w-full",style:{backgroundColor:"rgba(48, 48, 48, 0.384)"}},[n("p",{staticClass:"text-white text-7xl md:text-8xl font-thin w-full h-full text-center flex justify-center items-center"},[t._v(t._s(t.section.toUpperCase()))])]),t._v(" "),n("img",{staticClass:"w-full object-cover",style:{height:t.getHeight+"px"},attrs:{src:t.imageSource}})],1)}),[],!1,null,"25d7c6f7",null);e.default=component.exports},262:function(t,e,n){"use strict";n(256)},263:function(t,e,n){var r=n(79)((function(i){return i[1]}));r.push([t.i,"/*purgecss start ignore*/\n.fade-enter-active[data-v-25d7c6f7],.fade-leave-active[data-v-25d7c6f7]{\n  transition:opacity .5s\n}\n.fade-enter[data-v-25d7c6f7],.fade-leave-to[data-v-25d7c6f7]{\n  opacity:0\n}\n\n/*purgecss end ignore*/",""]),r.locals={},t.exports=r}}]);