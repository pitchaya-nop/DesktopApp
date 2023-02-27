<template>
  <div>
    <div class="chitchat-container sidebar-toggle">
      
      <Navbar />
      <LeftSideBar />
      <nuxt />
      <Profile />
      <RightSideBar />
    </div>
  </div>
</template>

<script>
import layout from "@/data/layout.json";
import { mapState } from "vuex";
import Navbar from "@/components/messenger/nav.vue";
import LeftSideBar from "@/components/messenger/left-sidebar.vue";
// import Chat from "@/components/messenger/chat.vue";
import Profile from "@/components/messenger/rightsidebar/profile/index.vue";
import RightSideBar from "@/components/messenger/rightsidebar/index.vue";
export default {
  components: {
    Navbar,
    LeftSideBar,
    // Chat,
    Profile,
    RightSideBar,
    // CustomizerSetting,
    // Customizer,
  },
  data() {
    return {
      width: 0,
    };
  },
  head() {
    return {
      bodyAttrs: {
        class: `main-page ${layout.config.sidebar_layout}`,
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

<style>
body {
  margin: 0 !important;
}
</style>
