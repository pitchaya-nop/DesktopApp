
import io from "socket.io-client";
export const socket = io('https://dev.apigochat.com/');

// path: "/socket/socket.io",
//     extraHeaders: {
//         Authorization: `Bearer ${window.localStorage.getItem("auth")}`,
//         Accept: "application/json"
//     },
//     secure: true,
//     reconnection: true,
//     transports: ["polling"],
//     transportOptions: {
//         polling: {
//             extraHeaders: {
//                 Authorization: `Bearer ${window.localStorage.getItem("auth")}`,
//                 Accept: "application/json"
//             },
//         },
//     },
export const socketAuth = (token) => {
    console.log(111111);
    socket.io.opts.path = "/socket/socket.io"
    socket.io.opts.extraHeaders = {
        Authorization: `Bearer ${window.localStorage.getItem("auth") ? window.localStorage.getItem("auth") : token}`,
        Accept: "application/json"
    }
    socket.io.opts.secure = true
    socket.io.opts.reconnection = true
    socket.io.opts.transports = ['polling']
    socket.io.opts.transportOptions = {
        polling: {
            extraHeaders: {
                Authorization: `Bearer ${window.localStorage.getItem("auth") ? window.localStorage.getItem("auth") : token}`,
                Accept: "application/json"
            },
        },
    }
    socket.io.open()
    // socket.io.disconnect();  //This uses the same socket and disconnect with the server.
    //   socket.io.opts.path = '/socket/socket.io/'
    // socket.io.opts.extraHeaders = {
    //   'Authorization': `Bearer ${window.localStorage.getItem('auth')}`,
    //   'Accept': "application/json"
    // };
    // socket.io.opts.transports = ['websocket']
    // socket.io.opts.rejectUnauthorized = false
    // socket.io.opts.reconnection = true
    // socket.io.opts.reconnectionAttempts = -1
    // socket.io.opts.upgrade = false
    // socket.io.opts.agent = false
    // socket.io.opts.secure = true
    // socket.io.opts.forceNew = true
    // socket.io.opts.withCredentials = true
    // socket.io.opts.forceWebsockets = true
    // socket.io.opts.transportOptions = {
    //   polling: {
    //     extraHeaders: {
    //       'Authorization': `Bearer ${window.localStorage.getItem('auth')}`,
    //       'Accept': "application/json"
    //     },
    //   },
    // };
    //   socket.io.open() //Opens up a new connection with `x-auth-token` in headers
};
export const socketDisconnect = () => {
    socket.disconnect()
    console.log(socket);
}


//   // let serverPath: String = AppConfig.Service.socketUrl
//   // let socketURL: URL = URL(string: serverPath)!
//   // let authorization: String = "Bearer \(unwrapped(UserDefault.getAccessToken(), with: ""))"
//   // socketManager = SocketManager(socketURL: socketURL,
//   //                               config: [.log(true),
//   //                                        .compress,
//   //                                        .version(.two),
//   //                                        .path(AppConfig.Path.socketPath),
//   //                                        .forceWebsockets(true),
//   //                                       //  .reconnects(true),
//   //                                        .reconnectWaitMax(5),
//   //                                       //  .reconnectAttempts(-1),
//   //                                        .forceNew(true),
//   //                                        .secure(true),
//   //                                        .extraHeaders(["Authorization": authorization,
//   //                                                       "Accept": "application/json"])])
//   // socketClient = socketManager.defaultSocket
//   // self.addHandlers()
//   // self.socketClient.connect()
