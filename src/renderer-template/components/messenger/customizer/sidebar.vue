<template>
  <!--Customizer Sidebar start -->
  <div class="sidebar-setting">
    <h5>Sidebar</h5>
    <ul>
      <li
        class="three-column"
        :class="activesidebar == 'on' ? 'active' : ''"
        @click="activeSidebar('on')"
      >
        <div class="sm-sidebar"></div>
        <div class="sidebar"></div>
        <div class="sidebar-content"></div>
      </li>
      <li
        class="two-column"
        :class="activesidebar == '' ? 'active' : ''"
        @click="activeSidebar('')"
      >
        <div class="sidebar"></div>
        <div class="sidebar-content"></div>
      </li>
    </ul>
  </div>
  <!--Customizer Sidebar end -->
</template>

<script>
import layout from '../../../data/layout.json'
export default {
  data() {
    return {
      activesidebar: layout.config.sidebar_setting,
    };
  },
  methods: {
    activeSidebar(index) {
      this.activesidebar = index;
      if (index == 'on') {
        this.$store.state.common.toggleleftside = 'on';
      } else {
        this.$store.state.common.toggleleftside = '';
      }
      this.$store.dispatch("layout/setsidebar_setting", index);
    },
  },
};
</script>
