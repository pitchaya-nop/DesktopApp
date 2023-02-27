/* Layout store For Layout */

import Layout from "../../data/layout.json";

const state = {
  layout: Layout.config,
};

// getters
const getters = {};

// mutations
const mutations = {
  setLayoutType: (state, payload) => {
    if (payload === "") {
      document.body.classList.remove("rtl");
    } else {
      document.body.classList.add(payload);
    }
  },
  setLayout: (state, payload) => {
    if (payload === "") {
      document.body.classList.remove("dark");
    } else {
      document.body.classList.add(payload);
    }
  },
  setsidebar_layout: (state, payload) => {
    state.layout.sidebar_layout = payload;
  },
  setsidebar_setting: (state, payload) => {
    state.layout.sidebar_setting = payload;
  },
  setcolor: (state, payload) => {
    state.layout.color = payload;
  },
  setwallpaper: (state, payload) => {
    state.layout.wallpaper = payload;
  },
};

// actions
const actions = {
  setLayoutType: (context, payload) => {
    context.commit("setLayoutType", payload);
  },
  setLayout: (context, payload) => {
    context.commit("setLayout", payload);
  },
  setsidebar_layout: (context, payload) => {
    context.commit("setsidebar_layout", payload);
  },
  setsidebar_setting: (context, payload) => {
    context.commit("setsidebar_setting", payload);
  },
  setcolor: (context, payload) => {
    context.commit("setcolor", payload);
  },
  setwallpaper: (context, payload) => {
    context.commit("setwallpaper", payload);
  },
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
};
