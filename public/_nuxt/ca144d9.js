(window.webpackJsonp=window.webpackJsonp||[]).push([[28,19],{272:function(e,t,n){"use strict";n.r(t);var r=n(5),o=(n(22),n(47),n(138),n(3)),c=n(14),l=n(15),d=o.a.extend({layout:"admin",data:function(){return{projects:[],section:""}},fetch:function(){var e=this;return Object(r.a)(regeneratorRuntime.mark((function t(){var n,section;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return(section=null===(n=e.$route.path.split("/only-ferran-knows-221/")[1])||void 0===n?void 0:n.split("/")[0])||e.$router.push("/only-ferran-knows-221/error"),e.section=section,t.next=5,e.$store.dispatch("getSectionItems",section);case 5:e.projects=e.$store.state[section].projects;case 6:case"end":return t.stop()}}),t)})))()},created:function(){var e,section=null===(e=this.$route.path.split("/only-ferran-knows-221/")[1])||void 0===e?void 0:e.split("/")[0];section||this.$router.push("/only-ferran-knows-221/error"),this.section=section,this.projects=this.$store.state[this.section].projects},methods:{handleDelete:function(title,e){var t=this;return Object(r.a)(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(n.prev=0,t.$store.dispatch("feedback",l.a.SUBMITTING),window.confirm("Are you sure you want to delete ".concat(title,"?"))){n.next=5;break}return n.abrupt("return");case 5:return n.next=7,c.default.firestore().collection(t.section).doc(e).delete();case 7:return n.next=9,t.$store.dispatch("getSectionItems",t.section);case 9:t.projects=t.$store.state[t.section].projects,t.$store.dispatch("feedback",l.a.SUCCESS),n.next=16;break;case 13:n.prev=13,n.t0=n.catch(0),t.$store.dispatch("feedback",l.a.ERROR);case 16:case"end":return n.stop()}}),n,null,[[0,13]])})))()},changeProjectOrder:function(e,t){}}}),v=n(11),component=Object(v.a)(d,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"font-light text-gray-500"},[n("h2",{staticClass:"text-3xl mt-14 mb-3 font-thin"},[e._v("\n        "+e._s(e.section.toUpperCase())+"\n    ")]),e._v(" "),n("h2",{staticClass:"font-light mb-10"},[e._v("\n        Here you can create, edit or delete projects for the "+e._s(e.section)+" section. Click on each item to see its details.\n    ")]),e._v(" "),n("client-only",[e.projects.length?n("ul",{key:e.projects&&e.projects.length,staticClass:"mb-20 w-full px-10"},[n("div",{staticClass:"flex flex-row justify-between text-lg"},[n("p",[e._v("Title")]),e._v(" "),n("p",[e._v("Date")]),e._v(" "),n("p",[e._v("Image Preview")]),e._v(" "),n("p",[e._v("Actions")])]),e._v(" "),n("hr"),e._v(" "),e._l(e.projects,(function(t,r){return n("li",{key:r},[n("div",{staticClass:"flex flex-row justify-between items-center"},[n("nuxt-link",{attrs:{to:"/only-ferran-knows-221/"+e.section+"/"+t.id}},[n("p",[e._v(e._s(t.title))])]),e._v(" "),n("p",[e._v(e._s(t.date))]),e._v(" "),n("nuxt-link",{attrs:{to:"/only-ferran-knows-221/"+e.section+"/"+t.id}},[t.image_preview||t.images_preview&&t.images_preview.length?n("img",{staticClass:"my-2",attrs:{src:t.image_preview||t.images_preview[0],width:"200",alt:""}}):e._e()]),e._v(" "),n("div",[n("button",{on:{click:function(n){return n.preventDefault(),e.changeProjectOrder("up",t.id)}}}),e._v(" "),n("button",{on:{click:function(n){return n.preventDefault(),e.changeProjectOrder("down",t.id)}}}),e._v(" "),n("nuxt-link",{attrs:{to:"/only-ferran-knows-221/reviews/create"+t.slug}},[e._v("Add Review")]),e._v(" "),n("button",{on:{click:function(n){return n.target!==n.currentTarget?null:e.handleDelete(t.title,t.id)}}},[e._v("Delete")])],1)],1),e._v(" "),n("hr")])}))],2):e._e()]),e._v(" "),n("nuxt-link",{staticClass:"w-0",attrs:{to:{path:"video"===e.section?"/only-ferran-knows-221/create-video-project":"/only-ferran-knows-221/create-project?section="+e.section}}},[n("p",{staticClass:"bg-gray-400 rounded-full px-3 py-2 text-white w-min min-w-max"},[e._v("Create Project")])])],1)}),[],!1,null,null,null);t.default=component.exports},312:function(e,t,n){"use strict";n.r(t);var r=n(272).default,o=n(11),component=Object(o.a)(r,undefined,undefined,!1,null,null,null);t.default=component.exports}}]);