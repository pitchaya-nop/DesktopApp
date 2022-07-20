<template>
  <!--Missed Call start -->
  <div class="tab-content" id="contactTabContent">
    <div
      class="tab-pane fade"
      :class="activecalltabs == 4 ? 'show active' : ''"
      id="con2"
      role="tabpanel"
      aria-labelledby="con2-tab"
    >
      <ul class="call-log-main">
        <li
          :class="{ active: activeIndex === index }"
          v-for="(user, index) in missedCalls"
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
              <h6>
                <feather class="missed" type="corner-left-down"></feather
                >{{ user.time }}
              </h6>
            </div>
            <div class="call-status">
              <div class="icon-btn btn-outline-danger button-effect btn-sm">
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
  <!--Missed Call end -->
</template>

<script>
import { mapState } from "vuex";

export default {
  data() {
    return {
      activeIndex: 0,
      styleObject: {
        "background-size": "cover",
        "background-position": "center",
        display: "block",
      },
    };
  },
  computed: {
    ...mapState({
      missedCalls: (state) => state.common.missedCalls,
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
