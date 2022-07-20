<template>
  <!-- Left-Sidebar Settings start -->
  <div
    class="settings-tab dynemic-sidebar custom-scroll"
    :class="activesidebar == 6 ? 'active' : ''"
    id="settings"
  >
    <div class="theme-title">
      <div class="media">
        <div>
          <h2>Settings</h2>
          <h4>Change your app setting.</h4>
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
      <div class="profile-box">
        <div class="media" :class="edit ? 'open' : ''">
          <div
            class="profile"
            :style="[
              { 'background-image': 'url(' + getImgUrl('contact/2.jpg') + ')' },
              styleObject,
            ]"
          ></div>
          <div class="details">
            <h5>Josephin water</h5>
            <h6>Alabma , USA</h6>
          </div>
          <div class="details edit">
            <form class="form-radious form-sm">
              <div class="form-group mb-2">
                <input
                  class="form-control"
                  type="text"
                  name="username"
                  value="Josephin water"
                />
              </div>
              <div class="form-group mb-0">
                <input
                  class="form-control"
                  type="text"
                  name="address"
                  value="Alabma , USA"
                />
              </div>
            </form>
          </div>
          <div class="media-body">
            <a
              class="icon-btn btn-outline-light btn-sm pull-right edit-btn"
              href="javascript:void(0)"
              @click="edituser()"
            >
              <feather type="edit" size="15" height="15"></feather
            ></a>
          </div>
        </div>
      </div>
    </div>
    <Account />
    <Chat />
    <Integratin />
    <Help />
  </div>
  <!-- Left-Sidebar Settings end -->
</template>

<script>
import { mapState } from "vuex";
import Account from "./setting/account.vue";
import Chat from "./setting/chat.vue";
import Integratin from "./setting/integratin.vue";
import Help from "./setting/help.vue";

export default {
  components: {
    Account,
    Chat,
    Integratin,
    Help,
  },
  data() {
    return {
      edit: false,
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
    }),
  },
  methods: {
    edituser() {
      this.edit = !this.edit;
    },
    activemenu(id) {
      this.$store.state.common.activesidebar = id;
    },
    getImgUrl(path) {
      return require("../../../assets/images/" + path);
    },
  },
};
</script>
