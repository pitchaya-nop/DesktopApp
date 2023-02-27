<template>
  <!-- Left-Sidebar Notifications start -->
  <div
    class="notification-tab dynemic-sidebar custom-scroll"
    :class="activesidebar == 5 ? 'active' : ''"
    id="notification"
  >
    <div class="theme-title">
      <div class="media">
        <div>
          <h2>Notification</h2>
          <h4>List of notification</h4>
        </div>
        <div class="media-body text-right">
          <a
            class="icon-btn btn-outline-light btn-sm close-panel"
            href="javascript:void(0)"
            @click="activemenu(0)"
            ><feather type="x" size="15" height="15"></feather
          ></a>
        </div>
      </div>
    </div>
    <ul class="chat-main">
      <li v-for="(user, index) in notifications" :key="user.id">
        <div class="chat-box notification">
          <div
            class="profile"
            :class="user.profile"
            :style="
              user.img
                ? [
                    { 'background-image': 'url(' + getImgUrl(user.img) + ')' },
                    styleObject,
                  ]
                : ''
            "
          >
            <span v-if="user.profile_tag">{{ user.profile_tag }}</span>
          </div>
          <div class="details">
            <span>{{ user.name }}</span>
            <h5>{{ user.status }}</h5>
            <p>{{ user.desc }}</p>
          </div>
          <div class="date-status">
            <h6>{{ user.time }}</h6>
          </div>
        </div>
      </li>
    </ul>
  </div>
  <!-- Left-Sidebar Notifications end -->
</template>

<script>
import { mapState } from "vuex";
export default {
  data() {
    return {
      openSearch: false,
      styleObject: {
        "background-size": "cover",
        "background-position": "center",
        display: "block",
      },
    };
  },
  computed: {
    ...mapState({
      activesidebar: (state) => state.common.activesidebar,
      notifications: (state) => state.sidebar.notification,
    }),
  },
  methods: {
    getImgUrl(path) {
      return require("../../../assets/images/" + path);
    },
    activemenu(id) {
      this.$store.state.common.activesidebar = id;
    },
  },
};
</script>
