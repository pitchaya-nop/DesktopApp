<template>
  <!--Customizer Wallpaper start -->
  <div class="chat-wallpaper">
    <h5>Chat wallpaper</h5>
    <ul class="wallpaper">
      <li
        class="bg-color bg-default"
        :class="activewallpaper == 6 ? 'active' : ''"
        @click="activeWallpaper(6)"
      ></li>
      <li
        class="bg-size"
        :class="{ active: activewallpaper === item.id }"
        v-for="item in allwallpaper"
        :key="item.id"
        @click="activeWallpaper(item.id, item.img)"
        :style="[
          { 'background-image': 'url(' + getImgUrl(item.img) + ')' },
          styleObject,
        ]"
      ></li>
      <br />
      <li
        class="bg-color grediant-1"
        :class="activewallpaper == 7 ? 'active' : ''"
        @click="activeWallpaper(7)"
      ></li>
      <li
        class="bg-color grediant-2"
        :class="activewallpaper == 8 ? 'active' : ''"
        @click="activeWallpaper(8)"
      ></li>
      <li
        class="bg-color grediant-3"
        :class="activewallpaper == 9 ? 'active' : ''"
        @click="activeWallpaper(9)"
      ></li>
      <li
        class="bg-color grediant-4"
        :class="activewallpaper == 10 ? 'active' : ''"
        @click="activeWallpaper(10)"
      ></li>
      <li
        class="bg-color grediant-5"
        :class="activewallpaper == 11 ? 'active' : ''"
        @click="activeWallpaper(11)"
      ></li>
      <li
        class="bg-color grediant-6"
        :class="activewallpaper == 12 ? 'active' : ''"
        @click="activeWallpaper(12)"
      ></li>
    </ul>
  </div>
  <!--Customizer Wallpaper end -->
</template>

<script>
import { mapState } from "vuex";
export default {
  data() {
    return {
      activewallpaper: 6,
      styleObject: {
        "background-size": "cover",
        "background-position": "center center",
        display: "block",
      },
    };
  },
  computed: {
    ...mapState({
      allwallpaper: (state) => state.common.allwallpaper,
      chatwallpaperIndex: (state) => state.common.chatwallpaperIndex,
    }),
  },
  mounted() {
    this.activewallpaper = this.chatwallpaperIndex === 0 ? 6 : this.chatwallpaperIndex
  },
  methods: {
    activeWallpaper(index) {
      this.activewallpaper = index;
      if (index == 6) {
        this.$store.state.common.chatwallpaperIndex = 0;
        this.$store.state.common.chatwallpapergrandiant =
          "-webkit-gradient(linear, 0% 0%, 0% 100%, from(rgb(239, 247, 254)))";
        this.$store.dispatch("layout/setwallpaper", 0);
      } else if (index == 7) {
        this.$store.state.common.chatwallpaperIndex = 0;
        this.$store.state.common.chatwallpapergrandiant =
          "linear-gradient(359.3deg, rgba(28, 157, 234, 0.1) 1%, rgba(187, 187, 187, 0) 70.9%)";
        this.$store.dispatch("layout/setwallpaper", 0);
      } else if (index == 8) {
        this.$store.state.common.chatwallpaperIndex = 0;
        this.$store.state.common.chatwallpapergrandiant =
          "radial-gradient(328px at 2.9% 15%, rgb(191, 224, 251) 0%, rgb(232, 233, 251) 25.8%, rgb(252, 239, 250) 50.8%, rgb(234, 251, 251) 77.6%, rgb(240, 251, 244) 100.7%)";
        this.$store.dispatch("layout/setwallpaper", 0);
      } else if (index == 9) {
        this.$store.state.common.chatwallpaperIndex = 0;
        this.$store.state.common.chatwallpapergrandiant =
          "linear-gradient(109.6deg, rgb(223, 234, 247) 11.2%, rgb(244, 248, 252) 91.1%)";
        this.$store.dispatch("layout/setwallpaper", 0);
      } else if (index == 10) {
        this.$store.state.common.chatwallpaperIndex = 0;
        this.$store.state.common.chatwallpapergrandiant =
          "linear-gradient(-109.6deg, rgb(204, 228, 247) 11.2%, rgb(237, 246, 250) 100.2%)";
        this.$store.dispatch("layout/setwallpaper", 0);
      } else if (index == 11) {
        this.$store.state.common.chatwallpaperIndex = 0;
        this.$store.state.common.chatwallpapergrandiant =
          "radial-gradient(circle at 10% 20%, rgb(239, 246, 249) 0%, rgb(206, 239, 253) 90%)";
        this.$store.dispatch("layout/setwallpaper", 0);
      } else if (index == 12) {
        this.$store.state.common.chatwallpaperIndex = 0;
        this.$store.state.common.chatwallpapergrandiant =
          "radial-gradient(circle at 10% 20%, rgb(226, 240, 254) 0%, rgb(255, 247, 228) 90%)";
        this.$store.dispatch("layout/setwallpaper", 0);
      } else {
        this.$store.state.common.chatwallpaperIndex = index;
        this.$store.state.common.chatwallpapergrandiant = "";
        this.$store.dispatch("layout/setwallpaper", index);
      }
    },
    getImgUrl(path) {
      return require("@/assets/images/" + path);
    },
  },
};
</script>
