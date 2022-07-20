<template>
  <div>
    <b-modal
      content-class="modal-space"
      class="modal fade"
      id="audiocall"
      ref="audiocall"
      tabindex="-1"
      role="dialog"
      aria-hidden="true"
      hide-footer
      hide-header
      hide-header-close
      centered
    >
      <div
        class="audiocall1 call-modal"
        :style="[
          {
            'background-image':
              'url(' + getImgUrl('avtar/big/audiocall.jpg') + ')',
          },
          styleObject,
        ]"
      >
        <div class="center-con text-center">
          <div class="title2">Josephin water</div>
          <h6>log angelina california</h6>
          <ul>
            <li>
              <a
                class="icon-btn btn-success button-effect btn-xl is-animating"
                @click="showAudio2Modal()"
                href="javascript:void(0)"
                data-toggle="modal"
                data-target="#audiorcvcall"
                data-dismiss="modal"
                ><feather type="phone"></feather
              ></a>
            </li>
            <li>
              <a
                class="icon-btn btn-danger button-effect btn-xl is-animating cancelcall"
                @click="hide()"
                href="javascript:void(0)"
                data-dismiss="modal"
                ><feather type="phone"></feather
              ></a>
            </li>
          </ul>
        </div>
      </div>
    </b-modal>

    <AudioCall2 ref="audio2Component" />
  </div>
</template>

<script>
import AudioCall2 from "./audiocall2.vue";

export default {
  components: {
    AudioCall2,
  },
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
      this.$refs.audiocall.show();
    },
    hide() {
      this.$refs.audiocall.hide();
    },
    showAudio2Modal() {
      this.hide();
      this.$refs.audio2Component.show();
    },
    getImgUrl(path) {
      return require("../../../assets/images/" + path);
    },
  },
};
</script>
