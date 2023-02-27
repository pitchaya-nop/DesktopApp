<template>
  <b-modal
    content-class="modal-space"
    class="viddiolog modal fade"
    id="videocall"
    size="lg"
    ref="videocall"
    tabindex="-1"
    role="dialog"
    aria-hidden="true"
    hide-footer
    hide-header
    hide-header-close
    centered
  >
    <div
      class="videocall call-modal"
      :style="[
        {
          'background-image':
            'url(' + getImgUrl('avtar/big/videocall_bg.jpg') + ')',
        },
        styleObject,
      ]"
    >
      <div
        class="small-image"
        :style="[
          {
            'background-image':
              'url(' + getImgUrl('avtar/big/videocall.jpg') + ')',
          },
          styleObject,
        ]"
      ></div>
      <div class="media videocall-details">
        <div class="usersprof">
          <div
            class="profile"
            :style="[
              { 'background-image': 'url(' + getImgUrl('avtar/2.jpg') + ')' },
              styleObject,
            ]"
          ></div>
          <div
            class="profile"
            :style="[
              { 'background-image': 'url(' + getImgUrl('avtar/3.jpg') + ')' },
              styleObject,
            ]"
          ></div>
        </div>
        <div class="media-body">
          <h5>Josephin water</h5>
          <h6>America ,California</h6>
        </div>
        <div id="basicUsage1">00:00:00</div>
        <div class="zoomcontent">
          <a class="text-dark" @click="toggleFullScreen()"
            ><img
              src="../../../assets/images/logo/maximize.svg"
              alt="zoom screen"
          /></a>
        </div>
      </div>
      <div class="center-con text-center">
        <ul>
          <li>
            <a
              class="icon-btn btn-light button-effect pause"
              href="javascript:void(0)"
              ><i class="ti-control-pause"></i
            ></a>
          </li>
          <li>
            <a
              class="icon-btn btn-danger button-effect btn-xl is-animating"
              href="javascript:void(0)"
              @click="hide()"
              ><feather type="phone"></feather
            ></a>
          </li>
          <li>
            <a
              class="icon-btn btn-light button-effect mic"
              href="javascript:void(0)"
              ><i class="fa fa-microphone"></i
            ></a>
          </li>
        </ul>
      </div>
    </div>
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
      this.$refs.videocall.show();
    },
    hide() {
      this.$refs.videocall.hide();
    },
    toggleFullScreen() {
      if (
        document.querySelector(".modal-dialog").classList.contains("active")
      ) {
        document.querySelector(".modal-dialog").className =
          "modal-dialog viddiolog fade show  modal-dialog-centered";
      } else {
        document.querySelector(".modal-dialog").className =
          "modal-dialog viddiolog fade show active modal-dialog-centered";
      }
    },
    getImgUrl(path) {
      return require("../../../assets/images/" + path);
    },
  },
};
</script>
