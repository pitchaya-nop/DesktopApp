<template>
  <!--Direct Chat User start -->
  <div>
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
    <li
      :class="{ active: activeIndex === index }"
      v-for="(user, index) in currentContact.contacts"
      :key="user.id"
      @click="setActiveContact(user.id), setActive(index)"
    >
      <!-- @click="setActive(index), setActiveuser(user.id)" -->
      <div class="chat-box">
        <div class="media">
          <div
            class="profile"
            :style="
              user.avatars.thumbnail
                ? [
                    {
                      'background-image': 'url(' + user.avatars.thumbnail + ')',
                    },
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
          ></div>
          <div class="details">
            <h5>{{ user.displayname }}</h5>
            <h6 style="min-height: 20.6px">{{ user.statusmessage }}</h6>
          </div>
          <!-- <div class="media-body">
              <a
                class="icon-btn btn-sm pull-right favourite"
                :class="active(index) ? 'btn-primary' : 'btn-outline-primary'"
                href="javascript:void(0)"
                @click="setFavourite(index)"
              >
                <feather type="star" size="15" height="15"> </feather
              ></a>
            </div> -->
        </div>
      </div>
    </li>
  </div>
  <!--Direct Chat User end -->
</template>

<script>
import { mapState } from "vuex";
import moment from "moment";
export default {
  data() {
    return {
      activeIndex: null,
      syncTime: "",
      styleObject: {
        "background-size": "cover",
        "background-position": "center",
        display: "block",
      },
      chatUser: [],
      contactdata: [],
    };
  },
  mounted() {
    // this.getChat();
    // this.sockets.subscribe("socketId", function (data) {
    //   this.syncTime = data.syncTime;
    //   this.$socket.emit(
    //         "rooms",
    //         `{"syncTime":"${this.syncTime}","page":1}`
    //       );
    //       this.sockets.subscribe(
    //         "rooms:61dbf02ab43c5ae268243780",
    //         function (data) {
    //           console.log("Rooms:  !!!!!!!!!!!!");
    //           console.log(data);
    //         }
    //       );
    // });
    // this.getRoom();
  },
  computed: {
    ...mapState({
      currentContact() {
        return (this.contactdata =
          this.$store.getters["contact/currentContact"]);
        // this.getdataDB.then((data) => { this.testdata = data.objects("MESSAGE").filtered(`sessionid == "${this.sessionroom}"`) })
      },
    }),
  },
  methods: {
    getImgUrl(path) {
      return require("../../../../assets/images/" + path);
    },
    async getRoom() {
      try {
        const payload = {
          dateTime: "2017-01-01 00:00:00",
          page: 1,
          limit: 10,
        };
        const response = await this.$store.dispatch(
          "room/requestRoom",
          payload
        );
        if (response.status === 200) {
          console.log("@@@@@@@@@@@@@@@@@@@@@");
          console.log(response);
          // console.log(response);

          // this.sockets.subscribe("rooms", function (data) {

          // });
        }
      } catch (error) {
      } finally {
        console.log();
      }
    },
    setActiveContact(id) {
      this.$store.state.common.iscontact = true;
      // this.$store.dispatch("contact/setActiveuser", id);
      this.$store.dispatch("contact/setActivecontact", id);
    },
    async setActiveuser(id) {
      this.$store.dispatch("chat/setActiveuser", id);

      // this.$store.dispatch("chat/setActiveuser", id);
      // if (process.client) {
      //   this.width = window.innerWidth;
      //   if (this.width < 992) {
      //     document
      //       .querySelector(".sidebar-toggle")
      //       .classList.add("mobile-menu");
      //   }
      // } else {
      //   return null;
      // }
      // this.$store.state.common.showsticker = false;
      // this.$store.state.common.showemogi = false;
      // this.$store.state.common.showcontactcontent = false;
    },
    setActive(index) {
      this.activeIndex = index;
    },
    // async getChat() {
    //   try {
    //     const payload = {
    //       dateTime: "2017-01-01 00:00:00",
    //       page: 1,
    //       limit: 10,
    //     };
    //     const response = await this.$store.dispatch(
    //       "contact/requestContactFrinds",
    //       payload
    //     );
    //     if (response.status === 200) {
    //       console.log(response.data.data);
    //       this.chatUser = response.data.data;
    //     }
    //   } catch (error) {
    //   } finally {
    //     console.log();
    //   }
    // },
  },
};
</script>
