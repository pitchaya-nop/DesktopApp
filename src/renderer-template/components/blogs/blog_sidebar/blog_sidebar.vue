<template>
  <div class="col-xl-3 col-lg-4 col-md-5">
    <div class="blog-sidebar">
      <BlogSearch />
      <BlogFollowUs />
      <BlogRecentBlog />
      <BlogPopularBlog />
      <BlogTags />
    </div>
  </div>
</template>

<script>
import BlogSearch from "../Common/blog_search.vue";
import BlogFollowUs from "../Common/blog_follow_us.vue";
import BlogRecentBlog from "../Common/blog_recent.vue";
import BlogPopularBlog from "../Common/blog_popular.vue";
import BlogTags from "../Common/blog_tags.vue";

export default {
  components: {
    BlogSearch,
    BlogFollowUs,
    BlogRecentBlog,
    BlogPopularBlog,
    BlogTags,
  },
};
</script>
