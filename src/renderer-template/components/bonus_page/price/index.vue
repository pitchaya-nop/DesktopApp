<template>
  <!--Bonus Page Price start -->
  <client-only>
    <div>
      <div class="inner-page">
        <Header />
        <Breadcrumbs main="Home" title="Price" />
      </div>
      <BonusPrice />
      <Footer />
      <TapTop />
    </div>
  </client-only>
  <!--Bonus Page Price end -->
</template>

<script>
import Header from "../../../components/common/header/header.vue";
import Breadcrumbs from "../../../components/common/breadcrumb/bread_crumbs.vue";
import BonusPrice from "./bonusprice.vue";
import Footer from "../../../components/common/footer/footer.vue";
import TapTop from "../../../components/common/tap-to-top/taptop.vue";

export default {
  components: {
    Header,
    Breadcrumbs,
    BonusPrice,
    Footer,
    TapTop,
  },
};
</script>
