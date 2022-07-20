// import { io } from 'socket.io-client';
// import Vue from "vue";
// import VueSocketIO from "vue-socket.io";

// class SocketioService {
//   socket;
//   constructor() { }

//   setupSocketConnection() {

// new VueSocketIO({
//   connection: "https://dev.apigochat.com/",
//   options: {
//     path: "/socket/socket.io",
//     transports: ["polling"],
//     transportOptions: {
//       polling: {
//         extraHeaders: {
//           Authorization: `Bearer ${window.localStorage.getItem("auth")}`,
//           Platform: "WebNop",
//         },
//       },
//     },
//   },
// })

//   }
//   disconnect() {
//     if (this.socket) {
//       this.socket.disconnect();
//     }
//   }
// }

// export default new SocketioService();

import Vue from "vue";
import VueSocketIO from "vue-socket.io";
const socket = new VueSocketIO({
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
});

Vue.use(socket);
