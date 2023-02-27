<template>
  <div class="col-xl-9 col-lg-8 col-md-7 order-sec">
    <div class="row">
      <BlogCard />
      <Comments />
      <LeaveComments />
    </div>
  </div>
</template>

<script>
import BlogCard from "../blog_card/blog_card.vue";
import Comments from "../comments/comments.vue";
import LeaveComments from "../leave_coments/leave_comments.vue";

export default {
  components: {
    BlogCard,
    Comments,
    LeaveComments,
  },
};
</script>
