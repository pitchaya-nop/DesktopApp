(window.webpackJsonp=window.webpackJsonp||[]).push([[71,108,109,121],{618:function(t,e,l){"use strict";l.r(e);var o={data:function(){return{styleObject:{"background-size":"cover","background-position":"center",display:"block"}}},methods:{show:function(){this.$refs.audiorcvcall.show()},hide:function(){this.$refs.audiorcvcall.hide()},getImgUrl:function(path){return l(56)("./"+path)}}},c=l(11),component=Object(c.a)(o,(function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("b-modal",{ref:"audiorcvcall",staticClass:"modal fade audiorcvcall",attrs:{"content-class":"modal-space",id:"audiorcvcall",tabindex:"-1",role:"dialog","aria-hidden":"true","hide-footer":"","hide-header":"","hide-header-close":"",centered:""}},[l("div",{staticClass:"audiocall2 call-modal",style:[{"background-image":"url("+t.getImgUrl("avtar/big/audiocall.jpg")+")"},t.styleObject]},[l("div",{staticClass:"center-con text-center"},[l("div",{attrs:{id:"basicUsage2"}},[t._v("00:00:00")]),t._v(" "),l("div",{staticClass:"title2"},[t._v("Josephin water")]),t._v(" "),l("h6",[t._v("log angelina california")]),t._v(" "),l("ul",[l("li",[l("a",{directives:[{name:"b-tooltip",rawName:"v-b-tooltip.hover.topleft",modifiers:{hover:!0,topleft:!0}}],staticClass:"icon-btn btn-light button-effect mute",attrs:{href:"javascript:void(0)",title:"Mute","data-tippy-content":"Mute"}},[l("i",{staticClass:"fa fa-microphone"})])]),t._v(" "),l("li",[l("a",{directives:[{name:"b-tooltip",rawName:"v-b-tooltip.hover.topleft",modifiers:{hover:!0,topleft:!0}}],staticClass:"icon-btn btn-light button-effect mute",attrs:{href:"javascript:void(0)",title:"Speaker","data-tippy-content":"Speaker"}},[l("i",{staticClass:"fa fa-volume-up"})])]),t._v(" "),l("li",[l("a",{directives:[{name:"b-tooltip",rawName:"v-b-tooltip.hover.topleft",modifiers:{hover:!0,topleft:!0}}],staticClass:"icon-btn btn-danger button-effect btn-xl is-animating",attrs:{href:"javascript:void(0)",title:"Hangup","data-tippy-content":"Hangup","data-dismiss":"modal"},on:{click:function(e){return t.hide()}}},[l("feather",{attrs:{type:"phone"}})],1)]),t._v(" "),l("li",[l("a",{directives:[{name:"b-tooltip",rawName:"v-b-tooltip.hover.topleft",modifiers:{hover:!0,topleft:!0}}],staticClass:"icon-btn btn-light button-effect",attrs:{href:"javascript:void(0)",title:"Add Call","data-tippy-content":"Add Call"}},[l("feather",{attrs:{type:"user-plus",size:"15",height:"15"}})],1)]),t._v(" "),l("li",[l("a",{directives:[{name:"b-tooltip",rawName:"v-b-tooltip.hover.topleft",modifiers:{hover:!0,topleft:!0}}],staticClass:"icon-btn btn-light button-effect",attrs:{href:"javascript:void(0)",title:"Pause","data-tippy-content":"Pause"}},[l("feather",{attrs:{type:"pause",size:"15",height:"15"}})],1)])])])])])}),[],!1,null,null,null);e.default=component.exports},629:function(t,e,l){"use strict";l.r(e);var o={data:function(){return{styleObject:{"background-size":"cover","background-position":"center",display:"block"}}},methods:{show:function(){this.$refs.videocall.show()},hide:function(){this.$refs.videocall.hide()},toggleFullScreen:function(){document.querySelector(".modal-dialog").classList.contains("active")?document.querySelector(".modal-dialog").className="modal-dialog viddiolog fade show  modal-dialog-centered":document.querySelector(".modal-dialog").className="modal-dialog viddiolog fade show active modal-dialog-centered"},getImgUrl:function(path){return l(56)("./"+path)}}},c=l(11),component=Object(c.a)(o,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("b-modal",{ref:"videocall",staticClass:"viddiolog modal fade",attrs:{"content-class":"modal-space",id:"videocall",size:"lg",tabindex:"-1",role:"dialog","aria-hidden":"true","hide-footer":"","hide-header":"","hide-header-close":"",centered:""}},[o("div",{staticClass:"videocall call-modal",style:[{"background-image":"url("+t.getImgUrl("avtar/big/videocall_bg.jpg")+")"},t.styleObject]},[o("div",{staticClass:"small-image",style:[{"background-image":"url("+t.getImgUrl("avtar/big/videocall.jpg")+")"},t.styleObject]}),t._v(" "),o("div",{staticClass:"media videocall-details"},[o("div",{staticClass:"usersprof"},[o("div",{staticClass:"profile",style:[{"background-image":"url("+t.getImgUrl("avtar/2.jpg")+")"},t.styleObject]}),t._v(" "),o("div",{staticClass:"profile",style:[{"background-image":"url("+t.getImgUrl("avtar/3.jpg")+")"},t.styleObject]})]),t._v(" "),o("div",{staticClass:"media-body"},[o("h5",[t._v("Josephin water")]),t._v(" "),o("h6",[t._v("America ,California")])]),t._v(" "),o("div",{attrs:{id:"basicUsage1"}},[t._v("00:00:00")]),t._v(" "),o("div",{staticClass:"zoomcontent"},[o("a",{staticClass:"text-dark",on:{click:function(e){return t.toggleFullScreen()}}},[o("img",{attrs:{src:l(301),alt:"zoom screen"}})])])]),t._v(" "),o("div",{staticClass:"center-con text-center"},[o("ul",[o("li",[o("a",{staticClass:"icon-btn btn-light button-effect pause",attrs:{href:"javascript:void(0)"}},[o("i",{staticClass:"ti-control-pause"})])]),t._v(" "),o("li",[o("a",{staticClass:"icon-btn btn-danger button-effect btn-xl is-animating",attrs:{href:"javascript:void(0)"},on:{click:function(e){return t.hide()}}},[o("feather",{attrs:{type:"phone"}})],1)]),t._v(" "),o("li",[o("a",{staticClass:"icon-btn btn-light button-effect mic",attrs:{href:"javascript:void(0)"}},[o("i",{staticClass:"fa fa-microphone"})])])])])])])}),[],!1,null,null,null);e.default=component.exports},630:function(t,e,l){"use strict";l.r(e);var o={components:{AudioCall2:l(618).default},data:function(){return{styleObject:{"background-size":"cover","background-position":"center",display:"block"}}},methods:{show:function(){this.$refs.audiocall.show()},hide:function(){this.$refs.audiocall.hide()},showAudio2Modal:function(){this.hide(),this.$refs.audio2Component.show()},getImgUrl:function(path){return l(56)("./"+path)}}},c=l(11),component=Object(c.a)(o,(function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("div",[l("b-modal",{ref:"audiocall",staticClass:"modal fade",attrs:{"content-class":"modal-space",id:"audiocall",tabindex:"-1",role:"dialog","aria-hidden":"true","hide-footer":"","hide-header":"","hide-header-close":"",centered:""}},[l("div",{staticClass:"audiocall1 call-modal",style:[{"background-image":"url("+t.getImgUrl("avtar/big/audiocall.jpg")+")"},t.styleObject]},[l("div",{staticClass:"center-con text-center"},[l("div",{staticClass:"title2"},[t._v("Josephin water")]),t._v(" "),l("h6",[t._v("log angelina california")]),t._v(" "),l("ul",[l("li",[l("a",{staticClass:"icon-btn btn-success button-effect btn-xl is-animating",attrs:{href:"javascript:void(0)","data-toggle":"modal","data-target":"#audiorcvcall","data-dismiss":"modal"},on:{click:function(e){return t.showAudio2Modal()}}},[l("feather",{attrs:{type:"phone"}})],1)]),t._v(" "),l("li",[l("a",{staticClass:"icon-btn btn-danger button-effect btn-xl is-animating cancelcall",attrs:{href:"javascript:void(0)","data-dismiss":"modal"},on:{click:function(e){return t.hide()}}},[l("feather",{attrs:{type:"phone"}})],1)])])])])]),t._v(" "),l("AudioCall2",{ref:"audio2Component"})],1)}),[],!1,null,null,null);e.default=component.exports},662:function(t,e,l){"use strict";l.r(e);l(5),l(4),l(2),l(1),l(6),l(3),l(7);var o=l(0),c=l(17),r=l(629),n=l(630),d=l(183);function v(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(object);t&&(l=l.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,l)}return e}var f={components:{VedioCall:r.default,AudioCall:n.default,SharedDoc:d.default},methods:{showVedioModal:function(){this.$refs.vedioComponent.show()},showAudioModal:function(){this.$refs.audioComponent.show()}},computed:function(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?v(Object(source),!0).forEach((function(e){Object(o.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):v(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}({},Object(c.b)({calllogs:function(t){return t.common.calllogs}}))},h=f,m=l(11),component=Object(m.a)(h,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"row"},[o("div",{staticClass:"col-sm-5"},[o("div",{staticClass:"user-profile mb-3"},[o("div",{staticClass:"user-content"},[o("img",{staticClass:"img-fluid",attrs:{src:l(131),alt:"user-img"}}),t._v(" "),o("h3",[t._v("Josephin water")]),t._v(" "),o("h4",{staticClass:"mt-2"},[t._v("+0 1800 76855")]),t._v(" "),o("ul",[t._m(0),t._v(" "),o("li",[o("i",{staticClass:"fa fa-phone",attrs:{"data-toggle":"modal","data-target":"#audiocall"},on:{click:function(e){return t.showAudioModal()}}}),t._v("voice call\n          ")]),t._v(" "),o("li",[o("i",{staticClass:"fa fa-video-camera",attrs:{"data-toggle":"modal","data-target":"#videocall"},on:{click:function(e){return t.showVedioModal()}}}),t._v("video call\n          ")])])])]),t._v(" "),o("div",{staticClass:"user-profile"},[o("SharedDoc")],1)]),t._v(" "),o("div",{staticClass:"col-sm-7"},[o("div",{staticClass:"call-log-main custom-scroll"},t._l(t.calllogs,(function(e,l){return o("div",{key:e.id,staticClass:"coll-log-group"},[o("div",{staticClass:"log-content-left"},[o("div",{staticClass:"media"},[o("feather",{attrs:{type:e.log_symbol}}),t._v(" "),o("div",{staticClass:"media-body"},[o("h5",[t._v(t._s(e.log_type))])])],1)]),t._v(" "),o("div",{staticClass:"log-content-right"},[o("h6",[t._v(t._s(e.time)+"  "+t._s(e.date))])])])})),0),t._v(" "),t._m(1)]),t._v(" "),o("VedioCall",{ref:"vedioComponent"}),t._v(" "),o("AudioCall",{ref:"audioComponent"})],1)}),[function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("li",[l("i",{staticClass:"fa fa-twitch"}),t._v("message")])},function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("div",{staticClass:"call-log-clear"},[l("i",{staticClass:"ti-trash font-danger"}),l("span",{staticClass:"font-danger"},[t._v("Delete call log")])])}],!1,null,null,null);e.default=component.exports}}]);