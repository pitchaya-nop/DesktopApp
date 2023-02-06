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
      profile: (state) => state.auth.profile,
      userlogin: (state) => state.auth.userlogin,
    }),
  },
  created() {
    this.getdataDB.then((datadb) => {
      let userlogin = datadb
        .objects("LOGIN")
        .filtered(`userid == "${this.userlogin.id}"`);
      
      userlogin.map((item) => {
        this.syncTime = item.logoutstamptime;
      });
    });
    // this.getOfficial();
    socketAuth();
  },
  async mounted() {
    if (this.userlogin == null ) {
      await this.getMe();
    }
    // this.getContact();
    socket.on("keepAlive", (data) => {
      // console.log(data);
      let stamptime = {
        synctime: data.syncTime,
        id: this.userlogin.id,
      };
      this.addDataToRealm(stamptime, "updateLogin");
      // localStorage.setItem("timeStamp", data.syncTime);
    });
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
      // localStorage.setItem("timeStamp", this.getTimeToUtc());
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
    getTimeToUtc() {
      var utcdate = new Date().toISOString().substr(0, 19).replace("T", " ");
      return utcdate;
    },
    async unsubSocketEvent() {
      socket.off("socketId");
      socket.off(`web:auth:${this.userlogin.id}`);
      socket.off(`officials:user:${this.userlogin.id}`);
      this.Officialuser.map((officialdata) => {
        socket.off(`me:official:update:${officialdata.id}`);
        socket.off(`rooms:official:update:${officialdata.id}`);
        socket.off(`official:contacts:${officialdata.id}`);
        socket.off(`friends:update:${officialdata.id}`);
      });
      this.Responseoaroom.map((data) => {
        data.map((item) => {
          socket.off(`messages:${item.sessionId}`);
          socket.off(`messages:update:${item.sessionId}`);
          socket.off(`messages:read:${item.sessionId}`);
        });
      });

      if (this.Roomofficialdataupdate.length) {
        this.Roomofficialdataupdate.map((data) => {
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
          `{"userId": "${this.userlogin.id}","auth":"Bearer ${this.token}"}`
        );
        socket.on(`web:auth:${this.userlogin.id}`, (data) => {
          // this.syncTime = data.syncTime;
          socket.emit(
            "officials:user",
            `{"auth":"Bearer ${this.token}","syncTime":"0001-01-01 00:00:00","page":1}`
          );

          socket.on(`officials:user:${this.userlogin.id}`, (data) => {
            this.Officialuser = data.data;
            data.data.map((item) => {
              item.profileId = this.userlogin.id;
            });
            this.addDataToRealm(data.data, "addOfficial");
            setTimeout(() => {
              this.setOfficial();
            }, 500);

            data.data.map((officialdata) => {
              socket.emit(
                "oa:auth",
                `{"auth":"Bearer ${this.token}","userId":"${officialdata.id}"}`
              );
              socket.on(`me:official:update:${officialdata.id}`, (data) => {
              
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
                
              });
              socket.on(`friends:update:${officialdata.id}`, (data) => {
                this.addDataToRealm(data.userProfile, "updateRoom");
                this.addDataToRealm(data.userProfile, "updateMessageInRoom");
                this.setRooms();
                if (this.sesssionid) {
                  this.setMessage(this.sesssionid);
                }
              });
              socket.on(`rooms:official:update:${officialdata.id}`, (data) => {
                
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
                  console.log('new message');
                  console.log(data.data);
                  if (data.data != null) {
                    this.addDataToRealm(data.data, "addMessage");
                    this.addDataToRealm(data.data, "updateShow");
                    this.addDataToRealm(this.profile, "updateUnreadcount");
                    this.addDataToRealm(this.profile, "updateLastmessage");
                  }
                });

                socket.on(`messages:read:${data.data[0].sessionId}`, (data) => {
                  this.addDataToRealm(data.data, "updateRead");
                  if (this.sesssionid == data.data.sessionId) {
                    setTimeout(() => {
                      this.setMessage(this.sesssionid);
                    }, 1000);
                  }
                });
                socket.on(
                  `messages:update:${data.data[0].sessionId}`,
                  (msgupdate) => {
                    
                    msgupdate.data.map((data) => {
                      if (this.sesssionid == data.sessionId) {
                        socket.emit(
                          "messages:read",
                          `{"auth":"Bearer ${this.token}","sessionId": "${data.sessionId}","readTime":"${data.messages[0].createdTime}"}`
                        );
                      } else {
                        if (this.profile == null || this.profile == "") {
                          ipcRenderer.send("notify", data.messages[0]);
                        } else {
                          this.profile.adminuserids.map((item) => {
                            if (
                              item != data.messages[0].senderId &&
                              this.profile.id != data.messages[0].senderId
                            ) {
                              ipcRenderer.send("notify", data.messages[0]);
                            }
                          });
                        }

                        // ipcRenderer.send("notify", data.messages[0]);
                      }
                    });
                    this.addDataToRealm(msgupdate.data, "updateDummyMesaage");
                    this.addDataToRealm(msgupdate.data, "addMessage");

                    this.addDataToRealm(this.profile, "updateUnreadcount");
                    this.addDataToRealm(this.profile, "updateLastmessage");
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
                // socket.emit(
                //   `messages`,
                //   `{"auth":"Bearer ${this.token}","syncTime":"0001-01-01 00:00:00","sessionId":"${data.data[0].sessionId}"}`
                // );
                socket.emit(
                  `messages`,
                  `{"auth":"Bearer ${this.token}","syncTime":"${this.syncTime}","sessionId":"${data.data[0].sessionId}"}`
                );
                setTimeout(() => {
                  this.setRooms();
                }, 1000);
              });

              //////////////////////------------change socket to api rooms and join all rooms[OAID]

              socket.emit(
                `join:all:rooms`,
                `{"auth":"Bearer ${this.token}","userId":"${officialdata.id}"}`
              );
              
              this.getOfficialRoom(officialdata.id).then((responseOaRoom) => {
                this.Responseoaroom.push(responseOaRoom);
                
                responseOaRoom.map(
                  (dataroomofficial) => (
                    (dataroomofficial.roomtype = "official"),
                    (dataroomofficial.idofficialroom = officialdata.id)
                  )
                );
               
                if (responseOaRoom.length > 0) {
                  this.Addroomofficial(responseOaRoom);
                }
                socket.on(`official:contacts:${officialdata.id}`, (data) => {
                 
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
                  socket.on(`messages:${item.sessionId}`, (data) => {
                    console.log(data);
                  
                    if (data.data != null) {
                      this.addDataToRealm(data.data, "addMessage");
                      this.addDataToRealm(data.data, "updateShow");
                      if (this.checkDuplicateMessage(data.data)) {
                        this.addDataToRealm(officialdata, "updateUnreadcount");
                        this.addDataToRealm(officialdata, "updateLastmessage");
                      }
                    }

                    setTimeout(() => {
                      this.setRooms();
                    }, 50);
                  });
                 
                  socket.on(`messages:read:${item.sessionId}`, (data) => {
                    
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
                      
                      msgupdate.data.map((data) => {
                        
                        if (this.sesssionid == data.sessionId) {
                          
                          socket.emit(
                            "messages:read",
                            `{"auth":"Bearer ${this.token}","sessionId": "${data.sessionId}","readTime":"${data.messages[0].createdTime}"}`
                          );
                        } else {
                          // ipcRenderer.send("notify", data.messages[0])
                         
                          if (this.profile == null || this.profile == "") {
                            
                            ipcRenderer.send("notify", data.messages[0]);
                          } else {
                            
                            this.profile.adminuserids.map((item) => {
                              if (
                                item != data.messages[0].senderId &&
                                this.profile.id != data.messages[0].senderId
                              ) {
                                ipcRenderer.send("notify", data.messages[0]);
                              }
                            });
                          }
                        }
                      });

                      this.addDataToRealm(msgupdate.data, "updateDummyMesaage");
                      this.addDataToRealm(msgupdate.data, "addMessage");
                      this.addDataToRealm(this.profile, "updateUnreadcount");
                      this.addDataToRealm(this.profile, "updateLastmessage");
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
                    `{"auth":"Bearer ${this.token}","syncTime":"${this.syncTime}","sessionId":"${item.sessionId}"}`
                  );
                });
              });
            });
          });
        });
      });
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
        if (room.length == 0) {
          this.addDataToRealm(idroom, "addRooms");
        }
      });
    },
    Addroomofficial(roomdata) {
      this.getdataDB.then((data) => {
        roomdata.map((dataroom) => {
          let room = data.objects("ROOM").filtered(`id == "${dataroom.id}"`);
          if (room.length == 0) {
            this.addDataToRealm(dataroom, "addOfficialRooms");
          }
        });
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
          this.$store.dispatch("auth/setUserLogin", response.data.userProfile);
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
          response.data.data.map((item) => {
            
            item.profileId = this.profile.id;
          });

          this.addDataToRealm(response.data.data, "addOfficial");
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

        return response.data.data;
      } catch (error) {
        return error;
      }
    },
  },
};
</script>
