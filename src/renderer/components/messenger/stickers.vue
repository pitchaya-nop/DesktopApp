<template>
  <!-- Stickers start -->
  <div class="sticker-contain" :class="showsticker ? 'open' : ''">
    <div class="sticker-sub-contain custom-scroll">
      <ul>
        <li v-for="(sticker, index) in stickers" :key="index">
          <a href="javascript:void(0)" @click="addSticker(sticker.stic)">
            <img
              class="img-fluid"
              :src="getImgUrl(sticker.stic)"
              alt="sticker"
            />
          </a>
        </li>
      </ul>
    </div>
  </div>
  <!-- Stickers end -->
</template>

<script>
import { mapState } from "vuex";
import sticker from "../../data/sticker.json";

export default {
  data() {
    return {
      stickers: sticker,
    };
  },
  computed: {
    ...mapState({
      showsticker: (state) => state.common.showsticker,
      activechatType: (state) => state.common.activechatType,
    }),
  },
  methods: {
    getImgUrl(path) {
      return require("../../assets/images/" + path);
    },
    addSticker: function(path) {
      if (this.activechatType == 1) {
        this.$store.dispatch("chat/addSticker", path);
        var container = document.querySelector(".scrolltopdirectchat");
        setTimeout(function() {
          container.scrollBy({ top: 200, behavior: "smooth" });
        }, 310);
        setTimeout(function() {
          container.scrollBy({ top: 200, behavior: "smooth" });
        }, 1100);
      } else {
        this.$store.dispatch("groupchat/addSticker", path);
        var containerfluid = document.querySelector(".scrolltopgroupchat");
        setTimeout(function() {
          containerfluid.scrollBy({ top: 200, behavior: "smooth" });
        }, 310);
        setTimeout(function() {
          containerfluid.scrollBy({ top: 200, behavior: "smooth" });
        }, 1100);
      }
      this.$store.state.common.showsticker = false;
    },
  },
};
</script>
