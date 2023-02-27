/* Direct Chat store For Direct Chat Functionality */

import Users from "../../data/directchat.json";
// import VueSocketIO from "vue-socket.io";
// import SocketIO from "socket.io-client";
// import Vue from "vue";
const innitialstate = {
  officialdata: null
}
const state = {
  officialdata: null
};

// getters
const getters = {
  /* Get Current Direct Chat History */

  officialList: (state) => {
    // var chats = state.chats.find((chat) => {
    //   if (chat.id == state.activeuser) return chat;
    // });
    // var users = state.users.find((user) => {
    //   if (user.id == state.activeuser) return user;
    // });
    // return { ...users, chat: chats };


    // let message = this.getdataDB
    // var chats = message.objects("MESSAGE").filtered(`sessionid === ${state.activeuser}`)
    return { listoa: state.officialdata };
  },
};

// mutations 
const mutations = {
  setOfficial: (state, payload) => {
    state.officialdata = payload
  },
};


const actions = {
  setOfficial: (context, payload) => {

      context.commit("setOfficial", payload);


  },
  requestOfficial({ commit }, payload) {
    return new Promise((resolve, reject) => {
      try {
        const response = this.$axios.post(`/oa/lists`, payload);
        resolve(response);
      } catch (e) {
        reject(e);
      }
    });
  },
  requestOfficialRoom({ commit }, payload) {
    return new Promise((resolve, reject) => {
      try {
        const response = this.$axios.post(`/oa/rooms`, payload);
        resolve(response);
      } catch (e) {
        reject(e);
      }
    });
  },
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
};
