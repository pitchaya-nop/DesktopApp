<template>
  <!-- Left-Sidebar Settings's Chat start -->
  <div class="setting-block">
    <div class="block" :class="activesetting == 2 ? 'open' : ''">
      <div class="media">
        <div class="media-body">
          <h3>Chat</h3>
        </div>
        <div class="media-right">
          <a
            class="icon-btn btn-outline-light btn-sm pull-right previous"
            href="javascript:void(0)"
            @click="activeSettingmenu(0)"
          >
            <feather type="chevron-left" size="15" height="15"> </feather
          ></a>
        </div>
      </div>
      <ul class="help">
        <li>
          <h5>Chat Backup</h5>
          <ul class="switch-list">
            <li>
              <b-form-checkbox
                class="js-switch5"
                name="check-button"
                switch
                value="1"
                checked="1"
              >
                <h5>Auto Backup</h5>
              </b-form-checkbox>
            </li>
            <li>
              <b-form-checkbox class="js-switch6" name="check-button" switch>
                <h5>Include document</h5>
              </b-form-checkbox>
            </li>
            <li>
              <b-form-checkbox class="js-switch7" name="check-button" switch>
                <h5>Include Videos</h5>
              </b-form-checkbox>
            </li>
          </ul>
        </li>
        <li>
          <h5>Chat wallpaper</h5>
          <ul class="wallpaper">
            <li
              v-for="item in allwallpaper"
              :key="item.id"
              @click="activeWallpaper(item.id)"
              :style="[
                { 'background-image': 'url(' + getImgUrl(item.img) + ')' },
                styleObject,
              ]"
            ></li>
          </ul>
        </li>
        <li>
          <h5><a href="javascript:void(0)">Archive all chat</a></h5>
        </li>
        <li>
          <h5><a href="javascript:void(0)"> Clear all chats</a></h5>
        </li>
        <li>
          <h5>
            <a class="font-danger" href="javascript:void(0)"
              >Delete all chats</a
            >
          </h5>
        </li>
      </ul>
    </div>
    <div class="media">
      <div class="media-body">
        <h3>Chat</h3>
        <h4>Control Your Chat Backup</h4>
      </div>
      <div class="media-right">
        <a
          class="icon-btn btn-outline-light btn-sm pull-right next"
          href="javascript:void(0)"
          @click="activeSettingmenu(2)"
        >
          <feather type="chevron-right" size="15" height="15"></feather
        ></a>
      </div>
    </div>
  </div>
  <!-- Left-Sidebar Settings's Chat end -->
</template>

<script>
import { mapState } from "vuex";

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
  computed: {
    ...mapState({
      activesetting: (state) => state.common.activesetting,
      allwallpaper: (state) => state.common.allwallpaper,
    }),
  },
  methods: {
    activeSettingmenu(id) {
      this.$store.state.common.activesetting = id;
    },
    activeWallpaper(index) {
      this.$store.state.common.chatwallpaperIndex = index;
      this.$store.state.common.chatwallpapergrandiant = "";
      this.$store.dispatch("layout/setwallpaper", index);
    },
     getImgUrl(path) {
      return require("@/assets/images/" + path);
    },
  },
};
</script>
