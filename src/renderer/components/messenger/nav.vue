<template>
  <!-- Main Left Sidebar Menu start -->
  <nav class="main-nav custom-scroll" :class="toggleleftside">
    <div class="logo-warpper">
      <a>
        <nuxt-link to="/">
          <!-- <img src="../../assets/images/logo/logo.png" alt="logo" />
           -->
          <img src="../../assets/images/logo/logo-circle.png" alt="logo" />
        </nuxt-link>
      </a>
    </div>
    <div class="sidebar-main">
      <ul class="sidebar-top">
        <li>
          <a
            class="icon-btn btn-light button-effect"
            :class="activesidebar == 1 ? 'active' : ''"
            href="javascript:void(0)"
            @click="activemenu(1), setOfficial(null), setProfile(), setroom()"
            v-b-tooltip.hover.topleft
            title="Contacts"
            data-tippy-content="Contacts"
          >
            <!-- <i class="fa fa-users"> </i> -->
            <feather type="users"></feather>
          </a>
        </li>
        <li style="padding-bottom: 30px">
          <a
            class="icon-btn btn-light button-effect"
            :class="activesidebar == 2 ? 'active' : ''"
            href="javascript:void(0)"
            @click="
              resetsession();
              activemenu(2, false), setOfficial(null), setProfile(), setroom();
            "
            v-b-tooltip.hover.topleft
            title="Chats"
            data-tippy-content="Chats"
          >
            <!-- <i class="fa fa-users"> </i> -->
            <feather type="message-square"></feather>
          </a>
        </li>
        <hr />
        <template>
          <li v-for="(oa, index) in currentOfficial.listoa" :key="index">
            <a
              class="icon-btn btn-light button-effect active-official"
              :class="activesidebar == 3 && oa.id == profile.id ? 'active' : ''"
              :style="
                oa.avatars.source != 'null'
                  ? [
                      { 'background-image': 'url(' + oa.avatars.source + ')' },
                      styleObject,
                    ]
                  : [
                      {
                        'background-image':
                          'url(/_nuxt/src/renderer/assets/images/media/1.jpg)',
                      },
                      styleObject,
                    ]
              "
              href="javascript:void(0)"
              @click="
                resetsession();
                activemenu(3, false),
                  setOfficial(oa),
                  setProfileOa(oa),
                  setroom();
              "
              v-b-tooltip.hover.topleft
              :title="oa.displayname"
              data-tippy-content="Chats"
            >
            </a>
          </li>
        </template>
      </ul>
      <ul class="sidebar-bottom">
        <!-- <li><a class="icon-btn btn-light button-effect mode" href="javascript:void(0)" v-b-tooltip.hover.topright title="Theme Mode" data-tippy-content="Theme Mode" data-intro="Change mode" @click="customizeMixLayout()"><i class="fa" :class="this.mixLayout===''? 'fa-moon-o': 'fa-lightbulb-o'"></i></a></li> -->
        <li>
          <div @click="handleSingOut" class="icon-btn btn-light button-effect">
            <feather type="log-out"></feather>
          </div>
        </li>
      </ul>
    </div>
  </nav>
  <!-- Main Left Sidebar Menu end -->
</template>

<script>
import { mapState } from "vuex";
// const Realm = require("realm");
import { socketDisconnect } from "../../plugins/socketio.service";
export default {
  data() {
    return {
      mixLayout: "",
      official: [],
      styleObject: {
        "background-size": "cover",
        "background-position": "center",
      },
      status: "avtar/2.jpg",
    };
  },
  computed: {
    ...mapState({
      toggleleftside: (state) => state.common.toggleleftside,
      activesidebar: (state) => state.common.activesidebar,
      logintype: (state) => state.auth.logintype,
      profile: (state) => state.auth.profile,
      currentOfficial() {
        return (this.official = this.$store.getters["official/officialList"]);
      },
    }),
  },
  methods: {
    getImgUrl(path) {
      return require("@/assets/images/" + path);
    },
    setOfficial(data) {
      this.$store.dispatch("auth/setOfficialProfile", data);
      if (data == null) {
        this.$store.state.room.roomtype = "user";
      } else {
        this.$store.state.room.roomtype = "official";
      }
    },
    setroom() {
      this.addDataToRealm(this.profile, "updateUnreadcount");
      this.addDataToRealm(this.profile, "updateLastmessage");
      this.setRooms();
    },
    activemenu(id, type) {
      // console.log(type);
      this.$store.state.common.activesidebar = id;
      this.$store.state.common.iscontact = type;
    },
    async setProfile() {
      try {
        const response = await this.$store.dispatch("auth/getMe");
        if (response.message === "success") {
          this.$store.dispatch("auth/setProfile", response.data.userProfile);
        }
      } catch (error) {
        console.log(error);
      }
    },
    setProfileOa(data) {
      this.$store.dispatch("auth/setProfile", data);
    },

    resetsession() {
      // this.$store.dispatch("chat/setUnreadtime", null);
      // this.$store.dispatch("chat/setMessagefirstunread", null);
      // this.$store.dispatch("chat/setSessionChat", null);
      // this.$store.dispatch("chat/setChat", null);
      this.$store.dispatch("chat/resetState");
      this.$store.state.chat.activeuser = null;
    },
    customizeMixLayout() {
      if (this.mixLayout === "") {
        this.mixLayout = "dark";
      } else {
        this.mixLayout = "";
      }
      this.$store.dispatch("layout/setLayout", this.mixLayout);
    },

    async handleSingOut() {
      // await this.getdataDB.then((data) => {
      //   let rooms = data.objects("ROOM");
      //   rooms.map((data) => {
      //     this.sockets.unsubscribe(`messages:${data.sessionId}`);
      //     this.sockets.unsubscribe(`messages:update:${data.sessionId}`);
      //     this.sockets.unsubscribe(`messages:read:${data.sessionId}`);
      //   });
      // });

      // this.$socket.disconnect();
      socketDisconnect()
      this.$store.state.common.activesidebar = 0;
      this.$store.state.common.iscontact = false;
      this.$store.dispatch("chat/resetState");
      this.$store.dispatch("contact/resetState");
      this.$store.dispatch("room/resetState");

      this.addDataToRealm("", "deleteData");
      this.$router.push("/authentication/login");
      this.$store.dispatch("auth/setToken", "");
      this.$store.dispatch("auth/setProfile", "");
      // this.sockets.unsubscribe("socketId");
      // this.sockets.unsubscribe(`rooms:${window.localStorage.getItem("_ref")}`);
      window.localStorage.removeItem("auth");
    },
  },
};
</script>