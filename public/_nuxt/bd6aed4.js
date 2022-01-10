(window.webpackJsonp=window.webpackJsonp||[]).push([[27,20],{275:function(e,t,r){"use strict";r.r(t);r(49),r(64),r(37),r(65);var n=r(33),o=r(5),l=(r(22),r(47),r(138),r(53),r(36),r(52),r(16),r(25),r(26),r(81),r(41),r(48),r(140),r(66),r(3)),c=r(14),d=(r(139),r(265),r(15));function m(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,r)}return t}function f(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?m(Object(source),!0).forEach((function(t){Object(n.a)(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):m(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}var v=l.a.extend({layout:"admin",data:function(){return{project:{date:"",description:"",images:[],images_preview:[],slug:"",subtitle:"",title:"",tags:[],id:""},isLoading:!1,section:""}},created:function(){var e=this;return Object(o.a)(regeneratorRuntime.mark((function t(){var r,n,o,section,l,m,v,h,w,j,y;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,(section=null===(r=e.$route.path.split("/only-ferran-knows-221/")[1])||void 0===r?void 0:r.split("/")[0])||e.$router.push("/only-ferran-knows-221/error"),e.section=section,l=e.$route.params.slug,t.next=7,c.default.firestore().collection(e.section).doc(l).get();case 7:if((m=t.sent)||e.$router.push("/only-ferran-knows-221/error"),v=m.id,h=m.data()){t.next=13;break}return t.abrupt("return");case 13:w=null===(n=h.images)||void 0===n?void 0:n.map((function(e){return{url:e}})),j=null===(o=h.images_preview)||void 0===o?void 0:o.map((function(e){return{url:e}})),y=h.tags&&h.tags.length&&h.tags.map((function(e){return{tag:e}})),e.project=f(f({},h),{},{images:w,images_preview:j,tags:y,id:v}),t.next=22;break;case 19:t.prev=19,t.t0=t.catch(0),e.$store.dispatch("feedback",d.a.ERROR);case 22:case"end":return t.stop()}}),t,null,[[0,19]])})))()},methods:{updateProject:function(e){var t=this;return Object(o.a)(regeneratorRuntime.mark((function r(){var n,o,l,m;return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,t.$store.dispatch("feedback",d.a.SUBMITTING),t.isLoading=!0,o={date:e.date,description:e.description,subtitle:e.subtitle,title:e.title,tags:(null===(n=e.tags)||void 0===n?void 0:n.length)?t.processTags(e.tags):[],slug:t.project.slug},r.next=6,t.uploadImages(e.images_preview);case 6:return l=r.sent,r.next=9,t.uploadImages(e.images);case 9:return m=r.sent,r.next=12,c.default.firestore().collection(t.section).doc(t.project.id).update(f(f({},o),{},{images_preview:l,images:m}));case 12:t.$store.dispatch("feedback",d.a.SUCCESS),t.isLoading=!1,r.next=20;break;case 16:r.prev=16,r.t0=r.catch(0),t.isLoading=!1,t.$store.dispatch("feedback",d.a.ERROR);case 20:case"end":return r.stop()}}),r,null,[[0,16]])})))()},uploadImages:function(e){var t=this;return Object(o.a)(regeneratorRuntime.mark((function r(){var n;return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,n=[],r.next=4,Promise.all(e.map((function(element){return new Promise((function(e,r){var l,d;if(element.image){var image=null===(d=null===(l=element.image)||void 0===l?void 0:l.files[0])||void 0===d?void 0:d.file;if(!image)return;var m=c.default.storage().ref("/images/".concat(t.section,"/").concat(t.project.title,"/").concat(image.name)).put(image);m.on("state_changed",null,null,Object(o.a)(regeneratorRuntime.mark((function t(){var r;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,m.snapshot.ref.getDownloadURL();case 2:r=t.sent,n.push(r),e(r);case 5:case"end":return t.stop()}}),t)}))))}else element.url?(n.push(element.url),e(element.url)):e(!0)}))})));case 4:return r.abrupt("return",n);case 7:r.prev=7,r.t0=r.catch(0),console.log(r.t0);case 10:case"end":return r.stop()}}),r,null,[[0,7]])})))()},processTags:function(e){return e.length&&e.filter((function(e){return e.tag})).map((function(e){return e.tag}))},generateSlug:function(title){return"/".concat(this.section,"/").concat(title.replace(/[^a-zA-Z0-9 ]/g,"").toLowerCase().split(" ").join("-"))}}}),h=r(11),component=Object(h.a)(v,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("section",{staticClass:"font-light text-gray-500 mb-20 flex flex-col w-full items-center"},[r("p",{staticClass:"text-5xl mt-10 mb-12 font-thin"},[e._v("Edit "),r("span",{staticClass:"font-light"},[e._v(e._s(e.project.title.toUpperCase()))]),e._v(" project")]),e._v(" "),r("FormulateForm",{staticClass:"max-w-2xl",on:{submit:e.updateProject},model:{value:e.project,callback:function(t){e.project=t},expression:"project"}},[r("FormulateInput",{attrs:{type:"text",label:"Title",name:"title",placeholder:"Title",validation:"required"}}),e._v(" "),r("FormulateInput",{attrs:{type:"text",label:"Subtitle",name:"subtitle",placeholder:"Subtitle"}}),e._v(" "),r("FormulateInput",{attrs:{type:"textarea",label:"Description",name:"description",placeholder:"Description","input-class":"h-56"}}),e._v(" "),r("FormulateInput",{attrs:{type:"text",label:"Date",name:"date",help:"Please inser the date manually in the format you'd like to see displayed. Ex: Aug 2021 or 08/2021",placeholder:"Date"}}),e._v(" "),r("FormulateInput",{attrs:{type:"group",repeatable:!0,name:"images",label:"Images",help:"Introduce them in order of display. These will be all the images inside the project's details.",validation:"required","add-label":"+ Add image"},scopedSlots:e._u([{key:"default",fn:function(t){var n=t.model,o=t.index;return[r("client-only",[r("FormulateInput",{attrs:{type:"image",name:"image",validation:"mime:image/jpeg,image/png,image/gif"}}),e._v(" "),n[o]&&n[o].url?r("div",[r("p",[e._v("Previous image")]),e._v(" "),r("img",{staticClass:"h-28",attrs:{src:n[o].url,alt:""}})]):e._e()],1)]}}])}),e._v(" "),r("FormulateInput",{attrs:{type:"group",repeatable:!0,name:"images_preview",label:"Preview images",help:"Introduce them in order of display. These will be the 3 images the user sees before entering the project's details.",validation:"required","add-label":"+ Add image"},scopedSlots:e._u([{key:"default",fn:function(t){var n=t.model,o=t.index;return[r("client-only",[r("FormulateInput",{attrs:{type:"image",name:"image",validation:"mime:image/jpeg,image/png,image/gif"}}),e._v(" "),n[o]&&n[o].url?r("div",[r("p",[e._v("Previous image")]),e._v(" "),r("img",{staticClass:"h-28",attrs:{src:n[o].url,alt:""}})]):e._e()],1)]}}])}),e._v(" "),r("FormulateInput",{attrs:{type:"group",name:"tags",repeatable:!0,label:"Tags","add-label":"+ Add tag",validation:"max:3"}},[r("FormulateInput",{attrs:{name:"tag",label:"Tag"}})],1),e._v(" "),r("FormulateInput",{staticClass:"mt-10",attrs:{type:"submit",label:e.isLoading?"LOADING...":"UPDATE PROJECT"}})],1)],1)}),[],!1,null,null,null);t.default=component.exports},317:function(e,t,r){"use strict";r.r(t);var n=r(275).default,o=r(11),component=Object(o.a)(n,undefined,undefined,!1,null,null,null);t.default=component.exports}}]);