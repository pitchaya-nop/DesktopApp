/* For Common Params */

import Contact from "../../data/contact.json";
import Logs from "../../data/chatcontent.json";
import layout from "../../data/layout.json";
import wallpaper from "../../data/wallpapers.json";

const state = {
  iscontact:false,
  isloadingimage:false,
  isblockroom: false,
  loadingchat: true,
  activechatType: 1,
  activechat: 1,
  activecall: 1,
  activecalltabs: 1,
  toggleleftside: layout.config.sidebar_setting,
  Contact: Contact.contacts,
  allCalls: Contact.allCalls,
  allwallpaper: wallpaper.wallpaper,
  receivedCalls: Contact.received_Dail_Calls,
  dialCalls: Contact.received_Dail_Calls,
  missedCalls: Contact.missedCalls,
  calllogs: Logs.callcontent,
  showsticker: false,
  showemogi: false,
  showcontactcontent: false,
  showprofilemenu: false,
  activesidebar: 0,
  activesetting: 0,
  activesharedmedia: 1,
  activerightsidebarmenu: 0,
  togglerightside: true,
  opencustomizer: false,
  chatwallpaperIndex: layout.config.wallpaper,
  chatwallpaper: "",
  chatwallpapergrandiant: "",
};

// mutations
const mutations = {
  setLoadingchat: (state, payload) => {
    state.loadingchat = payload

  },
};

// actions
const actions = {
  setLoadingchat: (context, payload) => {
    context.commit("setLoadingchat", payload);
  },
};

export default {
  namespaced: true,
  state,
  actions,
  mutations,
};
