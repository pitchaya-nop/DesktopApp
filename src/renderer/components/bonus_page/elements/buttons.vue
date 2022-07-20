<template>
 <section class="section-pb-space">
        <div class="row">
          <div class="col-12">
            <div class="element-card element-animate">
              <div class="element-card-header heading">
                <h2>Buttons</h2>
              </div>
              <div class="element-card-body popup-group">
                <b-button @click="$bvModal.show('audiocall')" class="btn btn-primary fonts font_label" type="button">Audio call</b-button>
                <b-modal class="modal fade" id="audiocall" tabindex="-1" role="dialog" aria-hidden="true" hide-footer hide-header hide-header-close centered>
                      <div class="audiocall1 call-modal" :style="[{'background-image': 'url(' + this.getImgUrl('avtar/big/audiocall.jpg') + ')'},styleObject]">
                        <div class="center-con text-center">
                          <div class="title2">Josephin water</div>
                          <h6>log angelina california</h6>
                          <ul>
                            <li><a class="icon-btn btn-success button-effect btn-xl is-animating" @click="$bvModal.hide('audiocall')" href="javascript:void(0)"><feather type="phone"></feather></a></li>
                            <li><a class="icon-btn btn-danger button-effect btn-xl is-animating cancelcall" @click="$bvModal.hide('audiocall')" href="javascript:void(0)"><feather type="phone"></feather></a></li>
                          </ul>
                        </div>
                      </div>
                </b-modal>
                <div class="custom-dropdown add-chat custom-scroll">
                  <h3>Start new conversation</h3>
                  <ul class="contact-log-main">
                    <li>
                      <div class="contact-box">
                        <div class="profile offline"><img class="bg-img" src="../../../assets/images/contact/2.jpg" alt="Avatar"></div>
                        <div class="details">
                          <h5>Jony Lynetin</h5>
                          <h6>+21 3523 25544</h6>
                        </div>
                        <div class="contact-action">
                          <div class="icon-btn btn-outline-primary btn-sm button-effect"><i data-feather="message-square"></i></div>
                        </div>
                      </div>
                    </li>
                    <li class="active">
                      <div class="contact-box">
                        <div class="profile online"><img class="bg-img" src="../../../assets/images/contact/1.jpg" alt="Avatar"></div>
                        <div class="details">
                          <h5>Jony Lynetin</h5>
                          <h6>+54 541447 255</h6>
                        </div>
                        <div class="contact-action">
                          <div class="icon-btn btn-outline-primary btn-sm button-effect"><i data-feather="message-square"></i></div>
                        </div>
                      </div>
                    </li>
                    <li>
                      <div class="contact-box">
                        <div class="profile busy"><img class="bg-img" src="../../../assets/images/contact/3.jpg" alt="Avatar"></div>
                        <div class="details">
                          <h5>Jony Lynetin</h5>
                          <h6>+58 2564 02554</h6>
                        </div>
                        <div class="contact-action">
                          <div class="icon-btn btn-outline-primary btn-sm button-effect"><i data-feather="message-square"></i></div>
                        </div>
                      </div>
                    </li>
                    <li>
                      <div class="contact-box">
                        <div class="profile unreachable"><img class="bg-img" src="../../../assets/images/contact/4.jpg" alt="Avatar"></div>
                        <div class="details">
                          <h5>Jony Lynetin</h5>
                          <h6>+44 55124 2524</h6>
                        </div>
                        <div class="contact-action">
                          <div class="icon-btn btn-outline-primary btn-sm button-effect"><i data-feather="message-square"></i></div>
                        </div>
                      </div>
                    </li>
                    <li>
                      <div class="contact-box">
                        <div class="profile online"><img class="bg-img" src="../../../assets/images/contact/4.jpg" alt="Avatar"></div>
                        <div class="details">
                          <h5>Jony Lynetin</h5>
                          <h6>+54 541447 255</h6>
                        </div>
                        <div class="contact-action">
                          <div class="icon-btn btn-outline-primary btn-sm button-effect"><i data-feather="message-square"></i></div>
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
                <b-button @click="$bvModal.show('audiorcvcall')" class="btn btn-primary fonts font_label" type="button" data-toggle="modal" data-target="#audiorcvcall">Receive Audio Call</b-button>
                <b-modal content-class="modal-space" class="modal fade" id="audiorcvcall" tabindex="-1" role="dialog" aria-hidden="true" hide-footer hide-header hide-header-close centered>
                      <div class="audiocall2 call-modal" :style="[{'background-image': 'url(' + getImgUrl('avtar/big/audiocall.jpg') + ')'},styleObject]">
                        <div class="center-con text-center">
                          <div id="basicUsage2">00:00:00</div>
                          <div class="title2">Josephin water</div>
                          <h6>log angelina california</h6>
                          <ul>
                            <li><a class="icon-btn btn-light button-effect mute" href="javascript:void(0)" data-tippy-content="Mute"><i class="fa fa-microphone"></i></a></li>
                            <li><a class="icon-btn btn-light button-effect mute" href="javascript:void(0)" data-tippy-content="Speaker"><i class="fa fa-volume-up"></i></a></li>
                            <li><a class="icon-btn btn-danger button-effect btn-xl is-animating" @click="$bvModal.hide('audiorcvcall')" href="javascript:void(0)" data-tippy-content="Hangup" data-dismiss="modal"><feather type="phone"></feather></a></li>
                            <li><a class="icon-btn btn-light button-effect" href="javascript:void(0)" data-tippy-content="Add Call"><feather type="user-plus" size="15" height="15"></feather></a></li>
                            <li><a class="icon-btn btn-light button-effect" href="javascript:void(0)" data-tippy-content="Disable Video"><feather type="pause" size="15" height="15"></feather></a></li>
                          </ul>
                        </div>
                      </div>
                </b-modal>
                <b-button @click="$bvModal.show('confercall')" class="btn btn-primary fonts font_label" type="button" data-toggle="modal" data-target="#confercall">conference call</b-button>
                <b-modal class="modal fade" id="confercall" tabindex="-1" role="dialog" aria-hidden="true" hide-footer hide-header hide-header-close centered>
                      <div class="conferencecall call-modal" :style="[{'background-image': 'url(' + this.getImgUrl('avtar/big/audiocall.jpg') + ')'},styleObject]">
                        <div class="center-con text-center">
                          <div class="usersprof">
                            <div class="profile" :style="[{'background-image': 'url(' + this.getImgUrl('avtar/2.jpg') + ')'},styleObject]"></div>
                            <div class="profile" :style="[{'background-image': 'url(' + this.getImgUrl('avtar/3.jpg') + ')'},styleObject]"></div>
                            <div class="profile" :style="[{'background-image': 'url(' + this.getImgUrl('avtar/5.jpg') + ')'},styleObject]"></div>
                            <div class="profile" :style="[{'background-image': 'url(' + this.getImgUrl('avtar/big/videocall_bg.jpg') + ')'},styleObject]"></div>
                          </div>
                          <p>Incoming Call</p>
                          <h3>Conference Call</h3>
                          <ul>
                            <li><a class="icon-btn btn-danger button-effect btn-xl is-animating cancelcall" @click="$bvModal.hide('confercall')" href="javascript:void(0)"><feather type="phone"></feather></a></li>
                            <li><a class="icon-btn btn-success button-effect btn-xl is-animating" @click="$bvModal.hide('confercall')" href="javascript:void(0)"><feather type="video"></feather></a></li>
                          </ul>
                        </div>
                      </div>
                </b-modal>
                <b-button @click="$bvModal.show('onecall')" class="btn btn-primary fonts font_label" type="button" data-toggle="modal" data-target="#onecall">One Person call</b-button>
                <b-modal class="modal fade" id="onecall" tabindex="-1" role="dialog" aria-hidden="true" hide-footer hide-header hide-header-close centered>
                      <div class="conferencecall call-modal" :style="[{'background-image': 'url(' + this.getImgUrl('avtar/big/audiocall.jpg') + ')'},styleObject]">
                        <div class="center-con text-center">
                          <div class="usersprof">
                            <div class="profile" :style="[{'background-image': 'url(' + this.getImgUrl('avtar/big/videocall_bg.jpg') + ')'},styleObject]"></div>
                          </div>
                          <p>Incoming Call</p>
                          <h3>Jack p angulo</h3>
                          <p>Product Manager</p>
                          <ul>
                            <li><a class="icon-btn btn-danger button-effect btn-xl is-animating cancelcall" @click="$bvModal.hide('onecall')" href="javascript:void(0)"><feather type="phone"></feather></a></li>
                            <li><a class="icon-btn btn-success button-effect btn-xl is-animating" @click="$bvModal.hide('onecall')" href="javascript:void(0)"><feather type="video"></feather></a></li>
                          </ul>
                        </div>
                      </div>
                </b-modal>
                <b-button @click="$bvModal.show('nointernetmodal')" class="btn btn-primary fonts font_label" type="button" data-toggle="modal" data-target="#nointernetmodal">No Internet</b-button>
                <b-modal class="modal fade" id="nointernetmodal" tabindex="-1" role="dialog" aria-hidden="true" hide-footer hide-header hide-header-close centered>
                      <div class="no-internet animat-rate">
                        <div class="connection-img"><img class="left-img" src="../../../assets/images/disconnect/3.png" alt="Disconnected"><img class="right-img" src="../../../assets/images/disconnect/2.png" alt="Disconnected internet"></div>
                        <div class="quarterCircle">
                          <div class="close-btn" data-dismiss="modal" @click="$bvModal.hide('nointernetmodal')"><span aria-hidden="true">&times;</span></div>
                        </div>
                        <div class="bg_circle">
                          <div></div>
                          <div></div>
                          <div></div>
                          <div></div>
                          <div></div>
                        </div>
                        <div class="cross"></div>
                        <div class="cross1"></div>
                        <div class="dot"></div>
                        <div class="dot1"></div>
                        <div class="content text-center"><a class="icon-btn btn-danger button-effect btn-sm is-animating" href="javascript:void(0)"><i class="fa fa-wifi"></i></a>
                          <h5>Internet issue</h5>
                          <div class="title2">Disconnected</div>
                          <button class="btn reconnect-btn" type="button" @click="$bvModal.hide('nointernetmodal')" data-dismiss="modal">Reconnect</button>
                        </div>
                      </div>
                </b-modal>
                <b-button @click="$bvModal.show('videocall')" class="btn btn-primary fonts font_label" type="button" data-toggle="modal" data-target="#videocall">video call</b-button>
                <b-modal class="viddiolog modal fade  modal-lg" size="lg" id="videocall" tabindex="-1" role="dialog" aria-hidden="true" hide-footer hide-header hide-header-close centered>
                      <div class="videocall call-modal" :style="[{'background-image': 'url(' + this.getImgUrl('avtar/big/videocall_bg.jpg') + ')'},styleObject]">
                        <div class="small-image" :style="[{'background-image': 'url(' + this.getImgUrl('avtar/big/videocall.jpg') + ')'},styleObject]"></div>
                        <div class="media videocall-details">
                          <div class="usersprof">
                            <div class="profile" :style="[{'background-image': 'url(' + this.getImgUrl('avtar/2.jpg') + ')'},styleObject]"></div>
                            <div class="profile" :style="[{'background-image': 'url(' + this.getImgUrl('avtar/3.jpg') + ')'},styleObject]"></div>
                          </div>
                          <div class="media-body">
                            <h5>Josephin water</h5>
                            <h6>America ,California</h6>
                          </div>
                          <div id="basicUsage1">00:00:00</div>
                          <div class="zoomcontent"><a class="text-dark" href="javascript:void(0)" onclick="javascript:toggleFullScreen()"><img src="../../../assets/images/logo/maximize.svg" alt="zoom screen"></a></div>
                        </div>
                        <div class="center-con text-center">
                          <ul>
                            <li><a class="icon-btn btn-light button-effect pause" href="javascript:void(0)"><i class="ti-control-pause"></i></a></li>
                            <li><a class="icon-btn btn-danger button-effect btn-xl is-animating" @click="$bvModal.hide('videocall')" href="javascript:void(0)"><feather type="phone"></feather></a></li>
                            <li><a class="icon-btn btn-light button-effect mic" href="javascript:void(0)"><i class="fa fa-microphone"></i></a></li>
                          </ul>
                        </div>
                      </div>
                </b-modal>
                <b-modal class="viddiolog modal fade" size="lg" id="videocallhang" tabindex="-1" role="dialog" aria-hidden="true" hide-footer hide-header hide-header-close centered>
                      <div class="videocallhang call-modal" :style="[{'background-image': 'url(' + this.getImgUrl('avtar/big/videocall_bg.jpg') + ')'},styleObject]">
                        <div class="media videocall-details">
                          <div class="usersprof">
                            <div class="profile" :style="[{'background-image': 'url(' + this.getImgUrl('avtar/2.jpg') + ')'},styleObject]"></div>
                            <div class="profile" :style="[{'background-image': 'url(' + this.getImgUrl('avtar/3.jpg') + ')'},styleObject]"></div>
                          </div>
                          <div class="media-body">
                            <h5>Josephin water</h5>
                            <h6>America ,California</h6>
                          </div>
                          <div class="red-notification">
                            <div class="dot-btn dot-danger grow"></div>
                            <h6>Ringing</h6>
                          </div>
                          <div class="zoomcontent"><a class="text-dark" href="javascript:void(0)" onclick="javascript:toggleFullScreen()"><img src="../../../assets/images/logo/maximize.svg" alt="zoom screen"></a></div>
                        </div>
                        <div class="center-con text-center">
                          <ul>
                            <li><a class="icon-btn btn-success button-effect btn-xl is-animating" @click="$bvModal.hide('videocallhang')" href="javascript:void(0)"><feather type="video"></feather></a></li>
                            <li><a class="icon-btn btn-danger button-effect btn-xl is-animating cancelcall" @click="$bvModal.hide('videocallhang')"  href="javascript:void(0)"><feather type="phone"></feather></a></li>
                          </ul>
                        </div>
                      </div>
                </b-modal>
                <b-button @click="$bvModal.show('confvideocl')" class="btn btn-primary fonts font_label" type="button" data-toggle="modal" data-target="#confvideocl">video call conference</b-button>
                <b-modal class="modal fade" id="confvideocl" tabindex="-1" role="dialog" aria-hidden="true" hide-footer hide-header hide-header-close centered>
                        <div class="row confimg">
                          <div class="col-6">
                            <div class="vclimg" :style="[{'background-image': 'url(' + getImgUrl('avtar/big/videocall_bg.jpg') + ')'},styleObject]"></div>
                          </div>
                          <div class="col-6">
                            <div class="vclimg" :style="[{'background-image': 'url(' + getImgUrl('avtar/big/7.jpg') + ')'},styleObject]"></div>
                          </div>
                          <div class="col-6">
                            <div class="vclimg" :style="[{'background-image': 'url(' + getImgUrl('avtar/big/8.jpg') + ')'},styleObject]"></div>
                          </div>
                          <div class="col-6">
                            <div class="vclimg" :style="[{'background-image': 'url(' + getImgUrl('avtar/big/9.jpg') + ')'},styleObject]"></div>
                          </div>
                        </div>
                      <div class="modal-footer clfooter">
                        <div id="basicUsage3">00:00:00
                        </div>
                        <ul>
                            <li><a class="icon-btn btn-light button-effect" href="javascript:void(0)" data-tippy-content="speaker"><feather type="volume-2" size="15" height="15"></feather></a></li>
                            <li><a class="icon-btn btn-light button-effect" href="javascript:void(0)" data-tippy-content="Camera"><feather type="camera-off" size="15" height="15"></feather></a></li>
                            <li><a class="icon-btn btn-light button-effect" href="javascript:void(0)" data-tippy-content="Add Call"><feather type="user-plus" size="15" height="15"></feather></a></li>
                            <li><a class="icon-btn btn-danger button-effect is-animating" @click="$bvModal.hide('confvideocl')" href="javascript:void(0)" data-dismiss="modal" data-tippy-content="Hangup"><feather type="phone" size="15" height="15"></feather></a></li>
                            <li><a class="icon-btn btn-light button-effect" href="javascript:void(0)" data-tippy-content="Disable Video"><feather type="video-off" size="15" height="15"></feather></a></li>
                            <li><a class="icon-btn btn-light button-effect mic" href="javascript:void(0)" data-tippy-content="Mute"><feather type="mic-off" size="15" height="15"></feather></a></li>
                            <li><a class="icon-btn btn-light button-effect" href="javascript:void(0)" data-tippy-content="Hold"><feather type="pause" size="15" height="15"></feather></a></li>
                        </ul>
                      </div>
                </b-modal>
              </div>
            </div>
          </div>
        </div>
      </section>
</template>

<script>
export default {
  data() {
    return {
      styleObject: {
              "background-size": "cover",
              "background-position": "center",
              display: "block",
            }, 
    }
  },
  methods: {
     getImgUrl(path) {
          return require("../../../assets/images/" + path);
      },
  }
}
</script>