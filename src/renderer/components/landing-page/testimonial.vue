<template>
  <!-- testimonial start -->
    <div class="custom-container testimonial-main">
      <div class="row">
        <div class="col-12">
          <div>
            <div v-swiper:mySwiper="swiperOption">
              <div class="swiper-wrapper">
                <div
                  class="swiper-slide"
                  v-for="(item, index) in testimonial"
                  :key="index"
                >
                  <div class="item">
                    <div class="testimonial-box mt-0">
                      <div class="test-img">
                        <img class="img-fluid" :src="item.img" alt="test-img" /><i
                          v-if="item.heart"
                          class="test-wish fa fa-heart"
                        ></i>
                      </div>
                      <div class="test-contain">
                        <h4>{{ item.manager }}</h4>
                        <h3>{{ item.equipment }}</h3>
                        <h6>{{ item.desc }}</h6>
                        <ul class="test-icon">
                          <li>
                            <a href="https://www.google.com/"
                              ><img
                                class="img-fluid"
                                src="../../assets/images/landing/testimonial/icon1.png"
                                alt="icon-google"
                            /></a>
                          </li>
                          <li>
                            <a href="https://twitter.com/"
                              ><img
                                class="img-fluid"
                                src="../../assets/images/landing/testimonial/icon2.png"
                                alt="icon-google"
                            /></a>
                          </li>
                          <li>
                            <a href="https://www.facebook.com/"
                              ><img
                                class="img-fluid"
                                src="../../assets/images/landing/testimonial/icon3.png"
                                alt="icon-google"
                            /></a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="swiper-button-prev" slot="button-prev"></div>
              <div class="swiper-button-next" slot="button-next"></div>
            </div>
          </div>
        </div>
      </div>
      <div class="testimonial-back-content">
        <img
          class="img-fluid test-img2"
          src="../../assets/images/landing/testimonial/6.png"
          alt="testimonial"
        />
      </div>
    </div>
  <!-- testimonial end -->
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
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
        breakpoints: {
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          600: {
            slidesPerView: 2,
            spaceBetween: 0,
          },
          1070: {
            slidesPerView: 3,
            spaceBetween: 20,
          },
          1600: {
            slidesPerView: 4,
          },
        },
      },
      testimonial: [
        {
          img: require("@/assets/images/landing/testimonial/1.png"),
          heart: true,
          manager: "project manager",
          equipment: "Advanced Equipment",
          desc:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
        },
        {
          img: require("@/assets/images/landing/testimonial/2.png"),
          heart: false,
          manager: "project manager",
          equipment: "Advanced Equipment",
          desc:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
        },
        {
          img: require("@/assets/images/landing/testimonial/3.png"),
          heart: true,
          manager: "project manager",
          equipment: "Advanced Equipment",
          desc:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
        },
        {
          img: require("@/assets/images/landing/testimonial/4.png"),
          heart: true,
          manager: "project manager",
          equipment: "Advanced Equipment",
          desc:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
        },
      ],
    };
  },
};
</script>
