<template>
  <!-- counter section  start -->
  <section class="counter-sec section-py-space counter-main">
    <div class="container">
      <div class="counter-title">
        <h4 class="title-line">Counters</h4>
      </div>
      <div class="row">
        <div class="col-12">
          <div class="pt-0 counter-slider">
            <div v-swiper:mySwiper="swiperOption">
              <div class="swiper-wrapper">
                <div
                  class="swiper-slide"
                  v-for="(item, index) in counterdata"
                  :key="index"
                >
                  <div class="item">
                    <div class="counter-box-second">
                      <div class="counter-box">
                        <div>
                          <i :class="item.tag"></i>
                          <h6 class="counter-no count">{{ item.count }}</h6>
                          <span>{{ item.desc }} </span>
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
    </div>
  </section>
  <!-- counter section end -->
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
          481: {
            slidesPerView: 2,
          },
          576: {
            slidesPerView: 3,
          },
          992: {
            slidesPerView: 4,
          },
        },
      },
      counterdata: [
        {
          tag: "counter-icon fa fa-user-o",
          count: 80,
          desc: "Happy Clients",
        },
        {
          tag: "counter-icon fa fa-square-o",
          count: 120,
          desc: "Project Completed",
        },
        {
          tag: "counter-icon fa fa-heart-o",
          count: 90,
          desc: "Photo Capture",
        },
        {
          tag: "counter-icon fa fa-comments-o",
          count: 140,
          desc: "Telephonic Talk",
        },
      ],
    };
  },
};
</script>
