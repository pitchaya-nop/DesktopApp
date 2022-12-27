<template>
  <!-- Main Chat Left Sidebar start -->
  <aside class="chitchat-left-sidebar left-disp" style="position: relative">
    <div id="popuplogout" class="logout-area" v-if="openlogout">
      <div class="logoutoption" @click="logout"><a>Logout</a></div>
      <div class="logoutoption" @click="logoutclear">
        <a>Logout and Clear Data</a>
      </div>
    </div>
    <div v-if="activesidebar == 1">
      <Contacts />
    </div>
    <div v-if="activesidebar == 2 || activesidebar == 3">
      <Chats />
    </div>
    <div></div>
    <!-- <Favourite />
    <Documents />
    <ContactList />
    <Notifications />
    <Settings />
    <Status /> -->
  </aside>
  <!-- Main Chat Left Sidebar end -->
</template>

<script>
// import Status from "./lefsidebar/status.vue";
// import Settings from "./lefsidebar/settings.vue";
// import Notifications from "./lefsidebar/notification.vue";
// import ContactList from "./lefsidebar/contact_list.vue";
// import Documents from "./lefsidebar/document.vue";
// import Favourite from "./lefsidebar/favourite.vue";
import Contacts from "./lefsidebar/contacts.vue";
import Chats from "./lefsidebar/chats.vue";
import { mapState } from "vuex";
import { socketDisconnect } from "../../plugins/socketio.service";
export default {
  components: {
    // Status,
    // Settings,
    // Notifications,
    // ContactList,
    // Documents,
    // Favourite,
    Contacts,
    Chats,
  },
  computed: {
    ...mapState({
      activesidebar: (state) => state.common.activesidebar,
      openlogout: (state) => state.common.openlogout,
    }),
  },
  methods: {
    logout() {
      socketDisconnect();
      if (this.userlogin != null) {
        let stamptime = {
          synctime: this.getTimeToUtc(),
          id: this.userlogin.id,
        };
        this.addDataToRealm(stamptime, "updateLogin");
      }
      this.$store.state.common.activesidebar = 2;
      this.$store.state.common.openlogout =
        !this.$store.state.common.openlogout;
      this.$store.state.common.iscontact = false;
      this.$store.dispatch("chat/resetState");
      this.$store.dispatch("contact/resetState");
      this.$store.dispatch("room/resetState");
      // this.addDataToRealm("", "deleteData");
      this.$store.dispatch("auth/setToken", "");
      this.$store.dispatch("auth/setProfile", "");
      this.$store.dispatch("auth/setUserLogin", "");
      this.$store.dispatch("official/setOfficial", null);
      window.localStorage.removeItem("auth");
      this.$router.push("/authentication/login");
    },
    logoutclear() {
      socketDisconnect();
      if (this.userlogin != null) {
        let stamptime = {
          synctime: this.getTimeToUtc(),
          id: this.userlogin.id,
        };
        this.addDataToRealm(stamptime, "updateLogin");
      }
      this.addDataToRealm("", "deleteData");
      this.$store.state.common.activesidebar = 2;
      this.$store.state.common.openlogout =
        !this.$store.state.common.openlogout;
      this.$store.state.common.iscontact = false;
      this.$store.dispatch("chat/resetState");
      this.$store.dispatch("contact/resetState");
      this.$store.dispatch("room/resetState");

      this.$store.dispatch("auth/setToken", "");
      this.$store.dispatch("auth/setProfile", "");
      this.$store.dispatch("auth/setUserLogin", "");
      this.$store.dispatch("official/setOfficial", null);
      window.localStorage.removeItem("auth");
      this.$router.push("/authentication/login");
    },
  },
  mounted() {
    // document
    //   .querySelector("logout-area")
    //   .addEventListener("focusout", (event) => {
    //     console.log("focusout");
    //     console.log(event);
    //   });
  },
  beforeDestroy() {
    // document
    //   .querySelector(".scrolltopdirectchat")
    //   .removeEventListener("scroll", this.addMessage, false);
  },
  destroyed() {
    // document
    //   .querySelector(".scrolltopdirectchat")
    //   .removeEventListener("scroll", this.addMessage, false);
  },
};
</script>
