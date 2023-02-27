<template>
  <!--Bonus Page About start -->
  <div>
    <ul class="page-decore">
      <li class="top">
        <img
          class="img-fluid inner2"
          src="../../../assets/images/landing/footer/2.png"
          alt="footer-back-img"
        />
      </li>
      <li class="bottom">
        <img
          class="img-fluid inner2"
          src="../../../assets/images/landing/footer/2.png"
          alt="footer-back-img"
        />
      </li>
    </ul>

    <AboutPage />
    <section class="section-py-space">
    <Testimonial />
    </section>
    <SecureApp />
    <Counter />
  </div>
  <!--Bonus Page About end -->
</template>

<script>
import AboutPage from "../../bonus_page/about/about-page.vue";
import Testimonial from "../../landing-page/testimonial.vue";
import SecureApp from "../../landing-page/secure-app.vue";
import Counter from "../../bonus_page/about/counter.vue";

export default {
  components: {
    AboutPage,
    Testimonial,
    SecureApp,
    Counter,
  },
};
</script>
