<template>
    <!-- pricing plan start -->
    <section class="section-py-space" id="price">
      <div class="container-fluid">
        <div class="row">
          <div class="col-12">
            <div class="landing-title">
              <div>
                <h1>pricing plan</h1>
              </div>
              <div class="sub-title">
                <div>
                  <h4>Choose Your Pricing Plan</h4>
                  <h2>Affordable for everyone!</h2>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="custom-container">
        <div class="row">
          <div class="col-12">
            <div>
              <div v-swiper:mySwiper="swiperOption">
                <div class="swiper-wrapper">
                  <div
                    class="swiper-slide"
                    v-for="(item, index) in plans"
                    :key="index"
                  >
                    <div class="item">
                      <div class="pricing-box">
                         <div class="pricing-icon">
                            <img
                              class="img-fluid"
                              :src="item.img"
                              alt="test-img"
                            />
                         </div>
                          <div class="pricing-content">
                            <h2>{{ item.plan }}</h2>
                            <h4>{{ item.price }} | {{ item.palne }}</h4><nuxt-link class="btn pricing-btn" to="/bonus/price">get started</nuxt-link>
                          </div>
                          <ul class="avb-price">
                            <li><i class="fa fa-check"></i>{{ item.feature1 }}</li>
                            <li><i class="fa fa-check"></i>{{ item.feature2 }}</li>
                            <li><i class="fa fa-check"></i>{{ item.feature3 }}</li>
                          </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
    <!-- pricing plan end -->
</template>

<script>
export default {
  data() {
    return {
      swiperOption: {
        loop: true,
        autoplay: {
          delay: 2000,
        },
        breakpoints: {
          600: {
            slidesPerView: 2,
            spaceBetween: 0,
          },
          1070: {
            slidesPerView: 3,
            spaceBetween: 0,
          },
          1600: {
            slidesPerView: 3,
          },
        },
      },
      plans: [
        {
          img: require("@/assets/images/landing/pricing-plan/1.png"),
          plan :"Free Plan",
          price:"$0",
          palne:"Totally Free Plane",
          feature1 : "Common Feature is Available",
          feature2 : "sxgsgerggregrterett",
          feature3 : "Try for free, Forever!"
        },
        {
          img: require("@/assets/images/landing/pricing-plan/2.png"),
          plan :"Professional",
          price:"$59",
          palne:"Professional Plane",
          feature1 : "All Features is Available",
          feature2 : "High Definition Full-screen",
          feature3 : "24/7 phone and email support"
        },
        {
          img: require("@/assets/images/landing/pricing-plan/3.png"),
          plan :"Advanced",
          price:"$99",
          palne:"Advance Plane",
          feature1 : "All Features is Available",
          feature2 : "High Definition Full-screen",
          feature3 : "24/7 phone and email support"
        }
      ],
    };
  },
};
</script>
