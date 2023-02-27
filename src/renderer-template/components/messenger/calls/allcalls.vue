<template>
  <!--All Call start -->
  <div>
    <li
      :class="{ active: activeIndex === index }"
      v-for="(user, index) in allCalls"
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
            <feather
              v-bind:class="{ missed: user.misscall }"
              :type="user.log"
            ></feather
            >{{ user.time }}
          </h6>
        </div>
        <div class="call-status">
          <div
            class="icon-btn button-effect btn-sm"
            :class="
              user.misscall ? 'btn-outline-danger' : 'btn-outline-success'
            "
          >
            <feather :type="user.log_symbol" size="15" height="15"></feather>
          </div>
        </div>
      </div>
    </li>
  </div>
  <!--All Call end -->
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
      allCalls: (state) => state.common.allCalls,
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
