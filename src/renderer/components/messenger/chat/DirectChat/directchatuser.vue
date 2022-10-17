<template>
  <!--Direct Chat User start -->
  <div>
    <div class="search2">
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
        <div class="media" style="align-items: center">
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
          <div class="details">
            <h5>
              {{
                user.isblock
                  ? "UNKNOWN"
                  : user.sessiontype == "CHAT"
                  ? user.user.displayName
                  : user.sessiontype == "GROUP"
                  ? user.groupname
                  : user.sessiontype == "GUEST"
                  ? user.guestUniqueName :''
              }}
            </h5>
            <h6>{{ user.lastmessage }}</h6>
          </div>
          <div class="date-status">
            <span
              class="unreadcount"
              v-if="user.unreadcount > 0 && sessionroom != user.sessionid"
            >
              {{ user.unreadcount }}
            </span>
          </div>
        </div>
      </div>
    </li>
  </div>
  <!--Direct Chat User end -->
</template>

<script>
import { mapState } from "vuex";
import Vue from "vue";
import { socket } from "../../../../plugins/socketio.service";
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
      currentRoom() {
        return (this.chatUser = this.$store.getters["room/currentRoom"]);
      },
    }),
  },
  watch: {
    Findroom: function (val, oldVal) {
      if (val.length > 0) {
        let arr = [];
        this.getdataDB.then((data) => {
          let objs = data
            .objects("ROOM")
            .filtered(`idofficialroom =="${this.getProfile.id}"`);
          objs.map((data) => {
            if (data.user.displayName.includes(`${val}`)) {
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
    getImgUrl() {
      return require("../../../../assets/images/avtar/defaultimageoa.png");
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
      this.getdataDB.then((data) => {
        let lastshowtime = data
          .objects("ROOM")
          .filtered(`sessionid == "${sessionid}"`);
        let msg = data
          .objects("MESSAGE")
          .filtered(
            `sessionid == "${sessionid}" AND  createdtime <= "${lastshowtime[0].showtime}" `
          );
        let arr = [];
        this.$store.state.chat.messagelength = 50;
        if (msg.length < this.$store.state.chat.messagelength) {
          this.$store.dispatch("chat/setChat", msg);
        } else {
          for (
            let i = msg.length - 1;
            i > msg.length - this.$store.state.chat.messagelength;
            i--
          ) {
            arr.push(msg[i]);
          }
          this.$store.dispatch("chat/setChat", arr.reverse());
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
      // console.log(this.profile);
      this.addDataToRealm(this.profile, "updateUnreadcount");
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
      }, 100);
      setTimeout(() => {
        this.$store.dispatch("common/setLoadingchat", false);
      }, 500);
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
  },
};
</script>
