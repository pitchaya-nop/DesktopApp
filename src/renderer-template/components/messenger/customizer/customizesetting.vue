<template>
  <!--Customizer Icons start -->
  <div class="sidebar-pannle-main">
    <ul>
      <li
        class="rtl-setting icon-btn btn-primary"
        @click="customizeLayoutType()"
      >
        {{ layoutType == "" ? "RTL" : "LTR" }}
      </li>
      <li class="cog-click icon-btn btn-success" @click="open()">
        <i class="fa fa-cog"></i>
      </li>
    </ul>
  </div>
  <!--Customizer Icons end -->
</template>

<script>
import { mapState } from "vuex";

export default {
  data() {
    return {
      layoutType: "",
    };
  },
  computed: {
    ...mapState({
      opencustomizer: (state) => state.common.opencustomizer,
      layout: (state) => state.layout.layout,
      data: (state) => JSON.stringify(state.layout.layout),
    }),
  },
  methods: {
    open() {
      this.$store.state.common.opencustomizer = true;
    },
    customizeLayoutType() {
      if (this.layoutType === "rtl") {
        this.layoutType = "";
      } else {
        this.layoutType = "rtl";
      }
      this.$store.dispatch("layout/setLayoutType", this.layoutType);
    },
  },
};
</script>
