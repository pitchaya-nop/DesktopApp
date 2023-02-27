<template>
  <!-- Main Chat container start -->
  <div>
    <client-only>
      <div class="chitchat-container sidebar-toggle">
        <Navbar />
        <LeftSideBar />
        <!-- <Chat /> -->
        <Profile />
        <RightSideBar />
      </div>
      <CustomizerSetting />
      <Customizer />
    </client-only>
  </div>
  <!-- Main Chat container end -->
</template>

<script>
import layout from "../../data/layout.json";
import { mapState } from "vuex";
import Navbar from "./nav.vue";
import LeftSideBar from "./left-sidebar.vue";
// import Chat from "./chat.vue";
import Profile from "./rightsidebar/profile/index.vue";
import RightSideBar from "../messenger/rightsidebar/index.vue";
import CustomizerSetting from "./customizer/customizesetting.vue";
import Customizer from "./customizer/index.vue";

export default {
  components: {
    Navbar,
    LeftSideBar,
    // Chat,
    Profile,
    RightSideBar,
    CustomizerSetting,
    Customizer,
  },
  data() {
    return {
      width: 0,
    };
  },
  head() {
    return {
      bodyAttrs: {
        class: `sidebar-active main-page ${layout.config.sidebar_layout}`,
        id: "body",
      },
      htmlAttrs: {
        class: `${layout.config.color}`,
      },
    };
  },
  computed: {
    ...mapState({
      toggleleftside: (state) => state.common.toggleleftside,
    }),
  },
  methods: {
    handleResize() {
      if (process.client) {
        this.width = window.innerWidth;
      } else {
        return null;
      }
    },
  },
  watch: {
    width() {
      window.addEventListener("resize", this.handleResize);
      this.handleResize();
      if (this.width < 992) {
        this.$store.state.common.toggleleftside = "";
      } else if (this.width > 992 && layout.config.sidebar_setting) {
        this.$store.state.common.toggleleftside = "on";
      } else {
        this.$store.state.common.toggleleftside = "";
      }
    },
  },
  unmounted() {
    window.removeEventListener("resize", this.handleResize);
  },
  mounted() {
    window.addEventListener("resize", this.handleResize);
    this.handleResize();
    if (this.width < 992) {
      this.$store.state.common.toggleleftside = "";
    } else if (this.width > 992 && layout.config.sidebar_setting) {
      this.$store.state.common.toggleleftside = "on";
    } else {
      this.$store.state.common.toggleleftside = "";
    }
    this.$store.state.common.activechat = true;
    this.$store.state.common.activesidebar = 1;
    this.$store.state.common.activechatType = 1;
  },
};
</script>
