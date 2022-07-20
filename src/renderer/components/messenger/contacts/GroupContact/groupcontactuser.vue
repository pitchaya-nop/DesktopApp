<template>
  <!--Group Chat User start -->
  <div
    class="tab-pane fade"
    :class="activechatType == 2 ? 'show active' : ''"
    id="group"
    role="tabpanel"
    aria-labelledby="group-tab"
  >
    <div class="search2">
      <div>
        <div class="input-group">
          <div class="input-group-append">
            <span class="input-group-text"><i class="fa fa-search"></i></span>
          </div>
          <input class="form-control" type="text" placeholder="Search" />
        </div>
      </div>
    </div>
    <ul class="group-main menu-trigger">
      <li
        :class="{ active: activeIndex === index }"
        data-to="group_chat"
        v-for="(user, index) in chatuser"
        :key="user.id"
        @click="setActive(index), setActiveuser(user.id)"
      >
        <div class="group-box">
          <div
            class="profile"
            :class="user.profile ? user.profile : ''"
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
            <h5>{{ user.name }}</h5>
            <h6>{{ user.status }}</h6>
          </div>
          <div class="date-status" v-if="user.group">
            <ul class="grop-icon">
              <li>
                <a
                  class="group-tp"
                  href="javascript:void(0)"
                  data-tippy-content="Josephin"
                >
                  <img
                    src="../../../../assets/images/contact/1.jpg"
                    alt="group-icon-img"
                /></a>
              </li>
              <li>
                <a
                  class="group-tp"
                  href="javascript:void(0)"
                  data-tippy-content="Jony "
                >
                  <img
                    src="../../../../assets/images/contact/2.jpg"
                    alt="group-icon-img"
                /></a>
              </li>
              <li>
                <a
                  class="group-tp"
                  href="javascript:void(0)"
                  data-tippy-content="Pabelo"
                >
                  <img
                    src="../../../../assets/images/contact/3.jpg"
                    alt="group-icon-img"
                /></a>
              </li>
              <li>+ {{ user.group }}</li>
            </ul>
          </div>
        </div>
      </li>
    </ul>
  </div>
  <!--Group Chat User end -->
</template>

<script>
import { mapState } from "vuex";

export default {
  data() {
    return {
      activeIndex: 0,
      styleObject: {
        "background-size": "cover",
        "background-position": "center",
        display: "block",
      },
    };
  },
  computed: {
    ...mapState({
      chatuser: (state) => state.groupchat.users,
      activechatType: (state) => state.common.activechatType,
    }),
  },
  methods: {
    getImgUrl(path) {
      return require("../../../../assets/images/" + path);
    },
    setActiveuser: function(id) {
      this.$store.dispatch("groupchat/setActiveuser", id);
      if (process.client) {
        this.width = window.innerWidth;
        if (this.width < 992) {
          document
            .querySelector(".sidebar-toggle")
            .classList.add("mobile-menu");
        }
      } else {
        return null;
      }
      this.$store.state.common.showsticker = false;
      this.$store.state.common.showemogi = false;
      this.$store.state.common.showcontactcontent = false;
    },
    setActive(index) {
      this.activeIndex = index;
    },
  },
};
</script>
