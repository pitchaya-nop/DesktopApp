<template>
  <!--Contact start -->
  <div
    class="tab-pane fade"
    :class="activechat == 3 ? 'show active' : ''"
    id="contact"
    role="tabpanel"
    aria-labelledby="contact-tab"
  >
    <ul class="contact-log-main">
      <li
        :class="{ active: activeIndex === index }"
        v-for="(contact, index) in contacts"
        :key="contact.id"
        @click="setActive(index)"
      >
        <div class="contact-box">
          <div
            class="profile"
            :class="contact.status"
            :style="[
              { 'background-image': 'url(' + getImgUrl(contact.img) + ')' },
              styleObject,
            ]"
          ></div>
          <div class="details">
            <h5>{{ contact.name }}</h5>
            <h6>{{ contact.phone }}</h6>
          </div>
          <div class="contact-action">
            <div class="icon-btn btn-outline-primary btn-sm button-effect">
              <feather type="phone" size="15" height="15"></feather>
            </div>
            <div class="icon-btn btn-outline-success btn-sm button-effect">
              <feather type="video" size="15" height="15"></feather>
            </div>
          </div>
        </div>
      </li>
    </ul>
  </div>
  <!--Contact end -->
</template>

<script>
import { mapState } from "vuex";

export default {
  data() {
    return {
      activeIndex: 1,
      styleObject: {
        "background-size": "cover",
        "background-position": "center",
        display: "block",
      },
    };
  },
  computed: {
    ...mapState({
      contacts: (state) => state.common.Contact,
      activechat: (state) => state.common.activechat,
    }),
  },
  methods: {
    getImgUrl(path) {
      return require("../../../assets/images/" + path);
    },
    setActive(index) {
      this.activeIndex = index;
    },
  },
};
</script>
