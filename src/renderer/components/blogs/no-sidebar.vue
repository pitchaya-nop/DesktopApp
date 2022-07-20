<template>
  <!--Blog no-sidebar start -->
  <section class="section-py-space blog-page ratio2_3">
    <ul class="page-decore">
      <li class="top">
        <img
          class="img-fluid inner2"
          src="../../assets/images/landing/footer/2.png"
          alt="footer-back-img"
        />
      </li>
      <li class="bottom">
        <img
          class="img-fluid inner2"
          src="../../assets/images/landing/footer/2.png"
          alt="footer-back-img"
        />
      </li>
    </ul>
    <div class="custom-container">
      <div class="row">
        <BlogMedia />
      </div>
    </div>
  </section>
  <!--Blog no-sidebar end -->
</template>

<script>
import BlogMedia from "./blog_no-sidebar/blog_no-sidebar.vue";

export default {
  components: {
    BlogMedia,
  },
};
</script>
