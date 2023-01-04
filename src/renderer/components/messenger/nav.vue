<template>
  <!-- Main Left Sidebar Menu start -->
  <nav class="main-nav custom-scroll" :class="toggleleftside">
    <!-- <div class="logo-warpper">
      <a @click="openUrl">
        <img src="../../assets/images/logo/logo-circle.png" alt="logo" />
      </a>
    </div> -->
    <div class="sidebar-main">
      <ul class="sidebar-top custom-scroll">
        <!-- <button @click="deleteDB">Clear DB</button> -->
        <!-- <button @click="showuserlogin">get data userlogin</button> -->
        <!-- <li>
          <a
            class="icon-btn btn-light button-effect"
            :class="activesidebar == 1 ? 'active' : ''"
            href="javascript:void(0)"
            @click="activemenu(1), setOfficial(null), setProfile(), setroom()"
            v-b-tooltip.hover.topleft
            title="Contacts"
            data-tippy-content="Contacts"
          >
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
            
            <feather type="message-square"></feather>
          </a>
        </li> -->
        <!-- <hr /> -->
        <template>
          <!-- <li @click="clearDb">clear db</li> -->
          <li v-for="(oa, index) in currentOfficial.listoa" :key="index" style="position:relative">
            <div v-if="activesidebar == 3 && oa.id == profile.id" style="position:absolute;width:7px;height:28px;left:0;bottom:16px;background:#ffffff;border-top-right-radius: 3px;border-bottom-right-radius: 3px;"></div>
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
                        'background-image': 'url(' + getImgUrl() + ')',
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
              v-b-tooltip.hover.bottomleft
              :title="oa.displayname"
              data-tippy-content="Chats"
            >
            </a>
          </li>
        </template>
      </ul>

      <ul class="sidebar-bottom">
        <!-- <li><a class="icon-btn btn-light button-effect mode" href="javascript:void(0)" v-b-tooltip.hover.topright title="Theme Mode" data-tippy-content="Theme Mode" data-intro="Change mode" @click="customizeMixLayout()"><i class="fa" :class="this.mixLayout===''? 'fa-moon-o': 'fa-lightbulb-o'"></i></a></li> -->
        <!-- <li>
          <div @click="handleSingOut" class="icon-btn btn-light button-effect">
            <h2>...</h2>
          </div>
        </li> -->

        <li>
          <div @click="handleSingOut" class="icon-btn btn-light button-effect" style="background:transparent">
            <feather type="settings" size="25" stroke="white"></feather>
          </div>
        </li>
        <!-- <div class="drop-picker" style="position:fixed;left:25px;bottom:30px">
          <datepicker
            
            input-class="datepicker-here form-control digits"
          ></datepicker>
          <b-dropdown id="dropup-1">
            <b-dropdown-item>Logout </b-dropdown-item>
            <b-dropdown-item>ClearData Logout</b-dropdown-item>
          </b-dropdown>
        </div> -->
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
      show: false,
    };
  },
  computed: {
    ...mapState({
      toggleleftside: (state) => state.common.toggleleftside,
      activesidebar: (state) => state.common.activesidebar,
      openlogout: (state) => state.common.openlogout,
      logintype: (state) => state.auth.logintype,
      profile: (state) => state.auth.profile,
      userlogin: (state) => state.auth.userlogin,
      currentOfficial() {
        return (this.official = this.$store.getters["official/officialList"]);
      },
    }),
  },
  methods: {
    getImgUrl() {
      return require("../../assets/images/avtar/defaultimageoa.png");
    },
    getTimeToUtc() {
      var utcdate = new Date().toISOString().substr(0, 19).replace("T", " ");
      return utcdate;
    },
    openUrl() {
      require("electron").shell.openExternal(
        "https://official-dev.goochat.net"
      );
    },
    deleteDB() {
      this.addDataToRealm("", "deleteallData");
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
      console.log(data);

      this.$store.dispatch("room/setRoomDisplay", null);
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
    showuserlogin() {
      this.getdataDB.then((data) => {
        let userlogin = data.objects("LOGIN");
        userlogin.map((item) => {
          console.log(item);
        });
      });
    },
    clearDb() {
      this.ClearRealm();
    },
    async handleSingOut() {
      this.$store.state.common.openlogout =
        !this.$store.state.common.openlogout;
      
      // socketDisconnect();
      // if (this.userlogin != null) {
      //   let stamptime = {
      //     synctime: this.getTimeToUtc(),
      //     id: this.userlogin.id,
      //   };
      //   this.addDataToRealm(stamptime, "updateLogin");
      // }
      // this.$store.state.common.activesidebar = 0;
      // this.$store.state.common.iscontact = false;
      // this.$store.dispatch("chat/resetState");
      // this.$store.dispatch("contact/resetState");
      // this.$store.dispatch("room/resetState");
      // this.addDataToRealm("", "deleteData");
      // this.$store.dispatch("auth/setToken", "");
      // this.$store.dispatch("auth/setProfile", "");
      // window.localStorage.removeItem("auth");
      // this.$router.push("/authentication/login");
    },
  },
};
</script>