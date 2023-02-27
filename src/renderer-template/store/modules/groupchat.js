/* Group Chat store For Group Chat Functionality */

import Users from "../../data/groupchat.json";

const state = {
  users: Users.data,
  chats: Users.chat,
  groupchatuser: Users.groupchatusers,
  activeuser: 0,
  typing: false,
};

// getters
const getters = {
  /* Get Current Group Chat History */
  currentChat: (state) => {
    var chats = state.chats.find((chat) => {
      if (chat.id == state.activeuser) return chat;
    });
    var users = state.users.find((user) => {
      if (user.id == state.activeuser) return user;
    });
    return { ...users, chat: chats };
  },
};

// mutations
const mutations = {
  /* Set Active Group Chat */
  setActiveuser: (state, payload) => {
    state.activeuser = payload;

    const chats = state.chats.find((chat) => {
      if (chat.id == payload) return chat;
    });
    if (!chats) {
      state.users.find((user) => {
        if (user.id == payload) {
          user.profile = "profile online";
        }
      });
      state.chats.push({
        id: payload,
        users: [0, payload],
        lastMessageTime: "Last seen yesterday 14:14",
        messages: [],
      });
    }
  },

  /* Add Group Chat Sticker */
  addSticker: (state, payload) => {
    var today = new Date().toLocaleString("en-US", {
      hour: "numeric",
      minute: "numeric",
      hour12: true,
    });
    const id = state.activeuser;
    const addchat = state.chats.find((chat) => chat.id == id);
    addchat.messages.push({
      sender: 0,
      time: today.toLowerCase(),
      stickerpath: payload,
      sticker: true,
    });
  },

  /* Add Group Chat Text And Emogi*/
  addChat: (state, payload) => {
    var today = new Date().toLocaleString("en-US", {
      hour: "numeric",
      minute: "numeric",
      hour12: true,
    });
    const id = state.activeuser;
    const addchat = state.chats.find((chat) => chat.id == id);
    addchat.messages.push({
      sender: 0,
      time: today.toLowerCase(),
      text: payload,
      lastmsg: true,
    });
    state.typing = true;
  },

  /* Add Group Chat AutoResponse */
  addChatResponce: (state) => {
    var today = new Date().toLocaleString("en-US", {
      hour: "numeric",
      minute: "numeric",
      hour12: true,
    });
    const id = state.activeuser;
    const addchat = state.chats.find((chat) => chat.id == id);
    const ChatUser = state.users.find((user) => user.id == id);
    setTimeout(function() {
      addchat.messages.push({
        sender: 1,
        img: "contact/1.jpg",
        lastmsg: true,
        time: today.toLowerCase(),
        text: `Hi, Sorry I am busy right now, I will text you later`,
      });
      state.typing = false;
    }, 3000);
  },
};

// actions
const actions = {
  setActiveuser: (context, payload) => {
    context.commit("setActiveuser", payload);
  },

  addSticker: (context, payload) => {
    context.commit("addSticker", payload);
  },

  addChat: (context, payload) => {
    context.commit("addChat", payload);
    setTimeout(function() {
      context.commit("addChatResponce");
    }, 1000);
  },
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
};
