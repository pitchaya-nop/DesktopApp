<template>
  <li>
    <b-dropdown
      v-b-tooltip.hover.bottomleft
      title="Quick action"
      size="lg"
      variant="link"
      toggle-class="text-decoration-none"
      no-caret
    >
      <template #button-content>
        <feather type="more-vertical" size="15" height="15"></feather>
      </template>
      <b-dropdown-item href="javascript:void(0)" @click="openprofile()"
        ><a
          class="icon-btn btn-outline-primary button-effect btn-sm"
          href="javascript:void(0)"
          ><feather type="user" size="15" height="15"></feather
        ></a>
        <h5>Profile</h5></b-dropdown-item
      >
      <b-dropdown-item href="javascript:void(0)"
        ><a
          class="icon-btn btn-outline-danger button-effect btn-sm"
          href="javascript:void(0)"
          ><feather type="trash-2" size="15" height="15"></feather
        ></a>
        <h5>Delete</h5></b-dropdown-item
      >
      <b-dropdown-item href="javascript:void(0)"
        ><a
          class="icon-btn btn-outline-light button-effect btn-sm"
          href="javascript:void(0)"
          ><feather type="slash" size="15" height="15"></feather
        ></a>
        <h5>Block</h5></b-dropdown-item
      >
    </b-dropdown>
  </li>
</template>

<script>
import { mapState } from "vuex";
export default {
  computed: {
    ...mapState({
      showprofilemenu: (state) => state.common.showprofilemenu,
    }),
  },
  methods: {
    toggle() {
      this.$store.state.common.showprofilemenu =
        !this.$store.state.common.showprofilemenu;
    },
    openprofile() {
      document.querySelector(".chitchat-main").classList.add("small-sidebar");
      if (document.getElementById("body").classList.contains("menu-active")) {
        document.body.classList.remove("menu-active");
        document.querySelector(".app-sidebar").classList.add("active");
      } else {
        document.body.classList.add("menu-active");
        document.querySelector(".app-sidebar").classList.remove("active");
      }
    },
  },
};
</script>
