(window.webpackJsonp=window.webpackJsonp||[]).push([[57,52,53,54,55,56,58,59,60,62,63,64,65,66,67],{593:function(t,e,n){"use strict";n.r(e);var l=n(11),component=Object(l.a)({},(function(){var t=this.$createElement,e=this._self._c||t;return e("nuxt-link",{staticClass:"navbar-brand",attrs:{to:"/messenger/messenger"}},[e("div",{staticClass:"logo-block"},[e("img",{staticClass:"img-fluid",attrs:{src:n(285),alt:"logo"}})])])}),[],!1,null,null,null);e.default=component.exports},594:function(t,e,n){"use strict";n.r(e);var l=n(11),component=Object(l.a)({},(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"header-right-margin"},[n("client-only",[n("b-collapse",{attrs:{id:"nav-collapse","is-nav":""}},[n("b-navbar-nav",[n("button",{staticClass:"btn btn-primary",attrs:{type:"button"}},[n("nuxt-link",{attrs:{to:"/messenger/messenger"}},[t._v("Messenger")])],1),t._v(" "),n("b-dropdown",{attrs:{id:"dropdown-1",text:"Blog"}},[n("b-dropdown-item",{staticClass:"nav-link"},[n("nuxt-link",{attrs:{to:"/blogs/blog_right-sidebar"}},[t._v("Blog Right sidebar")])],1),t._v(" "),n("b-dropdown-item",{staticClass:"nav-link"},[n("nuxt-link",{attrs:{to:"/blogs/blog_left-sidebar"}},[t._v("Blog Left sidebar")])],1),t._v(" "),n("b-dropdown-item",{staticClass:"nav-link"},[n("nuxt-link",{attrs:{to:"/blogs/blog_details"}},[t._v("Blog Details")])],1),t._v(" "),n("b-dropdown-item",{staticClass:"nav-link"},[n("nuxt-link",{attrs:{to:"/blogs/blog_no-sidebar"}},[t._v("Blog No sidebar")])],1)],1),t._v(" "),n("b-dropdown",{attrs:{id:"dropdown-3",text:"Authentication"}},[n("b-dropdown-item",{staticClass:"nav-link"},[n("nuxt-link",{attrs:{to:"/authentication/login"}},[t._v("Signin")])],1),t._v(" "),n("b-dropdown-item",{staticClass:"nav-link"},[n("nuxt-link",{attrs:{to:"/authentication/login-2"}},[t._v("Signin Classic")])],1),t._v(" "),n("b-dropdown-item",{staticClass:"nav-link"},[n("nuxt-link",{attrs:{to:"/authentication/signup"}},[t._v("Signup")])],1),t._v(" "),n("b-dropdown-item",{staticClass:"nav-link"},[n("nuxt-link",{attrs:{to:"/authentication/signup-2"}},[t._v("Signup Classic")])],1)],1),t._v(" "),n("b-dropdown",{attrs:{id:"dropdown-4",text:"Bouns page"}},[n("b-dropdown-item",{staticClass:"nav-link"},[n("nuxt-link",{attrs:{to:"/bonus/about"}},[t._v("About")])],1),t._v(" "),n("b-dropdown-item",{staticClass:"nav-link"},[n("nuxt-link",{attrs:{to:"/bonus/faq"}},[t._v("FAQ")])],1),t._v(" "),n("b-dropdown-item",{staticClass:"nav-link"},[n("nuxt-link",{attrs:{to:"/bonus/elements"}},[t._v("Elements")])],1),t._v(" "),n("b-dropdown-item",{staticClass:"nav-link"},[n("nuxt-link",{attrs:{to:"/bonus/price"}},[t._v("Price")])],1)],1)],1)],1)],1)],1)}),[],!1,null,null,null);e.default=component.exports},595:function(t,e,n){"use strict";n.r(e);var l=n(593),c=n(594),r={components:{Logo:l.default,Navbar:c.default},data:function(){return{windowTop:0,fixedheader:!1}},mounted:function(){window.addEventListener("scroll",this.onScroll)},beforeDestroy:function(){window.removeEventListener("scroll",this.onScroll)},methods:{onScroll:function(t){this.windowTop=t.target.documentElement.scrollTop,this.windowTop>=60?this.fixedheader=!0:this.fixedheader=!1}}},o=n(11),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("header",{attrs:{id:"home"}},[n("div",{staticClass:"custom-container"},[n("div",{staticClass:"row"},[n("div",{staticClass:"col-12"},[n("div",{staticClass:"landing-header",class:t.fixedheader?"fixed":""},[n("div",{staticClass:"main-menu"},[n("div",[n("b-navbar",{staticClass:"navbar navbar-light",attrs:{toggleable:"xl"}},[n("Logo"),t._v(" "),n("b-navbar-toggle",{attrs:{target:"nav-collapse"}}),t._v(" "),n("Navbar")],1)],1)])])])])])])}),[],!1,null,null,null);e.default=component.exports},596:function(t,e,n){"use strict";n.r(e);var l={name:"TapTop",data:function(){return{display:!1}},mounted:function(){window.addEventListener("scroll",this.handleScroll)},destroyed:function(){window.removeEventListener("scroll",this.handleScroll)},methods:{executeScroll:function(){window.scrollTo({top:0,left:0,behavior:"smooth"})},handleScroll:function(){window.scrollY>600?this.display=!0:this.display=!1}}},c=n(11),component=Object(c.a)(l,(function(){var t=this,e=t.$createElement;return(t._self._c||e)("div",{staticClass:"tap-top",style:t.display?"display:block":"display:none",on:{click:function(e){return t.executeScroll()}}},[t._m(0)])}),[function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("i",{staticClass:"fa fa-angle-double-up"})])}],!1,null,null,null);e.default=component.exports},597:function(t,e,n){"use strict";n.r(e);var l=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"footer-title footer-mobile-title"},[n("h3",[t._v("About")])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("ul",{staticClass:"social-group"},[n("li",[n("a",{staticClass:"icon-btn btn-google button-effect btn-sm",attrs:{href:"https://www.facebook.com/"}},[n("i",{staticClass:"fa fa-facebook"})])]),t._v(" "),n("li",[n("a",{staticClass:"icon-btn btn-twiter button-effect btn-sm",attrs:{href:"https://twitter.com/"}},[n("i",{staticClass:"fa fa-twitter"})])]),t._v(" "),n("li",[n("a",{staticClass:"icon-btn btn-linkedin button-effect btn-sm",attrs:{href:"https://www.linkedin.com/"}},[n("i",{staticClass:"fa fa-linkedin"})])]),t._v(" "),n("li",[n("a",{staticClass:"icon-btn btn-instagram button-effect btn-sm",attrs:{href:"https://www.instagram.com/"}},[n("i",{staticClass:"fa fa-instagram"})])])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"footer-title"},[n("h3",[t._v("Useful Links")])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"footer-title"},[n("h3",[t._v("Blog Links")])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"footer-title"},[n("h3",[t._v("Authentication")])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"col-lg-3 col-md-4"},[n("div",{staticClass:"downlaod"},[n("div",[n("div",{staticClass:"footer-title"},[n("h3",[t._v("Download Apps")])]),t._v(" "),n("div",{staticClass:"footer-contant"},[n("div",{staticClass:"footer-btn"},[n("a",{staticClass:"btn active",attrs:{href:"https://www.apple.com/in/itunes/"}},[n("i",{staticClass:"fa fa-apple"}),t._v(" "),n("div",[n("h6",[t._v("Available on the")]),t._v(" "),n("h4",[t._v("App store")])])]),n("a",{staticClass:"btn",attrs:{href:"https://play.google.com/store"}},[n("i",{staticClass:"fa fa-play"}),t._v(" "),n("div",[n("h6",[t._v("Available on the")]),t._v(" "),n("h4",[t._v("Google play")])])])])])])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"footer-back-block"},[e("img",{staticClass:"img-fluid inner1",attrs:{src:n(283),alt:"footer-back-img"}}),e("img",{staticClass:"img-fluid inner2",attrs:{src:n(283),alt:"footer-back-img"}})])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"container copyright-footer"},[n("div",{staticClass:"row copyright"},[n("div",{staticClass:"col-md-6 col-sm-12"},[n("p",{staticClass:"footer-left"},[t._v("© 2021 Chitchat. All Rights Reserved")])]),t._v(" "),n("div",{staticClass:"col-md-6 col-sm-12 links_horizontal"},[n("p",{staticClass:"text-right"},[t._v("\n          Made with "),n("span",[t._v("♥ ")]),t._v("By Theme Pixelstrap\n        ")])])])])}],c=n(11),component=Object(c.a)({},(function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("footer",[l("div",{staticClass:"container footer-main"},[l("div",{staticClass:"row footer-block"},[l("div",{staticClass:"col-lg-3 col-md-6"},[t._m(0),t._v(" "),l("div",{staticClass:"about-payment footer-contant"},[l("div",{staticClass:"logo"},[l("nuxt-link",{attrs:{to:"/messenger/messenger"}},[l("img",{attrs:{src:n(285),alt:"logo"}})])],1),t._v(" "),l("p",[t._v("\n            Contrary to popular belief, Lorem Ipsum is not simply random text.\n            It has roots in a piece Lorem fugit on looked ipsum.\n          ")]),t._v(" "),t._m(1)])]),t._v(" "),l("div",{staticClass:"col-lg-2 col-md-3"},[l("div",{staticClass:"links"},[t._m(2),t._v(" "),l("div",{staticClass:"footer-contant"},[l("ul",[l("li",[l("nuxt-link",{attrs:{to:"/messenger/messenger"}},[t._v("Home")])],1),t._v(" "),l("li",[l("nuxt-link",{attrs:{to:"/bonus/about"}},[t._v("About us")])],1),t._v(" "),l("li",[l("nuxt-link",{attrs:{to:"/bonus/faq"}},[t._v("FAQ")])],1),t._v(" "),l("li",[l("nuxt-link",{attrs:{to:"/bonus/elements"}},[t._v("Elements")])],1)])])])]),t._v(" "),l("div",{staticClass:"col-lg-2 col-md-3"},[l("div",{staticClass:"links"},[t._m(3),t._v(" "),l("div",{staticClass:"footer-contant"},[l("ul",[l("li",[l("nuxt-link",{attrs:{to:"/blogs/blog_no-sidebar"}},[t._v("No sidebar")])],1),t._v(" "),l("li",[l("nuxt-link",{attrs:{to:"/blogs/blog_left-sidebar"}},[t._v("Left sidebar")])],1),t._v(" "),l("li",[l("nuxt-link",{attrs:{to:"/blogs/blog_right-sidebar"}},[t._v("Right sidebar")])],1),t._v(" "),l("li",[l("nuxt-link",{attrs:{to:"/blogs/blog_details"}},[t._v("Details page")])],1)])])])]),t._v(" "),l("div",{staticClass:"col-lg-2 col-md-4"},[l("div",{staticClass:"links"},[t._m(4),t._v(" "),l("div",{staticClass:"footer-contant"},[l("ul",[l("li",[l("nuxt-link",{attrs:{to:"/authentication/login"}},[t._v("Signin")])],1),t._v(" "),l("li",[l("nuxt-link",{attrs:{to:"/authentication/login-2"}},[t._v("Signin classic")])],1),t._v(" "),l("li",[l("nuxt-link",{attrs:{to:"/authentication/signup"}},[t._v("Signup")])],1),t._v(" "),l("li",[l("nuxt-link",{attrs:{to:"/authentication/signup-2"}},[t._v("Signup classic")])],1)])])])]),t._v(" "),t._m(5)])]),t._v(" "),t._m(6),t._v(" "),t._m(7)])}),l,!1,null,null,null);e.default=component.exports},610:function(t,e,n){"use strict";n.r(e);var l={data:function(){return{swiperOption:{loop:!0,autoplay:{delay:2e3},breakpoints:{600:{slidesPerView:2,spaceBetween:0},1070:{slidesPerView:3,spaceBetween:0},1600:{slidesPerView:3}}},plans:[{img:n(303),plan:"Free Plan",price:"$0",palne:"Totally Free Plane",feature1:"Common Feature is Available",feature2:"sxgsgerggregrterett",feature3:"Try for free, Forever!"},{img:n(304),plan:"Professional",price:"$59",palne:"Professional Plane",feature1:"All Features is Available",feature2:"High Definition Full-screen",feature3:"24/7 phone and email support"},{img:n(305),plan:"Advanced",price:"$99",palne:"Advance Plane",feature1:"All Features is Available",feature2:"High Definition Full-screen",feature3:"24/7 phone and email support"}]}}},c=n(11),component=Object(c.a)(l,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{staticClass:"section-py-space",attrs:{id:"price"}},[t._m(0),t._v(" "),n("div",{staticClass:"custom-container"},[n("div",{staticClass:"row"},[n("div",{staticClass:"col-12"},[n("div",[n("div",{directives:[{name:"swiper",rawName:"v-swiper:mySwiper",value:t.swiperOption,expression:"swiperOption",arg:"mySwiper"}]},[n("div",{staticClass:"swiper-wrapper"},t._l(t.plans,(function(e,l){return n("div",{key:l,staticClass:"swiper-slide"},[n("div",{staticClass:"item"},[n("div",{staticClass:"pricing-box"},[n("div",{staticClass:"pricing-icon"},[n("img",{staticClass:"img-fluid",attrs:{src:e.img,alt:"test-img"}})]),t._v(" "),n("div",{staticClass:"pricing-content"},[n("h2",[t._v(t._s(e.plan))]),t._v(" "),n("h4",[t._v(t._s(e.price)+" | "+t._s(e.palne))]),n("nuxt-link",{staticClass:"btn pricing-btn",attrs:{to:"/bonus/price"}},[t._v("get started")])],1),t._v(" "),n("ul",{staticClass:"avb-price"},[n("li",[n("i",{staticClass:"fa fa-check"}),t._v(t._s(e.feature1))]),t._v(" "),n("li",[n("i",{staticClass:"fa fa-check"}),t._v(t._s(e.feature2))]),t._v(" "),n("li",[n("i",{staticClass:"fa fa-check"}),t._v(t._s(e.feature3))])])])])])})),0)])])])])])])}),[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"container-fluid"},[n("div",{staticClass:"row"},[n("div",{staticClass:"col-12"},[n("div",{staticClass:"landing-title"},[n("div",[n("h1",[t._v("pricing plan")])]),t._v(" "),n("div",{staticClass:"sub-title"},[n("div",[n("h4",[t._v("Choose Your Pricing Plan")]),t._v(" "),n("h2",[t._v("Affordable for everyone!")])])])])])])])}],!1,null,null,null);e.default=component.exports},612:function(t,e,n){"use strict";n.r(e);var l=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"container-fluid"},[n("div",{staticClass:"row"},[n("div",{staticClass:"col-12"},[n("div",{staticClass:"landing-title"},[n("div",[n("h1",[t._v("subscribe")])]),t._v(" "),n("div",{staticClass:"sub-title"},[n("div",[n("h4",[t._v("Subscribe Newsletter")]),t._v(" "),n("h2",[t._v("Subscribe to receive updates")])])])])])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"col-md-6"},[e("div",{staticClass:"subscribe-content"},[e("img",{staticClass:"img-fluid",attrs:{src:n(306),alt:"subscribe-landing"}})])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("form",{staticClass:"form-inline"},[n("input",{staticClass:"form-control",attrs:{placeholder:"your name"}}),t._v(" "),n("input",{staticClass:"form-control",attrs:{placeholder:"email"}}),t._v(" "),n("button",{staticClass:"btn"},[t._v("Submit")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"subscribe-back-content"},[e("img",{staticClass:"img-fluid subscribe-img1",attrs:{src:n(307),alt:"subscribe-back-img"}})])}],c=n(11),component=Object(c.a)({},(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{staticClass:"section-py-space subscribe-main light-bg",attrs:{id:"subscribe"}},[t._m(0),t._v(" "),n("div",{staticClass:"custom-container"},[n("div",{staticClass:"row subscribe-block"},[t._m(1),t._v(" "),n("div",{staticClass:"col-md-6"},[n("div",{staticClass:"subscribe-content"},[n("div",[n("h1",[t._v("Subscribe our Newsletter get new update.")]),t._v(" "),t._m(2),t._v(" "),n("h4",[t._v("Check Features. "),n("span",[n("nuxt-link",{attrs:{to:"/messenger/messenger"}},[t._v("Learn More ")])],1)])])])])])]),t._v(" "),t._m(3)])}),l,!1,null,null,null);e.default=component.exports},616:function(t,e,n){"use strict";n.r(e);var l=[function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("ul",{staticClass:"test-icon"},[l("li",[l("a",{attrs:{href:"https://www.google.com/"}},[l("img",{staticClass:"img-fluid",attrs:{src:n(315),alt:"icon-google"}})])]),t._v(" "),l("li",[l("a",{attrs:{href:"https://twitter.com/"}},[l("img",{staticClass:"img-fluid",attrs:{src:n(316),alt:"icon-google"}})])]),t._v(" "),l("li",[l("a",{attrs:{href:"https://www.facebook.com/"}},[l("img",{staticClass:"img-fluid",attrs:{src:n(317),alt:"icon-google"}})])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"testimonial-back-content"},[e("img",{staticClass:"img-fluid test-img2",attrs:{src:n(314),alt:"testimonial"}})])}],c={data:function(){return{swiperOption:{loop:!0,autoplay:{delay:2e3},navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"},breakpoints:{640:{slidesPerView:2,spaceBetween:20},600:{slidesPerView:2,spaceBetween:0},1070:{slidesPerView:3,spaceBetween:20},1600:{slidesPerView:4}}},testimonial:[{img:n(310),heart:!0,manager:"project manager",equipment:"Advanced Equipment",desc:"Lorem Ipsum is simply dummy text of the printing and typesetting industry."},{img:n(311),heart:!1,manager:"project manager",equipment:"Advanced Equipment",desc:"Lorem Ipsum is simply dummy text of the printing and typesetting industry."},{img:n(312),heart:!0,manager:"project manager",equipment:"Advanced Equipment",desc:"Lorem Ipsum is simply dummy text of the printing and typesetting industry."},{img:n(313),heart:!0,manager:"project manager",equipment:"Advanced Equipment",desc:"Lorem Ipsum is simply dummy text of the printing and typesetting industry."}]}}},r=n(11),component=Object(r.a)(c,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"custom-container testimonial-main"},[n("div",{staticClass:"row"},[n("div",{staticClass:"col-12"},[n("div",[n("div",{directives:[{name:"swiper",rawName:"v-swiper:mySwiper",value:t.swiperOption,expression:"swiperOption",arg:"mySwiper"}]},[n("div",{staticClass:"swiper-wrapper"},t._l(t.testimonial,(function(e,l){return n("div",{key:l,staticClass:"swiper-slide"},[n("div",{staticClass:"item"},[n("div",{staticClass:"testimonial-box mt-0"},[n("div",{staticClass:"test-img"},[n("img",{staticClass:"img-fluid",attrs:{src:e.img,alt:"test-img"}}),e.heart?n("i",{staticClass:"test-wish fa fa-heart"}):t._e()]),t._v(" "),n("div",{staticClass:"test-contain"},[n("h4",[t._v(t._s(e.manager))]),t._v(" "),n("h3",[t._v(t._s(e.equipment))]),t._v(" "),n("h6",[t._v(t._s(e.desc))]),t._v(" "),t._m(0,!0)])])])])})),0),t._v(" "),n("div",{staticClass:"swiper-button-prev",attrs:{slot:"button-prev"},slot:"button-prev"}),t._v(" "),n("div",{staticClass:"swiper-button-next",attrs:{slot:"button-next"},slot:"button-next"})])])])]),t._v(" "),t._m(1)])}),l,!1,null,null,null);e.default=component.exports},622:function(t,e,n){"use strict";n.r(e);var l=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"ply-main"},[n("div",{staticClass:"ply-content"},[n("i",{staticClass:"ti-shield"})]),t._v(" "),n("h3",[t._v("Secure Your "),n("span",[t._v("Messages")])])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("h4",[n("span",[t._v("Desktop App ")]),t._v("– Easy to use our chat app, Attractive\n              and clean design, with many Features :- Dark & light, Recent\n              Chat And many more.......\n            ")])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"secure-back-content"},[e("img",{staticClass:"img-fluid secure-img1",attrs:{src:n(299),alt:"parellex-img1"}}),e("img",{staticClass:"img-fluid secure-img2",attrs:{src:n(299),alt:"parellex-img1"}})])}],c=n(11),component=Object(c.a)({},(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{staticClass:"section-pb-space secure-app-main"},[n("div",{staticClass:"custom-container"},[n("div",{staticClass:"row"},[n("div",{staticClass:"col-lg-5 offset-lg-7 col-lg-5 offset-lg-2"},[n("div",{staticClass:"secure-app-content"},[n("div",[t._m(0),t._v(" "),n("h1",[t._v("The world's top secure App")]),t._v(" "),t._m(1),t._v(" "),n("nuxt-link",{attrs:{to:"/messenger/messenger"}},[n("a",{staticClass:"btn pricing-btn"},[t._v("learn more")])])],1)])])])]),t._v(" "),t._m(2)])}),l,!1,null,null,null);e.default=component.exports},670:function(t,e,n){"use strict";n.r(e);var l={data:function(){return{activeitem:1}},methods:{activemenu:function(t){this.activeitem=t}}},c=n(11),component=Object(c.a)(l,(function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("section",{staticClass:"collaboration-main section-py-space"},[t._m(0),t._v(" "),l("div",{staticClass:"custom-container"},[l("div",{staticClass:"row"},[l("div",{staticClass:"col-12"},[l("div",{staticClass:"collaboration-content"},[l("ul",{staticClass:"collab-tab nav nav-pills"},[l("li",{staticClass:"nav-item",on:{click:function(e){return t.activemenu(1)}}},[l("a",{staticClass:"nav-link",class:1==t.activeitem?"active show":"",attrs:{"data-toggle":"pill"}},[t._m(1)])]),t._v(" "),l("li",{staticClass:"nav-item",on:{click:function(e){return t.activemenu(2)}}},[l("a",{staticClass:"nav-link",class:2==t.activeitem?"active show":"",attrs:{"data-toggle":"pill"}},[t._m(2)])]),t._v(" "),l("li",{staticClass:"nav-item",on:{click:function(e){return t.activemenu(3)}}},[l("a",{staticClass:"nav-link",class:3==t.activeitem?"active show":"",attrs:{"data-toggle":"pill"}},[t._m(3)])]),t._v(" "),l("li",{staticClass:"nav-item",on:{click:function(e){return t.activemenu(4)}}},[l("a",{staticClass:"nav-link",class:4==t.activeitem?"active show":"",attrs:{"data-toggle":"pill"}},[t._m(4)])])])]),t._v(" "),l("div",{staticClass:"tab-detail"},[l("div",{staticClass:"tab-content"},[l("div",{staticClass:"tab-pane container",class:1==t.activeitem?"active show":"",attrs:{id:"tab1"}},[l("img",{staticClass:"img-fluid",attrs:{src:n(298),alt:"tab-detail-img"}})]),t._v(" "),l("div",{staticClass:"tab-pane container fade",class:2==t.activeitem?"active show":"",attrs:{id:"tab2"}},[l("img",{staticClass:"img-fluid",attrs:{src:n(298),alt:"tab-detail-img"}})]),t._v(" "),l("div",{staticClass:"tab-pane container fade",class:3==t.activeitem?"active show":"",attrs:{id:"tab3"}},[l("img",{staticClass:"img-fluid",attrs:{src:n(298),alt:"tab-detail-img"}})]),t._v(" "),l("div",{staticClass:"tab-pane container fade",class:4==t.activeitem?"active show":"",attrs:{id:"tab4"}},[l("img",{staticClass:"img-fluid",attrs:{src:n(298),alt:"tab-detail-img"}})])])])])])])])}),[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"container-fluid"},[n("div",{staticClass:"row"},[n("div",{staticClass:"col-12"},[n("div",{staticClass:"landing-title"},[n("div",[n("h1",[t._v("finger tips")])]),t._v(" "),n("div",{staticClass:"sub-title"},[n("div",[n("h4",[t._v("Exclusive Features")]),t._v(" "),n("h2",[t._v("Put collaboration at your fingertips")])])])])])])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"tab-main"},[n("div",{staticClass:"tab-img"},[n("i",{staticClass:"ti-thought"})]),t._v(" "),n("div",{staticClass:"tab-content"},[n("h3",[t._v("Organise")]),t._v(" "),n("p",[t._v("conversation")])])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"tab-main"},[n("div",{staticClass:"tab-img"},[n("i",{staticClass:"ti-zip"})]),t._v(" "),n("div",{staticClass:"tab-content"},[n("h3",[t._v("Shared")]),t._v(" "),n("p",[t._v("file and etc")])])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"tab-main"},[n("div",{staticClass:"tab-img"},[n("i",{staticClass:"ti-search"})]),t._v(" "),n("div",{staticClass:"tab-content"},[n("h3",[t._v("Search")]),t._v(" "),n("p",[t._v("everything")])])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"tab-main"},[n("div",{staticClass:"tab-img"},[n("i",{staticClass:"ti-video-camera"})]),t._v(" "),n("div",{staticClass:"tab-content"},[n("h3",[t._v("talk in")]),t._v(" "),n("p",[t._v("video call")])])])}],!1,null,null,null);e.default=component.exports},704:function(t,e,n){"use strict";n.r(e);var l=[function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("section",{staticClass:"section-py-space app-design-block",attrs:{id:"features"}},[l("div",{staticClass:"container-fluid"},[l("div",{staticClass:"row"},[l("div",{staticClass:"col-12"},[l("div",{staticClass:"landing-title"},[l("div",[l("h1",[t._v("about app")])]),t._v(" "),l("div",{staticClass:"sub-title"},[l("div",[l("h4",[t._v("Exclusive Features")]),t._v(" "),l("h2",[t._v("We provide best feature for app design and coding")])])])])])])]),t._v(" "),l("div",{staticClass:"container"},[l("div",{staticClass:"row app-code-block"},[l("div",{staticClass:"col-md-4"},[l("div",{staticClass:"app-design-main"},[l("div",{staticClass:"icon-box"},[l("i",{staticClass:"ti-wand"})]),t._v(" "),l("img",{staticClass:"img-fluid app-hover",attrs:{src:n(302),alt:"app hover img"}}),t._v(" "),l("div",{staticClass:"contant-box"},[l("h2",[t._v("latest design")]),t._v(" "),l("h4",[t._v("\n              Easy to use our chat app, Attractive Features Dark & light.\n            ")])])])]),t._v(" "),l("div",{staticClass:"col-md-4"},[l("div",{staticClass:"app-design-main hover"},[l("div",{staticClass:"icon-box"},[l("i",{staticClass:"ti-mobile"})]),t._v(" "),l("img",{staticClass:"img-fluid app-hover",attrs:{src:n(302),alt:"app hover img"}}),t._v(" "),l("div",{staticClass:"contant-box"},[l("h2",[t._v("fully responsive")]),t._v(" "),l("h4",[t._v("\n              Easy to use our chat app, Attractive Features Dark & light.\n            ")])])])]),t._v(" "),l("div",{staticClass:"col-md-4"},[l("div",{staticClass:"app-design-main"},[l("div",{staticClass:"icon-box"},[l("i",{staticClass:"ti-shortcode"})]),t._v(" "),l("img",{staticClass:"img-fluid app-hover",attrs:{src:n(302),alt:"app hover img"}}),t._v(" "),l("div",{staticClass:"contant-box"},[l("h2",[t._v("clean code")]),t._v(" "),l("h4",[t._v("\n              Easy to use our chat app, Attractive Features Dark & light.\n            ")])])])])])])])}],c=n(11),component=Object(c.a)({},(function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)}),l,!1,null,null,null);e.default=component.exports},705:function(t,e,n){"use strict";n.r(e);var l=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"container-fluid"},[n("div",{staticClass:"landing-title"},[n("div",[n("h1",[t._v("why chooce")])]),t._v(" "),n("div",{staticClass:"sub-title"},[n("div",[n("h4",[t._v("Why Chooce Chitchat")]),t._v(" "),n("h2",[t._v("Chitchat is fully responsive excellent choice")])])])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"col-md-6"},[e("div",{staticClass:"chitchat-contain"},[e("img",{staticClass:"img-fluid chitchat-img",attrs:{src:n(328),alt:"chit-chat"}})])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"chitchat-logo"},[e("img",{staticClass:"img-fluid",attrs:{src:n(285),alt:"landing-logo"}})])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("h3",[t._v("Easy to use"),n("span",[t._v(" Our Application")])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("ul",{staticClass:"detial-price"},[n("li",[n("i",{staticClass:"fa fa-check"}),t._v("Customer First Content-focused\n                Displaying Effects\n              ")]),t._v(" "),n("li",[n("i",{staticClass:"fa fa-check"}),t._v("High Definition Full-screen\n                Sliders & Backgrounds\n              ")]),t._v(" "),n("li",[n("i",{staticClass:"fa fa-check"}),t._v("Try for free, Forever!")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"chitchat-back-block"},[e("img",{staticClass:"img-fluid chit-chat1",attrs:{src:n(290),alt:"chit-chat-back-img"}}),e("img",{staticClass:"img-fluid chit-chat2",attrs:{src:n(326),alt:"chit-chat-back-img"}}),e("img",{staticClass:"img-fluid chit-chat3",attrs:{src:n(327),alt:"chit-chat-back-img"}})])}],c=n(11),component=Object(c.a)({},(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{staticClass:"section-py-space chitchat-main light-bg"},[t._m(0),t._v(" "),n("div",{staticClass:"custom-container"},[n("div",{staticClass:"row chit-chat-block"},[t._m(1),t._v(" "),n("div",{staticClass:"col-md-6"},[n("div",{staticClass:"chitchat-contain"},[n("div",[t._m(2),t._v(" "),t._m(3),t._v(" "),n("h1",[t._v("All-in-one responsive app for you")]),t._v(" "),n("h4",[t._v("\n              It is about us being able to offer help with the branding\n              campaign, product presentation, and advertisement running across\n              social media.\n            ")]),t._v(" "),t._m(4),t._v(" "),n("nuxt-link",{staticClass:"btn pricing-btn",attrs:{to:"/messenger/messenger"}},[t._v("\n              view more")])],1)])])])]),t._v(" "),t._m(5)])}),l,!1,null,null,null);e.default=component.exports},706:function(t,e,n){"use strict";n.r(e);var l=n(11),component=Object(l.a)({},(function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("section",{staticClass:"slider-block"},[l("div",{staticClass:"custom-container"},[l("div",{staticClass:"row"},[l("div",{staticClass:"col-12"},[l("div",{staticClass:"slider-main"},[l("div",{staticClass:"slider-contain"},[l("h1",[t._v("Easy To Use Our Chat App")]),t._v(" "),t._m(0),t._v(" "),l("div",{staticClass:"downlaod"},[l("div",{staticClass:"footer-btn"},[l("nuxt-link",{staticClass:"btn active",attrs:{to:"/messenger/messenger"}},[t._v("Start for free")])],1)])])])])])]),t._v(" "),l("img",{staticClass:"img-fluid chat-slide",attrs:{src:n(325),alt:"inner"}}),l("img",{staticClass:"img-fluid inner1",attrs:{src:n(329),alt:"inner1"}})])}),[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("h4",[n("span",[t._v("Desktop App ")]),t._v("– Easy to use our chat app, Attractive\n              and"),n("br"),t._v("\n              clean design, with many Features Dark & light, Recent Chat And\n              many more.......\n            ")])}],!1,null,null,null);e.default=component.exports},707:function(t,e,n){"use strict";n.r(e);var l=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"ply-main"},[n("div",{staticClass:"ply-content"},[n("div",{staticClass:"ply-sub-content"},[n("i",{staticClass:"fa fa-play"})])]),t._v(" "),n("h3",[t._v("See Our "),n("span",[t._v("Team work")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"col-md-6"},[e("div",{staticClass:"team-work-content"},[e("img",{staticClass:"img-fluid team-main",attrs:{src:n(335),alt:"chit-chat"}})])])}],c=n(11),component=Object(c.a)({},(function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("section",{staticClass:"section-py-space team-work-main",attrs:{id:"team"}},[l("div",{staticClass:"custom-container"},[l("div",{staticClass:"row team-block"},[l("div",{staticClass:"col-md-6"},[l("div",{staticClass:"team-work-content"},[l("div",[t._m(0),t._v(" "),l("h1",[t._v("Efficient teamwork for every enterprise")]),t._v(" "),l("h4",[t._v("\n              Big companies save time with Slack by securely collaborating\n              across teams, departments, offices and countries.\n            ")]),t._v(" "),l("nuxt-link",{staticClass:"btn pricing-btn",attrs:{to:"/messenger/messenger"}},[t._v("\n              Chitchat for enterprise")])],1)])]),t._v(" "),t._m(1)])]),t._v(" "),l("img",{staticClass:"img-fluid team1",attrs:{src:n(331),alt:"team-work"}}),l("img",{staticClass:"img-fluid team2",attrs:{src:n(332),alt:"team-work"}}),l("img",{staticClass:"img-fluid team3",attrs:{src:n(333),alt:"team-work"}}),l("img",{staticClass:"img-fluid team4",attrs:{src:n(334),alt:"team-work"}}),l("img",{staticClass:"img-fluid team5",attrs:{src:n(330),alt:"team-work"}})])}),l,!1,null,null,null);e.default=component.exports},752:function(t,e,n){"use strict";n.r(e);var header=n(595),l=n(593),c=n(594),r=n(706),o=n(704),v=n(705),d=n(707),m=n(670),_=n(616),f=n(622),h=n(610),C=n(612),footer=n(597),w=n(596),k={components:{Header:header.default,Logo:l.default,Navbar:c.default,Slider:r.default,AppDesign:o.default,ChitChat:v.default,TeamWork:d.default,Collaboration:m.default,Testimonial:_.default,SecureApp:f.default,PricingPlan:h.default,SubscribeUpdate:C.default,Footer:footer.default,TapTop:w.default},head:function(){return{bodyAttrs:{class:"theme-landing-main"}}}},y=n(11),component=Object(y.a)(k,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("client-only",[n("div",{staticClass:"theme-landing"},[n("Header"),t._v(" "),n("Slider"),t._v(" "),n("AppDesign"),t._v(" "),n("ChitChat"),t._v(" "),n("TeamWork"),t._v(" "),n("SecureApp"),t._v(" "),n("Collaboration"),t._v(" "),n("section",{staticClass:"section-py-space light-bg"},[n("div",{staticClass:"landing-title"},[n("div",[n("h1",[t._v("Team")])]),t._v(" "),n("div",{staticClass:"sub-title"},[n("div",[n("h4",[t._v("Team")]),t._v(" "),n("h2",[t._v("Our Experts")])])])]),t._v(" "),n("Testimonial")],1),t._v(" "),n("PricingPlan"),t._v(" "),n("SubscribeUpdate"),t._v(" "),n("Footer"),t._v(" "),n("TapTop")],1)])}),[],!1,null,null,null);e.default=component.exports}}]);