<template>
  <!--Page Not Found start -->
  <client-only>
    <div>
      <div class="inner-page">
        <Header />
        <Breadcrumbs main="Home" title="404" />
      </div>
      <Errorpage />
      <Footer />
      <TapTop />
    </div>
  </client-only>
  <!--Page Not Found end -->
</template>

<script>
import Header from "../../components/common/header/header.vue";
import Breadcrumbs from "../../components/common/breadcrumb/bread_crumbs.vue";
import Errorpage from "./errorpage.vue";
import Footer from "../../components/common/footer/footer.vue";
import TapTop from "../../components/common/tap-to-top/taptop.vue";

export default {
  components: {
    Header,
    Breadcrumbs,
    Errorpage,
    Footer,
    TapTop,
  },
};
</script>
