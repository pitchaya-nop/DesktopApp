<template>
  <!--Blog left-sidebar start -->
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
    <div class="custom-container left-blog">
      <div class="row">
        <BlogSidebar />
        <BlogMedia />
      </div>
    </div>
  </section>
  <!--Blog left-sidebar end -->
</template>

<script>
import BlogMedia from "./Common/blog_media.vue";
import BlogSidebar from "./blog_sidebar/blog_sidebar.vue";

export default {
  components: {
    BlogMedia,
    BlogSidebar,
  },
};
</script>
