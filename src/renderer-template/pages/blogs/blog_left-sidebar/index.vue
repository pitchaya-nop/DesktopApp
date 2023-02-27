<template>
  <div>
    <BlogHeader />
    <Blog />
    <Footer />
    <TapTop />
  </div>
</template>

<script>
import BlogHeader from "../../../components/blogs/Common/blog_header.vue";
import Blog from "../../../components/blogs/left-sidebar";
import Footer from "../../../components/common/footer/footer.vue";
import TapTop from "../../../components/common/tap-to-top/taptop.vue";

export default {
  components: {
    BlogHeader,
    Blog,
    Footer,
    TapTop,
  },
};
</script>
