<template>
  <div>
    <div class="inner-page">
      <Header />
      <Breadcrumbs main="Home" title="FAQ" />
    </div>
    <Faq />
    <Footer />
    <TapTop />
  </div>
</template>

<script>
import Header from "../../components/common/header/header.vue";
import Breadcrumbs from "../../components/common/breadcrumb/bread_crumbs.vue";
import Faq from "../../components/bonus_page/faq/index.vue";
import Footer from "../../components/common/footer/footer.vue";
import TapTop from "../../components/common/tap-to-top/taptop.vue";

export default {
  components: {
    Header,
    Breadcrumbs,
    Faq,
    Footer,
    TapTop,
  },
};
</script>
