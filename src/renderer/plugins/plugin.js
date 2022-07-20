import Vue from "vue";
import VueAwesomeSwiper from "vue-awesome-swiper";
import Breadcrumbs from "../components/common/breadcrumb/bread_crumbs.vue";
import VueFeather from "vue-feather";
import firebase from "firebase/app";

Vue.use(VueAwesomeSwiper);
Vue.component("Breadcrumbs", Breadcrumbs);
Vue.use(VueFeather);

const config = {
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_AUTH_DOMAIN",
  databaseURL: "YOUR_DATABASE_URL",
  projectId: "YOUR_PROJECT_ID",
  storageBucket: "YOUR_STORAGE_BUCKET",
  messagingSenderId: "YOUR_MESSAGE_SENDER_ID",
  appId: "YOUR_API_ID",
};
firebase.initializeApp(config);
