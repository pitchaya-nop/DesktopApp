<template>
  <!--Dial Call start -->
  <div class="tab-content" id="contactTabContent">
    <div
      class="tab-pane fade"
      :class="activecalltabs == 3 ? 'show active' : ''"
      id="con4"
      role="tabpanel"
      aria-labelledby="con4-tab"
    >
      <ul class="call-log-main">
        <li
          :class="{ active: activeIndex === index }"
          v-for="(user, index) in dialCalls"
          :key="user.id"
          @click="setActive(index)"
        >
          <div class="call-box">
            <div
              class="profile"
              :class="user.status"
              :style="[
                { 'background-image': 'url(' + getImgUrl(user.img) + ')' },
                styleObject,
              ]"
            ></div>
            <div class="details">
              <h5>{{ user.name }}</h5>
              <h6><feather type="arrow-up-right"></feather>{{ user.time }}</h6>
            </div>
            <div class="call-status">
              <div class="icon-btn btn-outline-success button-effect btn-sm">
                <feather
                  :type="user.log_symbol"
                  size="15"
                  height="15"
                ></feather>
              </div>
            </div>
          </div>
        </li>
      </ul>
    </div>
  </div>
  <!--Dial Call end -->
</template>

<script>
import { mapState } from "vuex";

export default {
  data() {
    return {
      activeIndex: undefined,
      styleObject: {
        "background-size": "cover",
        "background-position": "center",
        display: "block",
      },
    };
  },
  computed: {
    ...mapState({
      dialCalls: (state) => state.common.dialCalls,
      activecalltabs: (state) => state.common.activecalltabs,
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
