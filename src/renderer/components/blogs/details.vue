<template>
  <!--Blog details start -->
  <section class="blog-detail-page section-py-space blog-page">
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
        <BlogSidebar />
        <BlogDetail />
      </div>
    </div>
  </section>
  <!--Blog details end -->
</template>

<script>
import BlogSidebar from "./blog_sidebar/blog_sidebar.vue";
import BlogDetail from "./blog_details/blog_detail.vue";

export default {
  components: {
    BlogSidebar,
    BlogDetail,
  },
};
</script>
