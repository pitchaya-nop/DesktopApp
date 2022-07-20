/* For Left-SideBar Data */

import status from "../../data/status.json";
import favourite from "../../data/favourite.json";
import document from "../../data/document.json";
import contact from "../../data/contactList.json";
import notification from "../../data/notification.json";
import link from "../../data/files.json";

const state = {
  status: status.status_data,
  favourite: favourite.favourite_data,
  document: document.document_data,
  contact: contact.contact_data,
  notification: notification.notification_data,
  link: link.link_data,
  media: link.media_data,
};

// mutations
const mutations = {};

// actions
const actions = {};

export default {
  namespaced: true,
  state,
  actions,
  mutations,
};
