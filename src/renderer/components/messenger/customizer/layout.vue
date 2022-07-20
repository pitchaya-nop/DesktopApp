<template>
  <!--Customizer Layout start -->
  <div class="theme-layout">
    <h5>Layout</h5>
    <ul>
      <li
        :class="activelayout == '' ? 'active' : ''"
        @click="activeLayout('')"
        data-attr=""
      >
        <div class="sidebar"></div>
        <div class="sidebar-content"></div>
      </li>
      <li
        :class="activelayout == 'dark-sidebar' ? 'active' : ''"
        @click="activeLayout('dark-sidebar')"
        data-attr="dark-sidebar"
      >
        <div class="sidebar"></div>
        <div class="sidebar-content"></div>
      </li>
      <li
        :class="activelayout == 'dark' ? 'active' : ''"
        @click="activeLayout('dark')"
        data-attr="dark"
      >
        <div class="sidebar"></div>
        <div class="sidebar-content"></div>
      </li>
      <li
        :class="activelayout == 'colorfull' ? 'active' : ''"
        @click="activeLayout('colorfull')"
        data-attr="colorfull"
      >
        <div class="sidebar"></div>
        <div class="sidebar-content"></div>
      </li>
    </ul>
  </div>
  <!--Customizer Layout end -->
</template>

<script>
import layout from "../../../data/layout.json";
import { mapState } from "vuex";
export default {
  data() {
    return {
      activelayout: layout.config.sidebar_layout,
    };
  },
  computed: {
    ...mapState({
      activerightsidebarmenu: (state) => state.common.activerightsidebarmenu,
      togglerightside: (state) => state.common.togglerightside,
    }),
  },
  methods: {
    activeLayout(index) {
      this.activelayout = index;
      if (
        document.getElementById("body").classList.contains("dark-sidebar") ||
        document.getElementById("body").classList.contains("dark") ||
        document.getElementById("body").classList.contains("colorfull") ||
        document.getElementById("body").classList.contains("undefined")
      ) {
        document
          .getElementById("body")
          .classList.remove("dark-sidebar", "dark", "colorfull", "undefined");
      }
      if (index == "") {
        document.getElementById("body").classList.add("undefined");
      } else if (index == "dark-sidebar") {
        document.getElementById("body").classList.add("dark-sidebar");
      } else if (index == "dark") {
        document.getElementById("body").classList.add("dark");
      } else if (index == "colorfull") {
        document.getElementById("body").classList.add("colorfull");
      }
      this.$store.dispatch("layout/setsidebar_layout", index);
      document.querySelector(".app-sidebar").classList.add("active");
      document.body.classList.remove("menu-active");
      document.body.classList.add("sidebar-active");
      this.$store.state.common.togglerightside = true;
    },
  },
};
</script>
