<template>
  <!-- Right-Sidebar Profile's PersonalInfo start -->
  <div class="contact-profile">
    <div class="theme-title">
      <div class="media">
        <div>
          <h2>Profile</h2>
          <h4>Personal Information</h4>
        </div>
        <div class="media-body text-right">
          <a
            class="icon-btn btn-outline-light btn-sm close-profile ml-3"
            href="javascript:void(0)"
          >
            <feather type="x" size="15" height="15" @click="close()"> </feather
          ></a>
        </div>
      </div>
    </div>
    <div class="details">
      <!-- <div
        class="contact-top"
        :style="[
          {
            'background-image': 'url(' + this.getImgUrl(currentChat.img) + ')',
          },
          styleObject,
        ]"
      ></div> -->
      <div class="name">
        <h3>{{ currentChat.name }}</h3>
        <h6>Add Description</h6>
      </div>
      <ul class="medialogo">
        <li>
          <a class="icon-btn btn-danger button-effect" href="https://www.google.com/"
            ><i class="fa fa-google"></i
          ></a>
        </li>
        <li>
          <a
            class="icon-btn btn-primary button-effect"
            href="https://twitter.com/"
            ><i class="fa fa-twitter"></i
          ></a>
        </li>
        <li>
          <a
            class="icon-btn btn-facebook button-effect"
            href="https://www.facebook.com/"
            ><i class="fa fa-facebook-f"></i
          ></a>
        </li>
      </ul>
    </div>
  </div>
  <!-- Right-Sidebar Profile's PersonalInfo end -->
</template>

<script>
import { mapState } from "vuex";
export default {
  data() {
    return {
      currentchat: [],
      styleObject: {
        "background-size": "cover",
        "background-position": "center",
        display: "block",
      },
    };
  },
  computed: {
    ...mapState({
      currentChat() {
        return (this.currentchat = this.$store.getters["chat/currentChat"]);
      },
    }),
  },
  methods: {
    getImgUrl(path) {
      return require("../../../../assets/images/" + path);
    },
    close() {
      document.querySelector(".app-sidebar").classList.add("active");
      document.body.classList.remove("menu-active");
      document.body.classList.add("sidebar-active");
      this.$store.state.common.togglerightside = true;

      this.$store.state.common.togglerightside =
        !this.$store.state.common.togglerightside;
      if (this.$store.state.common.togglerightside == false) {
        document.getElementById("body").classList.remove("sidebar-active");
        document.getElementById("body").classList.add("main-page");
      } else {
        document.getElementById("body").classList.remove("menu-active");
        document.getElementById("body").classList.remove("main-page");
        document.getElementById("body").classList.add("sidebar-active");
      }
    },
  },
};
</script>
