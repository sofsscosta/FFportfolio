(window.webpackJsonp=window.webpackJsonp||[]).push([[40,4,6,9,12],{256:function(t,e,n){var content=n(263);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(80).default)("797231fa",content,!0,{sourceMap:!1})},257:function(t,e,n){"use strict";n.r(e);var r=n(3).a.extend({props:{tag:{type:String,required:!0,default:""}}}),l=n(11),component=Object(l.a)(r,(function(){var t=this,e=t.$createElement;return(t._self._c||e)("div",{staticClass:"bg-gray-200 text-center rounded-full p-1 px-2 text-gray-500 text-xs md:text-base"},[t._v("\n    "+t._s(t.tag)+"\n")])}),[],!1,null,null,null);e.default=component.exports},258:function(t,e,n){"use strict";n.r(e);n(47),n(138);var r=n(3),l=n(42),o=r.a.extend({props:{imageSource:{type:String,default:""},section:{type:String,default:""}},data:function(){return{isHovered:!1}},computed:{getHeight:function(){return window.innerHeight-Object(l.a)(l.b.split("rem")[0])}},methods:{toggleHover:function(t){this.isHovered=t}}}),c=(n(262),n(11)),component=Object(c.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"w-full relative",style:{height:t.getHeight+"px"},on:{mouseenter:function(e){return t.toggleHover(!0)},mouseleave:function(e){return t.toggleHover(!1)}}},[n("transition",{attrs:{name:"fade"}},[t.isHovered?n("div",{staticClass:"absolute h-full w-full",style:{backgroundColor:"rgba(48, 48, 48, 0.384)"}},[n("p",{staticClass:"text-white text-7xl md:text-8xl font-thin w-full h-full text-center flex justify-center items-center"},[t._v(t._s(t.section.toUpperCase()))])]):t._e()]),t._v(" "),n("div",{staticClass:"md:hidden absolute h-full w-full",style:{backgroundColor:"rgba(48, 48, 48, 0.384)"}},[n("p",{staticClass:"text-white text-7xl md:text-8xl font-thin w-full h-full text-center flex justify-center items-center"},[t._v(t._s(t.section.toUpperCase()))])]),t._v(" "),n("img",{staticClass:"w-full object-cover",style:{height:t.getHeight+"px"},attrs:{src:t.imageSource}})],1)}),[],!1,null,"25d7c6f7",null);e.default=component.exports},261:function(t,e,n){var content=n(268);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(80).default)("579e7b5a",content,!0,{sourceMap:!1})},262:function(t,e,n){"use strict";n(256)},263:function(t,e,n){var r=n(79)((function(i){return i[1]}));r.push([t.i,"/*purgecss start ignore*/\n.fade-enter-active[data-v-25d7c6f7],.fade-leave-active[data-v-25d7c6f7]{\n  transition:opacity .5s\n}\n.fade-enter[data-v-25d7c6f7],.fade-leave-to[data-v-25d7c6f7]{\n  opacity:0\n}\n\n/*purgecss end ignore*/",""]),r.locals={},t.exports=r},264:function(t,e,n){"use strict";n.r(e);var r=n(297),l=n(295),o=n(296);n(277);r.a.use([l.a,o.a]);var c={props:{slides:[]},mounted:function(){new r.a(".swiper-container",{loop:!1,pagination:{el:".swiper-pagination"},navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"},autoHeight:!0})}},d=(n(267),n(11)),component=Object(d.a)(c,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"swiper-container"},[n("div",{staticClass:"swiper-wrapper"},[n("div",{staticClass:"swiper-slide"},[n("img",{attrs:{src:t.slides[0],alt:""}})]),t._v(" "),t.slides[1]?n("div",{staticClass:"swiper-slide"},[n("img",{attrs:{src:t.slides[1],alt:""}})]):t._e(),t._v(" "),t.slides[2]?n("div",{staticClass:"swiper-slide"},[n("img",{attrs:{src:t.slides[2],alt:""}})]):t._e()]),t._v(" "),n("div",{staticClass:"swiper-button-prev"}),t._v(" "),n("div",{staticClass:"swiper-button-next"})])}),[],!1,null,"1d03b9d6",null);e.default=component.exports},267:function(t,e,n){"use strict";n(261)},268:function(t,e,n){var r=n(79),l=n(278),o=n(269),c=r((function(i){return i[1]})),d=l(o);c.push([t.i,"/*purgecss start ignore*/\n.swiper-container[data-v-1d03b9d6]{\n  width:600px;\n  height:100%\n}\n.swiper-button-next[data-v-1d03b9d6]{\n  color:#949494;\n  background-image:url("+d+");\n  background-size:cover;\n  width:30px;\n  height:30px\n}\n.swiper-button-next[data-v-1d03b9d6]:after{\n  display:none\n}\n.swiper-button-prev[data-v-1d03b9d6]{\n  color:#949494;\n  background:url("+d+");\n  transform:rotate(180deg);\n  background-size:cover;\n  width:30px;\n  height:30px\n}\n.swiper-button-prev[data-v-1d03b9d6]:after{\n  display:none\n}\n\n/*purgecss end ignore*/",""]),c.locals={},t.exports=c},269:function(t,e,n){t.exports=n.p+"img/chevron-right.3a0c6f8.png"},270:function(t,e,n){"use strict";n.r(e);n(49),n(36),n(48),n(64),n(37),n(65);var r=n(33),l=n(3),o=n(257),c=n(264);function d(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}var f=l.a.extend({components:{Tag:o.default,Slider:c.default},props:{project:{required:!0,default:{id:0,date:"",description:"",images:[],images_preview:[],slug:"",subtitle:"",title:"",tags:[]}}},data:function(){return function(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?d(Object(source),!0).forEach((function(e){Object(r.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):d(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}({},this.project)}}),v=f,m=n(11),component=Object(m.a)(v,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"mb-20 md:mb-28 overflow-x-hidden"},[n("nuxt-link",{staticClass:"w-full h-full",attrs:{to:t.slug}},[n("header",{staticClass:"flex flex-wrap flex-col md:flex-row justify-between font-thin"},[n("div",{staticClass:"mb-2 md:mb-0"},[n("h2",{staticClass:"text-3xl mb-1 md:mb-3"},[t._v("\n          "+t._s(t.title)+"\n        ")]),t._v(" "),t.subtitle?n("p",{staticClass:"text-lg md:text-base"},[t._v("\n          "+t._s(t.subtitle)+"\n        ")]):t._e()]),t._v(" "),n("div",{staticClass:"flex flex-col md:items-end justify-end"},[t.date?n("p",{staticClass:"mt-2 md:mt-0 mb-2 md:mb-3 text-xs md_text-base"},[t._v("\n          "+t._s(t.date)+"\n        ")]):t._e(),t._v(" "),t.tags&&t.tags.length?n("div",{staticClass:"flex flex-row"},t._l(t.tags,(function(t,e){return n("Tag",{key:e,staticClass:"mr-2 md:mr-0 md:ml-2",attrs:{tag:t}})})),1):t._e()])]),t._v(" "),n("section",{staticClass:"flex flex-row mt-5 md:mt-10 justify-between"},[t._l(t.images_preview,(function(image,t){return n("img",{key:t,staticClass:"hidden md:block w-1/3 mr-2 object-cover",attrs:{src:image}})})),t._v(" "),n("Slider",{staticClass:"md:hidden",attrs:{slides:t.images_preview}})],2)])],1)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{Slider:n(264).default})},300:function(t,e,n){"use strict";n.r(e);var r=n(5),l=(n(22),n(3)),o=n(258),c=n(270),d=l.a.extend({components:{Banner:o.default,ProjectItem:c.default},data:function(){return{bannerImage:"",projects:[]}},fetch:function(t){return Object(r.a)(regeneratorRuntime.mark((function e(){var n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n=t.store,e.prev=1,e.t0=!n.getters.getBanner("product").bannerUrl,!e.t0){e.next=6;break}return e.next=6,n.dispatch("getBanner","product");case 6:if(e.t1=!n.state.product.projects.length,!e.t1){e.next=10;break}return e.next=10,n.dispatch("getSectionItems","product");case 10:e.next=15;break;case 12:e.prev=12,e.t2=e.catch(1),console.error(e.t2);case 15:case"end":return e.stop()}}),e,null,[[1,12]])})))()},created:function(){this.bannerImage=this.$store.getters.getBanner("product").bannerUrl,this.projects=this.$store.state.product.projects}}),f=n(11),component=Object(f.a)(d,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("Banner",{attrs:{"image-source":t.bannerImage,section:"product"}}),t._v(" "),n("div",{staticClass:"m-4 mt-20 md:mt-28 md:m-28"},t._l(t.projects,(function(t){return n("ProjectItem",{key:t.id,attrs:{project:t}})})),1)],1)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{Banner:n(258).default,ProjectItem:n(270).default})}}]);