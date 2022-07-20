<template>
  <!-- Left-Sidebar Contact List start -->
  <div
    class="contact-list-tab dynemic-sidebar custom-scroll"
    :class="activesidebar == 11 ? 'active' : ''"
    id="contact-list"
  >
    <div class="theme-title">
      <div class="media">
        <div>
          <h2>Contact</h2>
          <h4>Start talking now</h4>
        </div>
        <div class="media-body text-right">
          <a
            class="icon-btn btn-outline-light btn-sm m-r-15 search"
            href="javascript:void(0)"
            @click="openSeachbar()"
          >
            <feather type="search" size="15" height="15"></feather
          ></a>
          <form
            class="form-inline search-form"
            :class="openSearch ? 'open' : ''"
          >
            <div class="form-group">
              <input
                class="form-control-plaintext"
                type="search"
                placeholder="Search.."
              />
              <div
                class="icon-close close-search"
                @click="openSearch = false"
              ></div>
            </div>
          </form>
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
      <li v-for="(user, index) in contacts" :key="user.id">
        <div class="chat-box">
          <div
            class="profile"
            :class="user.profile"
            :style="[
              { 'background-image': 'url(' + getImgUrl(user.img) + ')' },
              styleObject,
            ]"
          ></div>
          <div class="details">
            <h5>{{ user.name }}</h5>
            <h6>{{ user.status }}</h6>
          </div>
          <div class="date-status">
            <h6>{{ user.date }}</h6>
            <div v-html="user.active"></div>
          </div>
        </div>
      </li>
    </ul>
  </div>
  <!-- Left-Sidebar Contact List end -->
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
      contacts: (state) => state.sidebar.contact,
    }),
  },
  methods: {
    getImgUrl(path) {
      return require("../../../assets/images/" + path);
    },
    openSeachbar() {
      this.openSearch = !this.openSearch;
    },
    activemenu(id) {
      this.$store.state.common.activesidebar = id;
    },
  },
};
</script>
