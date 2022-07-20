<template>
  <client-only>
    <Chat />
  </client-only>
</template>

<script>
// import Messenger from "../../components/messenger/index.vue";
import Vue from "vue";
import Chat from "@/components/messenger/chat.vue";
import { mapState } from "vuex";
import VueSocketIO from "vue-socket.io";
import SocketioService from "../plugins/socketio.service.js";

Vue.use(
      new VueSocketIO({
        // connection: "https://test.apigochat.com/",
        debug: false,
        connection: "https://dev.apigochat.com/",
        options: {
          path: "/socket/socket.io",
          transports: ["polling"],
          transportOptions: {
            polling: {
              extraHeaders: {
                Authorization: `Bearer ${window.localStorage.getItem("auth")}`,
                Platform: "WebNop",
              },
            },
          },
        },
      })
    );

export default {
  components: {
    Chat,
  },
  data() {
    return {
      syncTime: "",
    };
  },
  computed: {
    ...mapState({
      sesssionid: (state) => state.chat.session,
    }),
  },
  sockets: {
    connect() {
      console.log("connect socket");
    },
  },
  async mounted() {
    this.$socket.connect();
    if (this.getProfile == null) {
      await this.getMe();
    }
    Vue.use(
      new VueSocketIO({
        // connection: "https://test.apigochat.com/",
        debug: false,
        connection: "https://dev.apigochat.com/",
        options: {
          path: "/socket/socket.io",
          transports: ["polling"],
          transportOptions: {
            polling: {
              extraHeaders: {
                Authorization: `Bearer ${window.localStorage.getItem("auth")}`,
                Platform: "WebNop",
              },
            },
          },
        },
      })
    );
    // Vue.use(

    //   new VueSocketIO({
    //     // debug: false,
    //     // connection: "https://test.apigochat.com/",
    //     // options:options
    //   })
    // );
    //    Vue.use(
    //   new VueSocketIO({
    //     // connection: "https://test.apigochat.com/",
    //     debug:false,
    //     connection: 'https://dev.apigochat.com/',
    //     options:options

    //   })
    // );
    // Vue.use(
    //   new VueSocketIO({
    //     // connection: "https://test.apigochat.com/",
    //     debug:false,
    //     connection: 'https://dev.apigochat.com/',
    //     options:options

    //   })
    // );

    this.getContact();
    this.getRooms();
    this.getOfficial();
    this.sockets.subscribe("socketId", function (data) {
      console.log(data);
    });
    this.sockets.subscribe("socketId", function (data) {
      this.syncTime = data.syncTime;
      this.$socket.emit(
        "officials:user",
        `{"syncTime":"0001-01-01 00:00:00","page":1}`
      );

      //socket gochat
      this.$socket.emit(
        "rooms",
        `{"syncTime":"${this.syncTime}","page":1,"userId":"${this.getProfile.id}"}`
      );
      this.sockets.subscribe(`rooms:${this.getProfile.id}`, function (data) {
        data.data.map((item) => {
          this.sockets.subscribe(`messages:${item.sessionId}`, function (data) {
            if (data.data) {
              this.addDataToRealm(data.data, "addMessage");
              this.addDataToRealm(data.data, "updateShow");
              this.addDataToRealm(this.getProfile, "updateUnreadcount");
              this.addDataToRealm(this.getProfile, "updateLastmessage");
              setTimeout(() => {
                this.setRooms();
              }, 50);
            }
          });
          this.sockets.subscribe(
            `messages:read:${item.sessionId}`,
            function (data) {
              this.addDataToRealm(data.data, "updateRead");
              if (this.sesssionid == data.data.sessionId) {
                setTimeout(() => {
                  this.setMessage(this.sesssionid);
                }, 1000);
              }
            }
          );
          this.sockets.subscribe(
            `messages:update:${item.sessionId}`,
            function (msgupdate) {
              msgupdate.data.map((data) => {
                if (this.sesssionid == data.sessionId) {
                  this.$socket.emit(
                    "messages:read",
                    `{"sessionId": "${data.sessionId}","readTime":"${data.messages[0].createdTime}"}`
                  );
                }
              });

              this.addDataToRealm(msgupdate.data, "updateDummyMesaage");
              this.addDataToRealm(msgupdate.data, "addMessage");
              this.addDataToRealm(msgupdate.data, "updateShow");
              this.addDataToRealm(this.getProfile, "updateUnreadcount");
              this.addDataToRealm(this.getProfile, "updateLastmessage");
              setTimeout(() => {
                this.setRooms();
              }, 50);
              if (this.sesssionid) {
                if (this.sesssionid == item.sessionId) {
                  this.setMessage(this.sesssionid);
                }
              }
            }
          );
        });
        data.data.map((item) => {
          this.$socket.emit(
            `messages`,
            `{"syncTime":"0001-01-01 00:00:00","sessionId":"${item.sessionId}"}`
          );
        });
      });

      //socket official account
      this.sockets.subscribe(
        `officials:user:${this.getProfile.id}`,
        function (data) {
          data.data.map((officialdata) => {
            this.$socket.emit("oa:auth", `{"userId":"${officialdata.id}"}`);
            this.sockets.subscribe(
              `me:official:update:${officialdata.id}`,
              function (data) {
                let updatedata = data.data[0];
                if (updatedata.isBlock == true) {
                  if (updatedata.sessionId == this.sesssionid) {
                    this.$store.state.common.isblockroom = true;
                  }
                  this.addDataToRealm(updatedata.id, "blockOfficial");
                } else if (updatedata.isBlock == false) {
                  if (updatedata.sessionId == this.sesssionid) {
                    this.$store.state.common.isblockroom = false;
                  }
                  this.addDataToRealm(updatedata.id, "unblockOfficial");
                }
                setTimeout(() => {
                  this.setRooms();
                }, 50);
                // if (this.checkDuplicateRoom(data.data[0].id)) {
                //   // this.addDataToRealm(data.data, "addRooms");
                //   console.log(true);
                // }else{
                //   // this.addDataToRealm(data.data, "updateDuplicateroom");
                //   console.log(false);
                // }
              }
            );
            this.sockets.subscribe(
              `rooms:official:update:${officialdata.id}`,
              function (data) {
                data.data.map((item) => {
                  item.roomtype = "official";
                  item.idofficialroom = officialdata.id;
                  if (this.checkDuplicateRoom(item.id)) {
                    this.$socket.emit(
                      `join:room`,
                      `{"userId":"${officialdata.id}","sessionId":"${item.sessionId}"}`
                    );
                  }
                });

                if (this.checkDuplicateRoom(data.data[0].id)) {
                  this.addDataToRealm(data.data, "addRooms");
                }

                this.sockets.subscribe(
                  `messages:${data.data[0].sessionId}`,
                  function (data) {
                    this.addDataToRealm(data.data, "addMessage");
                    // this.addDataToRealm(data.data, "updateShow");
                    this.addDataToRealm(officialdata, "updateUnreadcount");
                    this.addDataToRealm(officialdata, "updateLastmessage");
                  }
                );
                this.sockets.subscribe(
                  `messages:read:${data.data[0].sessionId}`,
                  function (data) {
                    this.addDataToRealm(data.data, "updateRead");
                    if (this.sesssionid == data.data.sessionId) {
                      setTimeout(() => {
                        this.setMessage(this.sesssionid);
                      }, 1000);
                    }
                  }
                );
                this.sockets.subscribe(
                  `messages:update:${data.data[0].sessionId}`,
                  function (msgupdate) {
                    msgupdate.data.map((data) => {
                      if (this.sesssionid == data.sessionId) {
                        this.$socket.emit(
                          "messages:read",
                          `{"sessionId": "${data.sessionId}","readTime":"${data.messages[0].createdTime}"}`
                        );
                      }
                    });

                    this.addDataToRealm(msgupdate.data, "updateDummyMesaage");
                    this.addDataToRealm(msgupdate.data, "addMessage");
                    this.addDataToRealm(this.getProfile, "updateUnreadcount");
                    this.addDataToRealm(this.getProfile, "updateLastmessage");
                    this.addDataToRealm(msgupdate.data, "updateShow");
                    setTimeout(() => {
                      this.setRooms();
                    }, 50);
                    if (this.sesssionid) {
                      if (this.sesssionid == data.data[0].sessionId) {
                        this.setMessage(this.sesssionid);
                      }
                    }
                  }
                );

                this.$socket.emit(
                  `messages`,
                  `{"syncTime":"0001-01-01 00:00:00","sessionId":"${data.data[0].sessionId}"}`
                );

                setTimeout(() => {
                  this.setRooms();
                }, 50);
              }
            );
            this.sockets.subscribe(`rooms:${officialdata.id}`, function (data) {
              // console.log(data);
              data.data.map(
                (dataroomofficial) => (
                  (dataroomofficial.roomtype = "official"),
                  (dataroomofficial.idofficialroom = officialdata.id)
                )
              );
              if (data.data.length > 0) {
                this.addDataToRealm(data.data, "addRooms");
              }
              this.sockets.subscribe(
                `official:contacts:${officialdata.id}`,
                function (data) {
                  data.data.map((contactsoa) => {
                    if (contactsoa.isBlock == true) {
                      this.addDataToRealm(contactsoa.id, "blockOfficial");
                    }
                  });
                }
              );
              this.$socket.emit(
                `official:contacts`,
                `{"syncTime":"0001-01-01 00:00:00","page":1,"userId":"${officialdata.id}"}`
              );
              data.data.map((item) => {
                this.sockets.subscribe(
                  `messages:${item.sessionId}`,
                  function (data) {
                    console.log(data);
                    this.addDataToRealm(data.data, "addMessage");
                    this.addDataToRealm(data.data, "updateShow");
                    this.addDataToRealm(officialdata, "updateUnreadcount");
                    this.addDataToRealm(officialdata, "updateLastmessage");
                    setTimeout(() => {
                      this.setRooms();
                    }, 50);
                  }
                );

                this.sockets.subscribe(
                  `messages:read:${item.sessionId}`,
                  function (data) {
                    this.addDataToRealm(data.data, "updateRead");
                    if (this.sesssionid == data.data.sessionId) {
                      setTimeout(() => {
                        this.setMessage(this.sesssionid);
                      }, 1000);
                    }
                  }
                );

                this.sockets.subscribe(
                  `messages:update:${item.sessionId}`,
                  function (msgupdate) {
                    msgupdate.data.map((data) => {
                      if (this.sesssionid == data.sessionId) {
                        this.$socket.emit(
                          "messages:read",
                          `{"sessionId": "${data.sessionId}","readTime":"${data.messages[0].createdTime}"}`
                        );
                      }
                    });

                    this.addDataToRealm(msgupdate.data, "updateDummyMesaage");
                    this.addDataToRealm(msgupdate.data, "addMessage");
                    this.addDataToRealm(this.getProfile, "updateUnreadcount");
                    this.addDataToRealm(this.getProfile, "updateLastmessage");
                    this.addDataToRealm(msgupdate.data, "updateShow");
                    setTimeout(() => {
                      this.setRooms();
                    }, 50);
                    if (this.sesssionid) {
                      if (this.sesssionid == item.sessionId) {
                        this.setMessage(this.sesssionid);
                      }
                    }
                  }
                );

                this.$socket.emit(
                  `messages`,
                  `{"syncTime":"0001-01-01 00:00:00","sessionId":"${item.sessionId}"}`
                );
              });
            });

            this.$socket.emit(
              "rooms",
              `{"syncTime":"${this.syncTime}","page":1,"userId":"${officialdata.id}"}`
            );
          });
        }
      );
    });
  },
  methods: {
    checkDuplicateRoom(idroom) {
      this.getdataDB.then((data) => {
        let room = data.objects("ROOM");
        room.map((item) => {
          if (item.id == idroom) {
            return false;
          } else {
            return true;
          }
          // if (item.sessionid == sessionfromupdate) {
          //   return false;
          // } else {
          //   return true;
          // }
        });
      });
    },
    checkDuplicateMessage(sessionfromupdate) {
      this.getdataDB.then((data) => {
        let msg = data.objects("MESSAGE");
        msg.map((item) => {
          // console.log(item);
          // if () {
          //   return false;
          // } else {
          //   return true;
          // }
        });
      });
    },
    async getMe() {
      try {
        const response = await this.$store.dispatch("auth/getMe");
        if (response.message === "success") {
          this.$store.dispatch("auth/setProfile", response.data.userProfile);
        }
      } catch (error) {
        console.log(error);
      }
    },
    async getContact() {
      try {
        const payload = {
          dateTime: "2017-01-01 00:00:00",
          page: 1,
          limit: 10,
        };
        const response = await this.$store.dispatch(
          "contact/requestContactFrinds",
          payload
        );
        if (response.status === 200) {
          // console.log(response.data.data);
          // this.chatUser = response.data.data;
          this.addDataToRealm(response.data.data, "addUser");
          this.setContact();
        }
      } catch (error) {
        console.log(error);
      }
    },
    async getRooms() {
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
          response.data.data.map((roomdata) => (roomdata.roomtype = "user"));
          this.addDataToRealm(response.data.data, "addRooms");
        }
      } catch (error) {
        console.log(error);
      }
    },
    async getOfficial() {
      try {
        const payload = {
          page: 1,
          limit: 20,
        };
        const response = await this.$store.dispatch(
          "official/requestOfficial",
          payload
        );
        if (response.status === 200) {
          this.addDataToRealm(response.data.data, "addOfficial");
          setTimeout(() => {
            this.setOfficial();
          }, 500);
        }
      } catch (error) {
        console.log(error);
      }
    },
  },
};
</script>
