(window.webpackJsonp=window.webpackJsonp||[]).push([[33],{288:function(e,t,r){"use strict";r.r(t);var n=r(5),o=(r(22),r(47),r(138),r(192),r(3)),l=r(14),c=r(15),d=o.a.extend({layout:"admin",data:function(){return{title:"",review:{link:"",author:"",text:""},originalProjectId:"",isLoading:!1,collection:""}},created:function(){var e=this;return Object(n.a)(regeneratorRuntime.mark((function t(){var r,n,o,d;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(t.prev=0,r=e.$route.path.split("/only-ferran-knows-221/reviews/create")[1]){t.next=4;break}return t.abrupt("return");case 4:return e.review.link=r,n=null==r?void 0:r.split("/")[1],e.collection=n,t.next=9,l.default.firestore().collection(n).where("slug","==",r).get();case 9:o=t.sent,d=o.docs[0].data(),e.title=d.title,e.originalProjectId=o.docs[0].id,t.next=18;break;case 15:t.prev=15,t.t0=t.catch(0),e.$store.dispatch("feedback",c.a.ERROR);case 18:case"end":return t.stop()}}),t,null,[[0,15]])})))()},methods:{addReview:function(e){var t=this;return Object(n.a)(regeneratorRuntime.mark((function r(){var n;return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,t.$store.dispatch("feedback",c.a.SUBMITTING),t.isLoading=!0,r.next=5,l.default.firestore().collection("reviews").add(e);case 5:return n=r.sent,r.next=8,t.$store.dispatch("fetchReviews");case 8:t.isLoading=!1,t.$store.dispatch("feedback",c.a.SUCCESS),t.$router.push("/only-ferran-knows-221/reviews/edit/".concat(n.id)),r.next=17;break;case 13:r.prev=13,r.t0=r.catch(0),t.isLoading=!1,t.$store.dispatch("feedback",c.a.ERROR);case 17:case"end":return r.stop()}}),r,null,[[0,13]])})))()}}}),v=r(11),component=Object(v.a)(d,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("section",{staticClass:"font-light text-gray-500 mb-20 flex flex-col w-full items-center"},[r("p",{staticClass:"text-5xl mt-10 mb-12 font-thin"},[e._v("\n        New review\n        "),e.title?r("span",[e._v(" \n            for \n            "),r("span",{staticClass:"font-light"},[e._v(e._s(e.title.toUpperCase()))]),e._v(" \n            project\n        ")]):e._e()]),e._v(" "),r("FormulateForm",{staticClass:"max-w-2xl",on:{submit:e.addReview},model:{value:e.review,callback:function(t){e.review=t},expression:"review"}},[r("FormulateInput",{attrs:{type:"text",label:"Author",name:"author",placeholder:"Name of reviewer",validation:"required"}}),e._v(" "),r("FormulateInput",{attrs:{type:"textarea",label:"Text",name:"text",placeholder:"Text - what did they say?",validation:"required"}}),e._v(" "),e.review.slug?r("div",{staticClass:" mb-8"},[e._v(" Path to project this review relates to: "),r("span",{staticClass:"font-bold"},[e._v(e._s(e.review.slug))])]):e._e(),e._v(" "),e.review.slug?r("nuxt-link",{staticClass:"mt-10 bg-gray-200 rounded-full px-3 py-2",attrs:{to:"/only-ferran-knows-221/"+e.collection+"/"+e.originalProjectId}},[e._v(" See related project ")]):e._e(),e._v(" "),e.review.link?e._e():r("div",[e._v("This review is not associated with any project.")]),e._v(" "),r("FormulateInput",{staticClass:"mt-10",attrs:{type:"submit",label:e.isLoading?"LOADING...":"ADD REVIEW",disabled:e.isLoading}})],1)],1)}),[],!1,null,null,null);t.default=component.exports}}]);