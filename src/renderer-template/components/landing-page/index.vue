<template>
  <!--Landing Page start -->
  <client-only>
    <div class="theme-landing">
      <Header />
      <Slider />
      <AppDesign />
      <ChitChat />
      <TeamWork />
      <SecureApp />
      <Collaboration />
      

      <section class="section-py-space light-bg">
        <div class="landing-title">
          <div>
            <h1>Team</h1>
          </div>
          <div class="sub-title">
            <div>
              <h4>Team</h4>
              <h2>Our Experts</h2>
            </div>
          </div>
        </div>
        <Testimonial />
      </section>

      
      <PricingPlan />
      <SubscribeUpdate />
      <Footer />
      <TapTop />
    </div>
  </client-only>
  <!--Landing Page end -->
</template>

<script>
import Header from "../common/header/header.vue";
import Logo from "../common/logo/logo.vue";
import Navbar from "../common/navbar/navbar.vue";
import Slider from "../landing-page/slider.vue";
import AppDesign from "../landing-page/app-design.vue";
import ChitChat from "../landing-page/chit-chat.vue";
import TeamWork from "../landing-page/team-work.vue";
import Collaboration from "../landing-page/collaboration.vue";
import Testimonial from "../landing-page/testimonial.vue";
import SecureApp from "../landing-page/secure-app.vue";
import PricingPlan from "../landing-page/pricing-plan.vue";
import SubscribeUpdate from "../landing-page/subscribe-update.vue";
import Footer from "../common/footer/footer.vue";
import TapTop from "../common/tap-to-top/taptop.vue";

export default {
  components: {
    Header,
    Logo,
    Navbar,
    Slider,
    AppDesign,
    ChitChat,
    TeamWork,
    Collaboration,
    Testimonial,
    SecureApp,
    PricingPlan,
    SubscribeUpdate,
    Footer,
    TapTop,
  },
  head() {
    return {
      bodyAttrs: {
        class: 'theme-landing-main',
      },
    };
  },
};
</script>


