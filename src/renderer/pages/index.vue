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
import { socket, socketAuth } from "../plugins/socketio.service.js";
const { ipcRenderer } = require("electron");

export default {
  components: {
    Chat,
  },
  data() {
    return {
      syncTime: "",
      token: this.$store.getters["auth/token"],
      Officialuser: null,
      Roomofficialdataupdate: [],
      Responseoaroom: [],
    };
  },
  computed: {
    ...mapState({
      sesssionid: (state) => state.chat.session,
    }),
  },
  created() {
    // SocketioService.setupSocketConnection();
    socketAuth();
  },
  async mounted() {
    // this.socketEvent();
    // localStorage.debug = false
    if (this.getProfile == null) {
      await this.getMe();
    }
    this.getContact();
    // this.getRooms();
    this.getOfficial();
    socket.on("connect", (data) => {
      console.log(
        "connect @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@"
      );
      this.socketEvent();
    });
    socket.on("reconnect", (data) => {
      console.log(
        "reconnect @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@"
      );
    });
    socket.on("disconnect", async (disconnect) => {
      console.log(disconnect.message);
      console.log(
        "disconnect @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@"
      );
      await this.unsubSocketEvent();
    });
    socket.on("reconnecting", function () {
      console.log(
        "reconnecting @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@"
      );
    });

    socket.on("reconnect_error", function (obj) {
      console.log(
        "reconnection error @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@"
      );
    });

    socket.on("reconnect_failed", function () {
      console.log(
        "reconnection failed @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@"
      );
    });
    socket.on("connect_error", (err) => {
      console.log("connect error@@@@@@@@@@@@@@@@@@@");
      console.log(`connect_error due to ${err.message}`);
    });
  },
  methods: {
    async unsubSocketEvent() {
      socket.off("socketId");
      socket.off(`web:auth:${this.$store.getters["auth/profile"].id}`);
      socket.off(`officials:user:${this.getProfile.id}`);
      this.Officialuser.map((officialdata) => {
        socket.off(`me:official:update:${officialdata.id}`);
        socket.off(`rooms:official:update:${officialdata.id}`);
        socket.off(`official:contacts:${officialdata.id}`);
        socket.off(`friends:update:${officialdata.id}`);
      });
      this.Responseoaroom.map((data) => {
        console.log(data);
        data.map((item) => {
          console.log(item.sessionId);
          socket.off(`messages:${item.sessionId}`);
          socket.off(`messages:update:${item.sessionId}`);
          socket.off(`messages:read:${item.sessionId}`);
        });
      });

      if (this.Roomofficialdataupdate.length) {
        this.Roomofficialdataupdate.map((data) => {
          console.log("roomofficialupdate");
          console.log(data.sessionId);
          socket.off(`messages:${data.sessionId}`);
          socket.off(`messages:read:${data.sessionId}`);
          socket.off(`messages:update:${data.sessionId}`);
        });
      }
    },
    socketEvent() {
      socket.on("socketId", (data) => {
        socket.emit(
          "web:auth",
          `{"userId": "${this.$store.getters["auth/profile"].id}","auth":"Bearer ${this.token}"}`
        );
        socket.on(
          `web:auth:${this.$store.getters["auth/profile"].id}`,
          (data) => {
            console.log("authen");
            console.log(data);
            this.syncTime = data.syncTime;
            socket.emit(
              "officials:user",
              `{"auth":"Bearer ${this.token}","syncTime":"0001-01-01 00:00:00","page":1}`
            );
            // console.log(this.getProfile.id);
            // socket.on(`officials:user:${this.getProfile.id}`,(data)=>{
            //   console.log('on official');
            //   console.log(data);
            // })

            socket.on(`officials:user:${this.getProfile.id}`, (data) => {
              console.log("getprofile id");
              console.log(this.getProfile.id);
              console.log("official user");
              console.log(data.data);

              this.Officialuser = data.data;

              data.data.map((officialdata) => {
                socket.emit(
                  "oa:auth",
                  `{"auth":"Bearer ${this.token}","userId":"${officialdata.id}"}`
                );
                socket.on(`me:official:update:${officialdata.id}`, (data) => {
                  console.log("me official update");
                  console.log(data);
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
                });
                socket.on(`friends:update:${officialdata.id}`, (data) => {
                  this.addDataToRealm(data.userProfile, "updateRoom");
                  this.addDataToRealm(data.userProfile, "updateMessageInRoom");
                  this.setRooms();
                  if (this.sesssionid) {
                    this.setMessage(this.sesssionid);
                  }
                });
                socket.on(
                  `rooms:official:update:${officialdata.id}`,
                  (data) => {
                    console.log("room official update data");
                    console.log(data);
                    this.Roomofficialdataupdate.push(data.data[0]);

                    data.data[0].roomtype = "official";
                    data.data[0].idofficialroom = officialdata.id;

                    // data.data[0].permission = "null"

                    if (this.checkDuplicateRoom(data.data[0].id)) {
                      socket.emit(
                        `join:room`,
                        `{"auth":"Bearer ${this.token}","userId":"${officialdata.id}","sessionId":"${data.data[0].sessionId}"}`
                      );
                    }
                    this.UpdateAddRoom(data.data);
                    socket.on(`messages:${data.data[0].sessionId}`, (data) => {
                      console.log("message");
                      console.log(data);
                      if (data.data != null) {
                        this.addDataToRealm(data.data, "addMessage");
                        this.addDataToRealm(data.data, "updateShow");
                        this.addDataToRealm(
                          this.getProfile,
                          "updateUnreadcount"
                        );
                        this.addDataToRealm(
                          this.getProfile,
                          "updateLastmessage"
                        );
                      }
                    });

                    socket.on(
                      `messages:read:${data.data[0].sessionId}`,
                      (data) => {
                        this.addDataToRealm(data.data, "updateRead");
                        if (this.sesssionid == data.data.sessionId) {
                          setTimeout(() => {
                            this.setMessage(this.sesssionid);
                          }, 1000);
                        }
                      }
                    );
                    socket.on(
                      `messages:update:${data.data[0].sessionId}`,
                      (msgupdate) => {
                        console.log("message update");
                        console.log(msgupdate);

                        msgupdate.data.map((data) => {
                          if (this.sesssionid == data.sessionId) {
                            socket.emit(
                              "messages:read",
                              `{"auth":"Bearer ${this.token}","sessionId": "${data.sessionId}","readTime":"${data.messages[0].createdTime}"}`
                            );
                          }else{
                            ipcRenderer.send("notify", data.messages[0]);
                          }
                        });
                        this.addDataToRealm(
                          msgupdate.data,
                          "updateDummyMesaage"
                        );
                        this.addDataToRealm(msgupdate.data, "addMessage");
                        

                        this.addDataToRealm(
                          this.getProfile,
                          "updateUnreadcount"
                        );
                        this.addDataToRealm(
                          this.getProfile,
                          "updateLastmessage"
                        );
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
                    socket.emit(
                      `messages`,
                      `{"auth":"Bearer ${this.token}","syncTime":"0001-01-01 00:00:00","sessionId":"${data.data[0].sessionId}"}`
                    );
                    setTimeout(() => {
                      this.setRooms();
                    }, 1000);
                  }
                );

                //////////////////////------------change socket to api rooms and join all rooms[OAID]

                socket.emit(
                  `join:all:rooms`,
                  `{"auth":"Bearer ${this.token}","userId":"${officialdata.id}"}`
                );

                this.getOfficialRoom(officialdata.id).then((responseOaRoom) => {
                  console.log("responseOaRoom");
                  console.log(responseOaRoom);
                  this.Responseoaroom.push(responseOaRoom);

                  responseOaRoom.map(
                    (dataroomofficial) => (
                      (dataroomofficial.roomtype = "official"),
                      (dataroomofficial.idofficialroom = officialdata.id)
                    )
                  );
                  // console.log(responseOaRoom);
                  if (responseOaRoom.length > 0) {
                    this.UpdateAddRoom(responseOaRoom);
                    //                   if(){
                    // this.addDataToRealm(responseOaRoom, "addRooms");
                    //                   }
                  }
                  socket.on(`official:contacts:${officialdata.id}`, (data) => {
                    console.log("official contact");
                    console.log(data);
                    data.data.map((contactsoa) => {
                      if (contactsoa.isBlock == true) {
                        this.addDataToRealm(contactsoa.id, "blockOfficial");
                      }
                    });
                  });
                  socket.emit(
                    `official:contacts`,
                    `{"auth":"Bearer ${this.token}","syncTime":"0001-01-01 00:00:00","page":1,"userId":"${officialdata.id}"}`
                  );
                  responseOaRoom.map((item) => {
                    console.log(item);
                    socket.on(`messages:${item.sessionId}`, (data) => {
                      // console.log("messages");
                      // console.log(data);

                      // this.checkDuplicateMessage(data.data, officialdata);
                      if (data.data != null) {
                        this.addDataToRealm(data.data, "addMessage");
                        this.addDataToRealm(data.data, "updateShow");
                        if (this.checkDuplicateMessage(data.data)) {
                          this.addDataToRealm(
                            officialdata,
                            "updateUnreadcount"
                          );
                          this.addDataToRealm(
                            officialdata,
                            "updateLastmessage"
                          );
                        }
                      }

                      setTimeout(() => {
                        this.setRooms();
                      }, 50);
                    });
                    socket.on(`messages:read:${item.sessionId}`, (data) => {
                      console.log("message read");
                      console.log(data);
                      this.addDataToRealm(data.data, "updateRead");
                      if (this.sesssionid == data.data.sessionId) {
                        setTimeout(() => {
                          this.setMessage(this.sesssionid);
                        }, 1000);
                      }
                    });
                    socket.on(
                      `messages:update:${item.sessionId}`,
                      (msgupdate) => {
                        console.log("message update");
                        console.log(msgupdate);

                        msgupdate.data.map((data) => {
                          if (this.sesssionid == data.sessionId) {
                            console.log('emitread');
                            socket.emit(
                              "messages:read",
                              `{"auth":"Bearer ${this.token}","sessionId": "${data.sessionId}","readTime":"${data.messages[0].createdTime}"}`
                            );
                          } else {
                            console.log("new message");
                            ipcRenderer.send("notify", data.messages[0]);
                          }
                        });

                        this.addDataToRealm(
                          msgupdate.data,
                          "updateDummyMesaage"
                        );
                        this.addDataToRealm(msgupdate.data, "addMessage");
                        this.addDataToRealm(
                          this.getProfile,
                          "updateUnreadcount"
                        );
                        this.addDataToRealm(
                          this.getProfile,
                          "updateLastmessage"
                        );
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
                    socket.emit(
                      `messages`,
                      `{"auth":"Bearer ${this.token}","syncTime":"0001-01-01 00:00:00","sessionId":"${item.sessionId}"}`
                    );
                  });
                });
                // console.log(responseOaRoom);

                // socket.on(`rooms:${officialdata.id}`, (data) => {
                //   console.log("rommmmmmmmmmmmmmmmmmm");
                //   console.log(data);
                //   data.data.map(
                //     (dataroomofficial) => (
                //       (dataroomofficial.roomtype = "official"),
                //       (dataroomofficial.idofficialroom = officialdata.id)
                //     )
                //   );
                //   if (data.data.length > 0) {
                //     this.addDataToRealm(data.data, "addRooms");
                //   }
                //   socket.on(
                //     `official:contacts:${officialdata.id}`,
                //     function (data) {
                //       data.data.map((contactsoa) => {
                //         if (contactsoa.isBlock == true) {
                //           this.addDataToRealm(contactsoa.id, "blockOfficial");
                //         }
                //       });
                //     }
                //   );
                //   socket.emit(
                //     `official:contacts`,
                //     `{"auth":"Bearer ${this.token}","syncTime":"0001-01-01 00:00:00","page":1,"userId":"${officialdata.id}"}`
                //   );
                //   data.data.map((item) => {
                //     socket.on(`messages:${item.sessionId}`, (data) => {
                //       console.log(data);
                //       this.addDataToRealm(data.data, "addMessage");
                //       this.addDataToRealm(data.data, "updateShow");
                //       this.addDataToRealm(officialdata, "updateUnreadcount");
                //       this.addDataToRealm(officialdata, "updateLastmessage");
                //       setTimeout(() => {
                //         this.setRooms();
                //       }, 50);
                //     });
                //     socket.on(`messages:read:${item.sessionId}`, (data) => {
                //       this.addDataToRealm(data.data, "updateRead");
                //       if (this.sesssionid == data.data.sessionId) {
                //         setTimeout(() => {
                //           this.setMessage(this.sesssionid);
                //         }, 1000);
                //       }
                //     });
                //     socket.on(
                //       `messages:update:${item.sessionId}`,
                //       function (msgupdate) {
                //         msgupdate.data.map((data) => {
                //           if (this.sesssionid == data.sessionId) {
                //             socket.emit(
                //               "messages:read",
                //               `{"auth":"Bearer ${this.token}","sessionId": "${data.sessionId}","readTime":"${data.messages[0].createdTime}"}`
                //             );
                //           }
                //         });
                //         this.addDataToRealm(msgupdate.data, "updateDummyMesaage");
                //         this.addDataToRealm(msgupdate.data, "addMessage");
                //         this.addDataToRealm(this.getProfile, "updateUnreadcount");
                //         this.addDataToRealm(this.getProfile, "updateLastmessage");
                //         this.addDataToRealm(msgupdate.data, "updateShow");
                //         setTimeout(() => {
                //           this.setRooms();
                //         }, 50);
                //         if (this.sesssionid) {
                //           if (this.sesssionid == item.sessionId) {
                //             this.setMessage(this.sesssionid);
                //           }
                //         }
                //       }
                //     );
                //     socket.emit(
                //       `messages`,
                //       `{"auth":"Bearer ${this.token}","syncTime":"0001-01-01 00:00:00","sessionId":"${item.sessionId}"}`
                //     );
                //   });
                // });
                // socket.emit(
                //   "rooms",
                //   `{"auth":"Bearer ${this.token}","syncTime":"${this.syncTime}","page":1,"userId":"${officialdata.id}"}`
                // );
                //--------------------------------
              });
            });
          }
        );
      });
      // this.sockets.subscribe("socketId", function (data) {
      //   this.syncTime = data.syncTime;
      // this.$socket.emit(
      //   "officials:user",
      //   `{"syncTime":"0001-01-01 00:00:00","page":1}`
      // );

      //   //socket gochat
      //   this.$socket.emit(
      //     "rooms",
      //     `{"syncTime":"${this.syncTime}","page":1,"userId":"${this.getProfile.id}"}`
      //   );
      //   this.sockets.subscribe(`rooms:${this.getProfile.id}`, function (data) {
      //     data.data.map((item) => {
      //       this.sockets.subscribe(`messages:${item.sessionId}`, function (data) {
      //         if (data.data) {
      //           this.addDataToRealm(data.data, "addMessage");
      //           this.addDataToRealm(data.data, "updateShow");
      //           this.addDataToRealm(this.getProfile, "updateUnreadcount");
      //           this.addDataToRealm(this.getProfile, "updateLastmessage");
      //           setTimeout(() => {
      //             this.setRooms();
      //           }, 50);
      //         }
      //       });
      //       this.sockets.subscribe(
      //         `messages:read:${item.sessionId}`,
      //         function (data) {
      //           this.addDataToRealm(data.data, "updateRead");
      //           if (this.sesssionid == data.data.sessionId) {
      //             setTimeout(() => {
      //               this.setMessage(this.sesssionid);
      //             }, 1000);
      //           }
      //         }
      //       );
      //       this.sockets.subscribe(
      //         `messages:update:${item.sessionId}`,
      //         function (msgupdate) {
      //           msgupdate.data.map((data) => {
      //             if (this.sesssionid == data.sessionId) {
      //     this.$socket.emit(
      //       "messages:read",
      //       `{"sessionId": "${data.sessionId}","readTime":"${data.messages[0].createdTime}"}`
      //     );
      //   }
      // });

      //           this.addDataToRealm(msgupdate.data, "updateDummyMesaage");
      //           this.addDataToRealm(msgupdate.data, "addMessage");
      //           this.addDataToRealm(msgupdate.data, "updateShow");
      //           this.addDataToRealm(this.getProfile, "updateUnreadcount");
      //           this.addDataToRealm(this.getProfile, "updateLastmessage");
      //           setTimeout(() => {
      //             this.setRooms();
      //           }, 50);
      //           if (this.sesssionid) {
      //             if (this.sesssionid == item.sessionId) {
      //               this.setMessage(this.sesssionid);
      //             }
      //           }
      //         }
      //       );
      //     });
      //     data.data.map((item) => {
      //       this.$socket.emit(
      //         `messages`,
      //         `{"syncTime":"0001-01-01 00:00:00","sessionId":"${item.sessionId}"}`
      //       );
      //     });
      //   });

      //   //socket official account
      //   this.sockets.subscribe(
      //     `officials:user:${this.getProfile.id}`,
      //     function (data) {
      //       data.data.map((officialdata) => {
      //         this.$socket.emit("oa:auth", `{"userId":"${officialdata.id}"}`);
      //         this.sockets.subscribe(
      //           `me:official:update:${officialdata.id}`,
      //           function (data) {
      //             console.log("me official update");
      //             console.log(data);
      //             let updatedata = data.data[0];
      //             if (updatedata.isBlock == true) {
      //               if (updatedata.sessionId == this.sesssionid) {
      //                 this.$store.state.common.isblockroom = true;
      //               }
      //               this.addDataToRealm(updatedata.id, "blockOfficial");
      //             } else if (updatedata.isBlock == false) {
      //               if (updatedata.sessionId == this.sesssionid) {
      //                 this.$store.state.common.isblockroom = false;
      //               }
      //               this.addDataToRealm(updatedata.id, "unblockOfficial");
      //             }
      //             setTimeout(() => {
      //               this.setRooms();
      //             }, 50);
      //             // if (this.checkDuplicateRoom(data.data[0].id)) {
      //             //   // this.addDataToRealm(data.data, "addRooms");
      //             //   console.log(true);
      //             // }else{
      //             //   // this.addDataToRealm(data.data, "updateDuplicateroom");
      //             //   console.log(false);
      //             // }
      //           }
      //         );
      //         this.sockets.subscribe(
      //           `rooms:official:update:${officialdata.id}`,
      //           function (data) {
      //             console.log("room data");
      //             console.log(data);
      //             data.data.map((item) => {
      //               console.log("room update");
      //               console.log(item);
      //               item.roomtype = "official";
      //               item.idofficialroom = officialdata.id;
      //               if (this.checkDuplicateRoom(item.id)) {
      //                 this.$socket.emit(
      //                   `join:room`,
      //                   `{"userId":"${officialdata.id}","sessionId":"${item.sessionId}"}`
      //                 );
      //               }
      //             });
      //             this.UpdateAddRoom(data.data);
      //             this.sockets.subscribe(
      //               `messages:${data.data[0].sessionId}`,
      //               function (data) {
      //                 this.addDataToRealm(data.data, "addMessage");
      //                 // this.addDataToRealm(data.data, "updateShow");
      //                 this.addDataToRealm(officialdata, "updateUnreadcount");
      //                 this.addDataToRealm(officialdata, "updateLastmessage");
      //               }
      //             );
      //             this.sockets.subscribe(
      //               `messages:read:${data.data[0].sessionId}`,
      //               function (data) {
      //                 this.addDataToRealm(data.data, "updateRead");
      //                 if (this.sesssionid == data.data.sessionId) {
      //                   setTimeout(() => {
      //                     this.setMessage(this.sesssionid);
      //                   }, 1000);
      //                 }
      //               }
      //             );
      //             this.sockets.subscribe(
      //               `messages:update:${data.data[0].sessionId}`,
      //               function (msgupdate) {
      //                 msgupdate.data.map((data) => {
      //                   if (this.sesssionid == data.sessionId) {
      //                     this.$socket.emit(
      //                       "messages:read",
      //                       `{"sessionId": "${data.sessionId}","readTime":"${data.messages[0].createdTime}"}`
      //                     );
      //                   }
      //                 });

      //                 this.addDataToRealm(msgupdate.data, "updateDummyMesaage");
      //                 this.addDataToRealm(msgupdate.data, "addMessage");
      //                 this.addDataToRealm(this.getProfile, "updateUnreadcount");
      //                 this.addDataToRealm(this.getProfile, "updateLastmessage");
      //                 this.addDataToRealm(msgupdate.data, "updateShow");
      //                 setTimeout(() => {
      //                   this.setRooms();
      //                 }, 50);
      //                 if (this.sesssionid) {
      //                   if (this.sesssionid == data.data[0].sessionId) {
      //                     this.setMessage(this.sesssionid);
      //                   }
      //                 }
      //               }
      //             );

      //             this.$socket.emit(
      //               `messages`,
      //               `{"syncTime":"0001-01-01 00:00:00","sessionId":"${data.data[0].sessionId}"}`
      //             );

      //             setTimeout(() => {
      //               this.setRooms();
      //             }, 50);
      //           }
      //         );
      //         this.sockets.subscribe(`rooms:${officialdata.id}`, function (data) {
      //           // console.log(data);
      //           data.data.map(
      //             (dataroomofficial) => (
      //               (dataroomofficial.roomtype = "official"),
      //               (dataroomofficial.idofficialroom = officialdata.id)
      //             )
      //           );
      //           if (data.data.length > 0) {
      //             this.addDataToRealm(data.data, "addRooms");
      //           }
      //           this.sockets.subscribe(
      //             `official:contacts:${officialdata.id}`,
      //             function (data) {
      //               data.data.map((contactsoa) => {
      //                 if (contactsoa.isBlock == true) {
      //                   this.addDataToRealm(contactsoa.id, "blockOfficial");
      //                 }
      //               });
      //             }
      //           );
      //           this.$socket.emit(
      //             `official:contacts`,
      //             `{"syncTime":"0001-01-01 00:00:00","page":1,"userId":"${officialdata.id}"}`
      //           );
      //           data.data.map((item) => {
      //             this.sockets.subscribe(
      //               `messages:${item.sessionId}`,
      //               function (data) {
      //                 console.log(data);
      //                 this.addDataToRealm(data.data, "addMessage");
      //                 this.addDataToRealm(data.data, "updateShow");
      //                 this.addDataToRealm(officialdata, "updateUnreadcount");
      //                 this.addDataToRealm(officialdata, "updateLastmessage");
      //                 setTimeout(() => {
      //                   this.setRooms();
      //                 }, 50);
      //               }
      //             );

      //             this.sockets.subscribe(
      //               `messages:read:${item.sessionId}`,
      //               function (data) {
      //                 this.addDataToRealm(data.data, "updateRead");
      //                 if (this.sesssionid == data.data.sessionId) {
      //                   setTimeout(() => {
      //                     this.setMessage(this.sesssionid);
      //                   }, 1000);
      //                 }
      //               }
      //             );

      //             this.sockets.subscribe(
      //               `messages:update:${item.sessionId}`,
      //               function (msgupdate) {
      //                 msgupdate.data.map((data) => {
      //                   if (this.sesssionid == data.sessionId) {
      //                     this.$socket.emit(
      //                       "messages:read",
      //                       `{"sessionId": "${data.sessionId}","readTime":"${data.messages[0].createdTime}"}`
      //                     );
      //                   }
      //                 });

      //                 this.addDataToRealm(msgupdate.data, "updateDummyMesaage");
      //                 this.addDataToRealm(msgupdate.data, "addMessage");
      //                 this.addDataToRealm(this.getProfile, "updateUnreadcount");
      //                 this.addDataToRealm(this.getProfile, "updateLastmessage");
      //                 this.addDataToRealm(msgupdate.data, "updateShow");
      //                 setTimeout(() => {
      //                   this.setRooms();
      //                 }, 50);
      //                 if (this.sesssionid) {
      //                   if (this.sesssionid == item.sessionId) {
      //                     this.setMessage(this.sesssionid);
      //                   }
      //                 }
      //               }
      //             );

      //             this.$socket.emit(
      //               `messages`,
      //               `{"syncTime":"0001-01-01 00:00:00","sessionId":"${item.sessionId}"}`
      //             );
      //           });
      //         });

      //         this.$socket.emit(
      //           "rooms",
      //           `{"syncTime":"${this.syncTime}","page":1,"userId":"${officialdata.id}"}`
      //         );
      //       });
      //     }
      //   );
      // });
    },
    checkDuplicateRoom(idroom) {
      this.getdataDB.then((data) => {
        let room = data.objects("ROOM").filtered(`id == "${idroom}"`);
        if (room.length == 0) {
          return true;
        } else {
          return false;
        }
      });
    },
    UpdateAddRoom(idroom) {
      this.getdataDB.then((data) => {
        let room = data.objects("ROOM").filtered(`id == "${idroom[0].id}"`);
        console.log("room length");
        console.log(room.length);
        if (room.length == 0) {
          this.addDataToRealm(idroom, "addRooms");
        }
      });
    },
    checkDuplicateMessage(msgdata) {
      this.getdataDB.then((data) => {
        msgdata.map((item) => {
          item.messages.map((msg) => {
            let message = data
              .objects("MESSAGE")
              .filtered(`messageid == "${msg.messageId}" `);
            if (message.length > 0) {
              return false;
            } else {
              return true;
            }
          });
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
    async getOfficialRoom(OAID) {
      try {
        const payload = {
          page: 1,
          limit: 100,
          userId: OAID,
          dateTime: "0001-01-01 00:00:00",
        };
        const response = await this.$store.dispatch(
          "official/requestOfficialRoom",
          payload
        );
        console.log("get Officialroom");
        console.log(response.data.data);
        return response.data.data;
      } catch (error) {
        return error;
      }
    },
  },
};
</script>
