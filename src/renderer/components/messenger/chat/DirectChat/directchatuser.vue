<template>
  <!--Direct Chat User start -->

  <div>
    <!-- <div
      style="
        position: fixed;
        bottom: 50px;
        left: 85px;
        width: auto;
        border: 1px solid #828282;
        background: #fff;
        z-index: 10000;
        display: flex;
        flex-direction: column;
        border-radius: 3px;
      "
      v-if="openlogout"
    >
      <div style="padding: 15px" @click="logout"><a>Logout</a></div>
      <div style="padding: 15px; padding-top: 0" @click="logoutclear">
        <a>Logout and Clear Data</a>
      </div>
    </div> -->
    <div class="search2" v-if="officialprofile != null">
      <div>
        <div class="input-group">
          <div class="input-group-append">
            <span class="input-group-text"
              ><feather type="search" size="15" height="15"></feather
            ></span>
          </div>

          <input
            class="form-control"
            type="text"
            placeholder="Search"
            v-model="Findroom"
          />
        </div>
      </div>
    </div>

    <li
      :class="{ active: sessionroom === user.sessionid }"
      v-for="(user, index) in currentRoom.room"
      :key="index"
      @click="
        setActive(index),
          setActiveuser(user.id, user),
          setSeesionuser(user.sessionid),
          setBlockroom(user.isblock);
        setChatuser(user.sessionid, user.roomtype), readMessage(user.sessionid);
      "
    >
      <div class="chat-box">
        <div class="media" style="align-items: center; overflow: hidden">
          <div
            class="profile"
            :style="
              user.sessiontype == 'CHAT'
                ? user.user.avatar != 'null' && user.isblock != true
                  ? [
                      {
                        'background-image': 'url(' + user.user.avatar + ')',
                      },
                      styleObject,
                    ]
                  : [
                      {
                        'background-image': 'url(' + getImgUrl() + ')',
                      },
                      styleObject,
                    ]
                : user.sessiontype == 'GUEST'
                ? [
                    {
                      'background-image': 'url(' + getImgUrl() + ')',
                    },
                    styleObject,
                  ]
                : [
                    {
                      'background-image': 'url(' + getImgUrl() + ')',
                    },
                    styleObject,
                  ]
            "
          >
            <!-- user.sessiontype == 'GROUP'
                ? user.groupavatar.source
                  ? [
                      {
                        'background-image':
                          'url(' + user.groupavatar.source + ')',
                      },
                      styleObject,
                    ]
                  : [
                      {
                        'background-image':
                          'url(' + getImgUrl() + ')',
                      },
                      styleObject,
                    ]
                : [
                    {
                      'background-image':
                        'url(' + getImgUrl() + ')',
                    },
                    styleObject,
                  ] -->
          </div>
          <div class="details" style="overflow: hidden">
            <h5 style="overflow: hidden; text-overflow: ellipsis">
              {{
                user.isblock
                  ? "UNKNOWN"
                  : user.sessiontype == "CHAT"
                  ? user.user.displayName
                  : user.sessiontype == "GROUP"
                  ? user.groupname
                  : user.sessiontype == "GUEST"
                  ? user.guestUniqueName
                  : ""
              }}
            </h5>
            <h6>{{ user.lastmessage }}</h6>
          </div>
          <div class="date-status">
            <div>
              <span>{{
                user.lastmessagetime != "" ? infoTime(user.lastmessagetime) : ""
              }}</span>
            </div>
            <div>
              <span
                class="unreadcount"
                v-if="user.unreadcount > 0 && sessionroom != user.sessionid"
              >
                {{ user.unreadcount > 999 ? "999+" : user.unreadcount }}
              </span>
            </div>
          </div>
        </div>
      </div>
    </li>
  </div>
  <!--Direct Chat User end -->
</template>

<script>
import { mapState } from "vuex";
import moment from "moment";
import { socket } from "../../../../plugins/socketio.service";
const { ipcRenderer } = require("electron");
export default {
  data() {
    return {
      activeIndex: null,
      styleObject: {
        "background-size": "cover",
        "background-position": "center",
        display: "block",
      },
      chatUser: [],
      Findroom: "",
      userDetail: null,
    };
  },
  mounted() {},
  computed: {
    ...mapState({
      profile: (state) => state.auth.profile,
      sessionroom: (state) => state.chat.session,
      roomtype: (state) => state.room.roomtype,
      openlogout: (state) => state.common.openlogout,
      officialprofile: (state) => state.auth.ofiicialprofile,
      currentRoom() {
        return (this.chatUser = this.$store.getters["room/currentRoom"]);
      },
    }),
  },
  watch: {
    Findroom: function (val, oldVal) {
      if (val.length > 0) {
        console.log(val);
        let arr = [];
        this.getdataDB.then((data) => {
          let objs = data
            .objects("ROOM")
            .filtered(`idofficialroom =="${this.getProfile.id}"`);
          objs.map((data) => {
            if (
              data.user.displayName.includes(`${val}`) ||
              data.guestUniqueName.includes(`${val}`)
            ) {
              console.log(data);
              arr.push(data);
            }
          });
        });
        this.$store.dispatch("room/setRoom", arr);
      } else {
        this.setRooms();
        // this.getdataDB.then((data) => {
        //   let objs = data
        //     .objects("ROOM")
        //     .filtered(`idofficialroom =="${this.getProfile.id}"`);
        //   console.log(objs);
        // });
      }
    },
  },
  methods: {
    infoTime(time) {
      var stillUtc = moment.utc(time).toDate();
      if (
        moment(stillUtc).local().format("DD/MM/YYYY") ==
        moment(new Date()).format("DD/MM/YYYY")
      ) {
        return moment(stillUtc).local().format("HH:mm");
      } else {
        return moment(stillUtc).local().format("DD/MM");
      }
    },
    getImgUrl() {
      return require("../../../../assets/images/avtar/defaultimageoa.png");
    },
    getTimeToUtc() {
      var utcdate = new Date().toISOString().substr(0, 19).replace("T", " ");
      return utcdate;
    },
    setBlockroom(isblock) {
      if (isblock == true) {
        this.$store.state.common.isblockroom = true;
      } else {
        this.$store.state.common.isblockroom = false;
      }
    },
    // searchofficial() {
    //   this.getdataDB.then((data) => {
    //     let objs = data
    //       .objects("ROOM")
    //       .filtered(`idofficialroom =="${this.getProfile.id}"`);
    //     objs.map((data) => {
    //       if (data.user.displayName.includes("i")) {
    //         console.log(data);
    //       }
    //     });
    //   });
    // },

    setChatuser: function (sessionid) {
      this.$store.dispatch("common/setLoadingchat", true);
      this.addDataToRealm(this.profile, "updateUnreadcount");
      this.getdataDB.then(async (data) => {
        let lastshowtime = data
          .objects("ROOM")
          .filtered(`sessionid == "${sessionid}"`);
        let msg = data
          .objects("MESSAGE")
          .filtered(
            `sessionid == "${sessionid}" AND  createdtime <= "${lastshowtime[0].showtime}" `
          );

        await this.$store.dispatch("chat/setChat", []);
        // await this.$store.dispatch("chat/setChat", msg);
        let arr = [];
        this.$store.state.chat.messagelength = 50;
        if (msg.length < this.$store.state.chat.messagelength) {
          for (let i = 0; i < msg.length; i++) {
            arr.push(msg[i]);
          }
          await this.$store.dispatch("chat/setChat", arr);
        } else {
          for (
            let i = msg.length - 1;
            i > msg.length - this.$store.state.chat.messagelength;
            i--
          ) {
            arr.push(msg[i]);
          }

          // let sortarray = arr.sort((a,b)=>a.createdtime-b.createdtime);

          await this.$store.dispatch("chat/setChat", arr);
        }

        if (this.roomtype == "official") {
          let unreadtime = data
            .objects("MESSAGE")
            .filtered(
              `sessionid == "${sessionid}" AND status == "SENT" AND oaid != "${this.profile.id}"`
            );
          if (unreadtime.length) {
            this.$store.dispatch(
              "chat/setUnreadtime",
              unreadtime[0].createdtime
            );
            this.$store.dispatch(
              "chat/setMessagefirstunread",
              unreadtime[0].messageid
            );
          } else {
            this.$store.dispatch("chat/setUnreadtime", null);
            this.$store.dispatch("chat/setMessagefirstunread", null);
          }
        } else {
          let unreadtime = data
            .objects("MESSAGE")
            .filtered(
              `sessionid == "${sessionid}" AND status == "SENT" AND senderid != "${this.profile.id}"`
            );
          if (unreadtime.length) {
            this.$store.dispatch(
              "chat/setUnreadtime",
              unreadtime[0].createdtime
            );
            this.$store.dispatch(
              "chat/setMessagefirstunread",
              unreadtime[0].messageid
            );
          } else {
            this.$store.dispatch("chat/setUnreadtime", null);
            this.$store.dispatch("chat/setMessagefirstunread", null);
          }
        }
      });
      this.addDataToRealm(this.profile, "updateLastmessage");
      this.setRooms();
      
      setTimeout(() => {
        if (document.querySelector(".unreadmessage")) {
          const contain = document.querySelector(".scrolltopdirectchat");
          contain.scrollTop =
            document.querySelector(".unreadmessage").offsetTop - 200;
        } else {
          const contain = document.querySelector(".scrolltopdirectchat");
          contain.scrollTop = contain.scrollHeight;
        }
        this.$store.dispatch("common/setLoadingchat", false);
      }, 600);
    },
    setSeesionuser: function (sessionid) {
      this.$store.dispatch("chat/setSessionChat", sessionid);
    },
    readMessage: function (sessionid) {
      //check if
      if (this.roomtype == "official") {
        this.getdataDB.then((data) => {
          let lastmsg = data
            .objects("MESSAGE")
            .filtered(
              ` sessionid == "${sessionid}" AND oaid != "${this.profile.id}" AND status == "SENT"`
            );
          if (lastmsg[0]) {
            socket.emit(
              "messages:read",
              `{"auth":"Bearer ${this.$store.getters["auth/token"]}","sessionId": "${sessionid}","readTime":"${lastmsg[0].createdtime}"}`
            );
          }
        });
      } else {
        this.getdataDB.then((data) => {
          let lastmsg = data
            .objects("MESSAGE")
            .filtered(
              ` sessionid == "${sessionid}" AND senderid != "${this.profile.id}" AND status == "SENT"`
            );
          if (lastmsg[0]) {
            socket.emit(
              "messages:read",
              `{"auth":"Bearer ${this.$store.getters["auth/token"]}","sessionId": "${sessionid}","readTime":"${lastmsg[0].createdtime}"}`
            );
          }
        });
      }
    },
    setActiveuser: function (id, userdata) {
      this.$store.dispatch("chat/setActiveuser", id);
      this.$store.dispatch("room/setRoomDisplay", userdata);
      console.log(userdata);
      console.log(userdata);
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
    // logout() {
    //   socketDisconnect();
    //   if (this.userlogin != null) {
    //     let stamptime = {
    //       synctime: this.getTimeToUtc(),
    //       id: this.userlogin.id,
    //     };
    //     this.addDataToRealm(stamptime, "updateLogin");
    //   }
    //   this.$store.state.common.activesidebar = 2;
    //   this.$store.state.common.openlogout =
    //     !this.$store.state.common.openlogout;
    //   this.$store.state.common.iscontact = false;
    //   this.$store.dispatch("chat/resetState");
    //   this.$store.dispatch("contact/resetState");
    //   this.$store.dispatch("room/resetState");
    //   // this.addDataToRealm("", "deleteData");
    //   this.$store.dispatch("auth/setToken", "");
    //   this.$store.dispatch("auth/setProfile", "");
    //   window.localStorage.removeItem("auth");
    //   this.$router.push("/authentication/login");
    // },
    // logoutclear() {

    //   socketDisconnect();
    //   if (this.userlogin != null) {
    //     let stamptime = {
    //       synctime: this.getTimeToUtc(),
    //       id: this.userlogin.id,
    //     };
    //     this.addDataToRealm(stamptime, "updateLogin");
    //   }
    //   this.addDataToRealm("", "deleteData");
    //   this.$store.state.common.activesidebar = 2;
    //   this.$store.state.common.openlogout =
    //     !this.$store.state.common.openlogout;
    //   this.$store.state.common.iscontact = false;
    //   this.$store.dispatch("chat/resetState");
    //   this.$store.dispatch("contact/resetState");
    //   this.$store.dispatch("room/resetState");

    //   this.$store.dispatch("auth/setToken", "");
    //   this.$store.dispatch("auth/setProfile", "");
    //   window.localStorage.removeItem("auth");
    //   this.$router.push("/authentication/login");
    // },
  },
};
</script>
