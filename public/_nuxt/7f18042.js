(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{272:function(e,t,r){"use strict";r.r(t);var n=r(5),o=(r(22),r(47),r(138),r(3)),c=r(14),l=r(15),v=o.a.extend({layout:"admin",data:function(){return{projects:[],section:""}},fetch:function(){var e=this;return Object(n.a)(regeneratorRuntime.mark((function t(){var r,section;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return(section=null===(r=e.$route.path.split("/only-ferran-knows-221/")[1])||void 0===r?void 0:r.split("/")[0])||e.$router.push("/only-ferran-knows-221/error"),e.section=section,t.next=5,e.$store.dispatch("getSectionItems",section);case 5:e.projects=e.$store.state[section].projects;case 6:case"end":return t.stop()}}),t)})))()},created:function(){var e,section=null===(e=this.$route.path.split("/only-ferran-knows-221/")[1])||void 0===e?void 0:e.split("/")[0];section||this.$router.push("/only-ferran-knows-221/error"),this.section=section,this.projects=this.$store.state[this.section].projects},methods:{handleDelete:function(title,e){var t=this;return Object(n.a)(regeneratorRuntime.mark((function r(){return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:if(r.prev=0,t.$store.dispatch("feedback",l.a.SUBMITTING),window.confirm("Are you sure you want to delete ".concat(title,"?"))){r.next=5;break}return r.abrupt("return");case 5:return r.next=7,c.default.firestore().collection(t.section).doc(e).delete();case 7:return r.next=9,t.$store.dispatch("getSectionItems",t.section);case 9:t.projects=t.$store.state[t.section].projects,t.$store.dispatch("feedback",l.a.SUCCESS),r.next=16;break;case 13:r.prev=13,r.t0=r.catch(0),t.$store.dispatch("feedback",l.a.ERROR);case 16:case"end":return r.stop()}}),r,null,[[0,13]])})))()},changeProjectOrder:function(e,t){}}}),d=r(11),component=Object(d.a)(v,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"font-light text-gray-500"},[r("h2",{staticClass:"text-3xl mt-14 mb-3 font-thin"},[e._v("\n        "+e._s(e.section.toUpperCase())+"\n    ")]),e._v(" "),r("h2",{staticClass:"font-light mb-10"},[e._v("\n        Here you can create, edit or delete projects for the "+e._s(e.section)+" section. Click on each item to see its details.\n    ")]),e._v(" "),r("client-only",[e.projects.length?r("ul",{key:e.projects&&e.projects.length,staticClass:"mb-20 w-full px-10"},[r("div",{staticClass:"flex flex-row justify-between text-lg"},[r("p",[e._v("Title")]),e._v(" "),r("p",[e._v("Date")]),e._v(" "),r("p",[e._v("Image Preview")]),e._v(" "),r("p",[e._v("Actions")])]),e._v(" "),r("hr"),e._v(" "),e._l(e.projects,(function(t,n){return r("li",{key:n},[r("div",{staticClass:"flex flex-row justify-between items-center"},[r("nuxt-link",{attrs:{to:"/only-ferran-knows-221/"+e.section+"/"+t.id}},[r("p",[e._v(e._s(t.title))])]),e._v(" "),r("p",[e._v(e._s(t.date))]),e._v(" "),r("nuxt-link",{attrs:{to:"/only-ferran-knows-221/"+e.section+"/"+t.id}},[t.image_preview||t.images_preview&&t.images_preview.length?r("img",{staticClass:"my-2",attrs:{src:t.image_preview||t.images_preview[0],width:"200",alt:""}}):e._e()]),e._v(" "),r("div",[r("button",{on:{click:function(r){return r.preventDefault(),e.changeProjectOrder("up",t.id)}}}),e._v(" "),r("button",{on:{click:function(r){return r.preventDefault(),e.changeProjectOrder("down",t.id)}}}),e._v(" "),r("nuxt-link",{attrs:{to:"/only-ferran-knows-221/reviews/create"+t.slug}},[e._v("Add Review")]),e._v(" "),r("button",{on:{click:function(r){return r.target!==r.currentTarget?null:e.handleDelete(t.title,t.id)}}},[e._v("Delete")])],1)],1),e._v(" "),r("hr")])}))],2):e._e()]),e._v(" "),r("nuxt-link",{staticClass:"w-0",attrs:{to:{path:"video"===e.section?"/only-ferran-knows-221/create-video-project":"/only-ferran-knows-221/create-project?section="+e.section}}},[r("p",{staticClass:"bg-gray-400 rounded-full px-3 py-2 text-white w-min min-w-max"},[e._v("Create Project")])])],1)}),[],!1,null,null,null);t.default=component.exports}}]);