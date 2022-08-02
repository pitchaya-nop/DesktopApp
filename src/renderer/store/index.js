import Vue from "vue";
import Vuex from "vuex";
import chat from "./modules/chat";
import groupchat from "./modules/groupchat";
import common from "./modules/common";
import sidebar from "./modules/sidebar";
import layout from "./modules/layout";
import auth from "./modules/auth";
import contact from "./modules/contact";
import room from "./modules/room";
import official from './modules/official'

Vue.use(Vuex);

const createStore = () => {
  return new Vuex.Store({
    modules: {
      chat,
      groupchat,
      common,
      sidebar,
      layout,
      auth,
      contact,
      room,
      official
    },
  });
};
export default createStore;
