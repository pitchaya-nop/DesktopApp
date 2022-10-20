
import io from "socket.io-client";

export const socket = io('https://test.apigochat.com:443', {
    path: "/socket/socket.io",
    transports: ['websocket'],
    autoConnect: false,
    reconnection: true,
    reconnectionDelay: 1000,
    reconnectionDelayMax: 5000,
    reconnectionAttempts: Infinity
    // withCredentials: true,
    // debug: false
});
export const socketAuth = () => {
    socket.connect()
};
export const socketDisconnect = () => {
    socket.removeAllListeners()
    socket.disconnect()

    console.log(socket);
}

// public func connectSocket() {
//         let serverPath: String = AppConfig.Service.socketUrl
//         let socketURL: URL = URL(string: serverPath)!
//         let authorization: String = "Bearer \(unwrapped(UserDefault.getAccessToken(), with: ""))"
//         socketManager = SocketManager(socketURL: socketURL,
//                                       config: [.log(true),
//                                                .compress,
//                                                .version(.two),
//                                                .path(AppConfig.Path.socketPath),
//                                                .forceWebsockets(true),
//                                                .reconnects(true),
//                                                .reconnectWaitMax(5),
//                                                .reconnectAttempts(-1),
//                                                .forceNew(true),
//                                                .secure(true),
//                                                .extraHeaders(["Authorization": authorization,
//                                                               "Accept": "application/json"])])
//         socketClient = socketManager.defaultSocket
//         self.addHandlers()
//         self.socketClient.connect()
//     }