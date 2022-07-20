/* Group Chat store For Group Chat Functionality */



const state = {
  profile: null,
  token: window.localStorage.getItem('auth') || '',
  ownerid: null,
  ofiicialprofile:null
};

// getters
const getters = {
  token: (state) => state.token,
  profile: (state) => state.profile,
  ofiicialprofile:(state)=>state.ofiicialprofile,

 
};

// mutations
const mutations = {


  SET_TOKEN(state, token) {
    state.token = token
    if (!token) {
      window.localStorage.removeItem('auth')
    } else {
      window.localStorage.setItem('auth', token)
    }
  },

  SET_PROFILE(state, profile) {
    state.profile = profile
    if (!state.profile.id) {
      window.localStorage.removeItem('_ref')
    } else {
      window.localStorage.setItem('_ref', state.profile.id)
    }
  },
  SET_OFFICIAL_PROFILE(state, officialprofile) {
    state.ofiicialprofile = officialprofile
  },
  


};

// actions
const actions = {

  requestSignInViaEmail({ commit }, payload) {
    return new Promise((resolve, reject) => {
      try {
        const response = this.$axios.$post(`/auth/email/signin`, payload);
        resolve(response);
      } catch (e) {
        reject(e);
      }
    });
  },
  setToken({ commit }, token) {
    commit('SET_TOKEN', token)
  },

  setProfile({ commit }, profile) {
    commit('SET_PROFILE', profile)
  },
  setOfficialProfile({ commit }, officialprofile) {
    commit('SET_OFFICIAL_PROFILE', officialprofile)
  },
  getMe() {
    return new Promise((resolve, reject) => {
      try {
        const response = this.$axios.$post(`/profile/me`);
        resolve(response);
      } catch (e) {
        reject(e);
      }
    });
  }

};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
};
