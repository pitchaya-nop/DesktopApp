<template>
  <b-modal
    class="modal fade"
    id="confercall"
    ref="confercall"
    tabindex="-1"
    role="dialog"
    aria-hidden="true"
    hide-footer
    hide-header
    hide-header-close
    centered
  >
    <div
      class="conferencecall call-modal"
      :style="[
        {
          'background-image':
            'url(' + getImgUrl('avtar/big/audiocall.jpg') + ')',
        },
        styleObject,
      ]"
    >
      <div class="center-con text-center">
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
          <div
            class="profile"
            :style="[
              { 'background-image': 'url(' + getImgUrl('avtar/5.jpg') + ')' },
              styleObject,
            ]"
          ></div>
          <div
            class="profile"
            :style="[
              {
                'background-image':
                  'url(' + getImgUrl('avtar/big/audiocall.jpg') + ')',
              },
              styleObject,
            ]"
          ></div>
        </div>
        <p>Incoming Call</p>
        <h3>Conference Call</h3>
        <ul>
          <li>
            <a
              class="
                icon-btn
                btn-danger
                button-effect
                btn-xl
                is-animating
                cancelcall
              "
              @click="hide()"
              href="javascript:void(0)"
              data-dismiss="modal"
              ><feather type="phone"></feather
            ></a>
          </li>
          <li>
            <a
              class="icon-btn btn-success button-effect btn-xl is-animating"
              href="javascript:void(0)"
            >
              <feather type="video"></feather
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
      this.$refs.confercall.show();
    },
    hide() {
      this.$refs.confercall.hide();
    },
    getImgUrl(path) {
      return require("../../../assets/images/" + path);
    },
  },
};
</script>
