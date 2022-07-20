<template>
  <div>
    <div class="inner-page">
      <Header />
      <Breadcrumbs main="Home" title="About" />
    </div>
    <div>
      <About />
    </div>
    <Footer />
    <TapTop />
  </div>
</template>

<script>
import Header from "../../components/common/header/header.vue";
import Breadcrumbs from "../../components/common/breadcrumb/bread_crumbs.vue";
import About from "../../components/bonus_page/about/index.vue";
import Footer from "../../components/common/footer/footer.vue";
import TapTop from "../../components/common/tap-to-top/taptop.vue";

export default {
  components: {
    Header,
    Breadcrumbs,
    About,
    Footer,
    TapTop,
  },
};
</script>
