<template>
  <!--Header start -->
  <header id="home">
    <div class="custom-container">
      <div class="row">
        <div class="col-12">
          <div class="landing-header" v-bind:class="fixedheader ? 'fixed' : ''">
            <div class="main-menu">
              <div>
                <b-navbar
                  toggleable="xl"
                  class="navbar navbar-light"
                >
                  <Logo />
                  <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
                  <Navbar />
                </b-navbar>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </header>
  <!--Header end -->
</template>

<script>
import Logo from "../../common/logo/logo.vue";
import Navbar from "../../common/navbar/navbar.vue";

export default {
  components: {
    Logo,
    Navbar,
  },
  data() {
    return {
      windowTop: 0,
      fixedheader: false,
    };
  },
  mounted() {
    window.addEventListener("scroll", this.onScroll);
  },
  beforeDestroy() {
    window.removeEventListener("scroll", this.onScroll);
  },
  methods: {
    onScroll(e) {
      this.windowTop = e.target.documentElement.scrollTop;
      if (this.windowTop >= 60) {
        this.fixedheader = true;
      } else {
        this.fixedheader = false;
      }
    },
  },
};
</script>
