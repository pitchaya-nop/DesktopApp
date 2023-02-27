<template>
<b-modal class="modal fade" id="confvideocl" ref="confvideocl" tabindex="-1" role="dialog" aria-hidden="true" hide-footer hide-header hide-header-close centered>
      <!-- <div class="modal-dialog modal-dialog-centered" role="document">
        <div class="modal-content">  -->
          <!-- <div class="modal-body"> -->
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
          <!-- </div> -->
          <div class="modal-footer clfooter">
            <div id="basicUsage3">00:00:00</div>
            <ul> 
              <li><a class="icon-btn btn-light button-effect" href="javascript:void(0)" v-b-tooltip.hover.topleft title="speaker" data-tippy-content="speaker"><feather type="volume-2" size="15" height="15"></feather></a></li>
              <li><a class="icon-btn btn-light button-effect" href="javascript:void(0)" v-b-tooltip.hover.topleft title="Camera" data-tippy-content="Camera"><feather type="camera-off" size="15" height="15"></feather></a></li>
              <li><a class="icon-btn btn-light button-effect" href="javascript:void(0)" v-b-tooltip.hover.topleft title="Add Call" data-tippy-content="Add Call"><feather type="user-plus" size="15" height="15"></feather></a></li>
              <li><a class="icon-btn btn-danger button-effect is-animating" href="javascript:void(0)" @click="hide()" v-b-tooltip.hover.topleft title="Hangup" data-dismiss="modal" data-tippy-content="Hangup"><feather type="phone" size="15" height="15"></feather></a></li>
              <li><a class="icon-btn btn-light button-effect" href="javascript:void(0)" v-b-tooltip.hover.topleft title="video-off" data-tippy-content="Disable Video"><feather type="video-off" size="15" height="15"></feather></a></li>
              <li><a class="icon-btn btn-light button-effect mic" href="javascript:void(0)" v-b-tooltip.hover.topleft title="mic-off" data-tippy-content="Mute"><feather type="mic-off" size="15" height="15"></feather></a></li>
              <li><a class="icon-btn btn-light button-effect" href="javascript:void(0)" v-b-tooltip.hover.topleft title="pause" data-tippy-content="Hold"><feather type="pause" size="15" height="15"></feather></a></li>
            </ul>
          </div>
        <!-- </div>
      </div> -->
    </b-modal>
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
    };
  },
  methods: {
    show() {
      this.$refs.confvideocl.show();
    },
    hide() {
      this.$refs.confvideocl.hide();
    },
    getImgUrl(path) {
      return require("../../../assets/images/" + path);
    },
  },
};
</script>
