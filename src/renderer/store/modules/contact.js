/* Group Chat store For Group Chat Functionality */

const innitialstate={
  activecontact: null,
  contactdata: null
}
const state = {
  activecontact: null,
  contactdata: null
};

// getters
const getters = {
  currentContact: (state) => {
    
    return { contacts: state.contactdata }
  }

};

// mutations
const mutations = {
  setActiveContact: (state, payload) => {
    
    state.activecontact = payload;

  },
  setContact: (state, payload) => {
    
    state.contactdata = payload;
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
  setActivecontact: (context, payload) => {
  
    context.commit("setActiveContact", payload);
  },
  setContact:(context, payload)=>{
    
    context.commit("setContact", payload);
  },
  requestContactAllowAutoAdd({ commit }, payload) {
    return new Promise((resolve, reject) => {
      try {
        const response = this.$axios.post(`/contact/allow/auto/add`, payload);
        resolve(response);
      } catch (e) {
        reject(e);
      }
    });
  },
  requestContactAutoAdd({ commit }, payload) {
    return new Promise((resolve, reject) => {
      try {
        const response = this.$axios.post(`/contact/auto/add`, payload);
        resolve(response);
      } catch (e) {
        reject(e);
      }
    });
  },
  requestContactNewUserAdd({ commit }, payload) {
    return new Promise((resolve, reject) => {
      try {
        const response = this.$axios.post(`/contact/new-user/add`, payload);
        resolve(response);
      } catch (e) {
        reject(e);
      }
    });
  },
  requestContactFrinds({ commit }, payload) {
    return new Promise((resolve, reject) => {
      try {
        const response = this.$axios.post(`/contact/friends`, payload);
        resolve(response);
      } catch (e) {
        reject(e);
      }
    });
  },
  requestContactFrindFavorite({ commit }, payload) {
    return new Promise((resolve, reject) => {
      try {
        const response = this.$axios.post(`/contact/friend/favorite`, payload);
        resolve(response);
      } catch (e) {
        reject(e);
      }
    });
  },
  requestContactFrindUnFavorite({ commit }, payload) {
    return new Promise((resolve, reject) => {
      try {
        const response = this.$axios.post(`/contact/friend/unfavorite`, payload);
        resolve(response);
      } catch (e) {
        reject(e);
      }
    });
  },
  requestContactFrindHide({ commit }, payload) {
    return new Promise((resolve, reject) => {
      try {
        const response = this.$axios.post(`/contact/friend/hide`, payload);
        resolve(response);
      } catch (e) {
        reject(e);
      }
    });
  },
  requestContactFrindUnHide({ commit }, payload) {
    return new Promise((resolve, reject) => {
      try {
        const response = this.$axios.post(`/contact/friend/unhide`, payload);
        resolve(response);
      } catch (e) {
        reject(e);
      }
    });
  },
  requestContactFrindBlock({ commit }, payload) {
    return new Promise((resolve, reject) => {
      try {
        const response = this.$axios.post(`/contact/friend/block`, payload);
        resolve(response);
      } catch (e) {
        reject(e);
      }
    });
  },
  requestContactFrindUnBlock({ commit }, payload) {
    return new Promise((resolve, reject) => {
      try {
        const response = this.$axios.post(`/contact/friend/unblock`, payload);
        resolve(response);
      } catch (e) {
        reject(e);
      }
    });
  },
  requestContactFrindDelete({ commit }, payload) {
    return new Promise((resolve, reject) => {
      try {
        const response = this.$axios.post(`/contact/friend/delete`, payload);
        resolve(response);
      } catch (e) {
        reject(e);
      }
    });
  },
  requestContactFrindHideList({ commit }, payload) {
    return new Promise((resolve, reject) => {
      try {
        const response = this.$axios.post(`/contact/friend/hide/list`, payload);
        resolve(response);
      } catch (e) {
        reject(e);
      }
    });
  },
  requestContactFrindBlockList({ commit }, payload) {
    return new Promise((resolve, reject) => {
      try {
        const response = this.$axios.post(`/contact/friend/block/list`, payload);
        resolve(response);
      } catch (e) {
        reject(e);
      }
    });
  },
  requestContactFrindRequest({ commit }, payload) {
    return new Promise((resolve, reject) => {
      try {
        const response = this.$axios.post(`/contact/friend/request`, payload);
        resolve(response);
      } catch (e) {
        reject(e);
      }
    });
  },
  requestContactFrindAccept({ commit }, payload) {
    return new Promise((resolve, reject) => {
      try {
        const response = this.$axios.post(`/contact/friend/accept`, payload);
        resolve(response);
      } catch (e) {
        reject(e);
      }
    });
  },
  requestContactGoChatIdSearch({ commit }, payload) {
    return new Promise((resolve, reject) => {
      try {
        const response = this.$axios.post(`/contact/friend/gochat-id/search`, payload);
        resolve(response);
      } catch (e) {
        reject(e);
      }
    });
  },
  requestContactMobileSearch({ commit }, payload) {
    return new Promise((resolve, reject) => {
      try {
        const response = this.$axios.post(`/contact/friend/mobile/search`, payload);
        resolve(response);
      } catch (e) {
        reject(e);
      }
    });
  },
  requestContactQRSearch({ commit }, payload) {
    return new Promise((resolve, reject) => {
      try {
        const response = this.$axios.post(`/contact/friend/qr-code/search`, payload);
        resolve(response);
      } catch (e) {
        reject(e);
      }
    });
  },
  requestContactFriendHideBlockCount({ commit }, payload) {
    return new Promise((resolve, reject) => {
      try {
        const response = this.$axios.post(`/contact/friend/hide-block/count`, payload);
        resolve(response);
      } catch (e) {
        reject(e);
      }
    });
  },
  requestContactFriendRecommend({ commit }, payload) {
    return new Promise((resolve, reject) => {
      try {
        const response = this.$axios.post(`/contact/friend/recommend`, payload);
        resolve(response);
      } catch (e) {
        reject(e);
      }
    });
  },
  requestContactAllowAddingId({ commit }, payload) {
    return new Promise((resolve, reject) => {
      try {
        const response = this.$axios.post(`/contact/allow/adding/id`, payload);
        resolve(response);
      } catch (e) {
        reject(e);
      }
    });
  },
  requestContactAllowAddingMobile({ commit }, payload) {
    return new Promise((resolve, reject) => {
      try {
        const response = this.$axios.post(`/contact/allow/adding/mobile`, payload);
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
