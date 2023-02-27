<template>
  <!--Tap-to-Top start -->
  <div
    class="tap-top"
    v-bind:style="display ? 'display:block' : 'display:none'"
    @click="executeScroll()"
  >
    <div><i class="fa fa-angle-double-up"></i></div>
  </div>
  <!--Tap-to-Top end -->
</template>

<script>
export default {
  name: "TapTop",
  data() {
    return {
      display: false,
    };
  },
  mounted() {
    window.addEventListener("scroll", this.handleScroll);
  },
  destroyed() {
    window.removeEventListener("scroll", this.handleScroll);
  },
  methods: {
    executeScroll() {
      window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
    },
    handleScroll() {
      if (window.scrollY > 600) {
        this.display = true;
      } else {
        this.display = false;
      }
    },
  },
};
</script>

