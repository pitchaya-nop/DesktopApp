/* Group Chat store For Group Chat Functionality */


const innitialstate = {
  roomdata:null,
  roomtype:'user'
}
const state = {
  roomdata:null,
  roomtype:'user'
};

// getters
const getters = {
  currentRoom: (state) => {
    
    return { room:state.roomdata };
  },
};

// mutations
const mutations = {
  setRoom:(state,payload) =>{
    state.roomdata = payload
  },
  RESET_STATE(state) {
    Object.assign(state, innitialstate)
  }
};

// actions
const actions = {
  resetState({ commit }) {
    commit('RESET_STATE')
  },
  setRoom:(context,payload)=>{
    context.commit("setRoom", payload);
  },
  requestRoom({ commit }, payload) {
    return new Promise((resolve, reject) => {
      try {
        const response = this.$axios.post(`/rooms`, payload);
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
