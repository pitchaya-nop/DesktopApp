<template>
  <b-modal
    content-class="modal-space"
    class="modal fade audiorcvcall"
    id="audiorcvcall"
    ref="audiorcvcall"
    tabindex="-1"
    role="dialog"
    aria-hidden="true"
    hide-footer
    hide-header
    hide-header-close
    centered
  >
    <div
      class="audiocall2 call-modal"
      :style="[
        {
          'background-image':
            'url(' + getImgUrl('avtar/big/audiocall.jpg') + ')',
        },
        styleObject,
      ]"
    >
      <div class="center-con text-center">
        <div id="basicUsage2">00:00:00</div>
        <div class="title2">Josephin water</div>
        <h6>log angelina california</h6>
        <ul>
          <li>
            <a
              class="icon-btn btn-light button-effect mute"
              href="javascript:void(0)"
              v-b-tooltip.hover.topleft
              title="Mute"
              data-tippy-content="Mute"
              ><i class="fa fa-microphone"></i
            ></a>
          </li>
          <li>
            <a
              class="icon-btn btn-light button-effect mute"
              href="javascript:void(0)"
              v-b-tooltip.hover.topleft
              title="Speaker"
              data-tippy-content="Speaker"
              ><i class="fa fa-volume-up"></i
            ></a>
          </li>
          <li>
            <a
              class="icon-btn btn-danger button-effect btn-xl is-animating"
              href="javascript:void(0)"
              @click="hide()"
              v-b-tooltip.hover.topleft
              title="Hangup"
              data-tippy-content="Hangup"
              data-dismiss="modal"
            >
              <feather type="phone"></feather
            ></a>
          </li>
          <li>
            <a
              class="icon-btn btn-light button-effect"
              href="javascript:void(0)"
              v-b-tooltip.hover.topleft
              title="Add Call"
              data-tippy-content="Add Call"
              ><feather type="user-plus" size="15" height="15"></feather
            ></a>
          </li>
          <li>
            <a
              class="icon-btn btn-light button-effect"
              href="javascript:void(0)"
              v-b-tooltip.hover.topleft
              title="Pause"
              data-tippy-content="Pause"
              ><feather type="pause" size="15" height="15"></feather
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
      this.$refs.audiorcvcall.show();
    },
    hide() {
      this.$refs.audiorcvcall.hide();
    },
    getImgUrl(path) {
      return require("../../../assets/images/" + path);
    },
  },
};
</script>
