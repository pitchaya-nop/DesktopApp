<template>
  <div class="col-xl-9 col-lg-8 col-md-7">
    <div
      class="row blog-media"
      v-for="(item, index) in blogDetail"
      :key="index"
    >
      <div class="col-xl-6">
        <div class="blog-side">
          <div class="blog-left">
            <a href="javascript:void(0)"
              ><img class="img-fluid" :src="item.img" alt=""
            /></a>
          </div>
          <div class="blog-right">
            <div>
              <h6>{{ item.date }}</h6>
              <nuxt-link to="/blogs/blog_details">
                  <h4>{{ item.shortDesc }}</h4>
              </nuxt-link>
              <ul class="post-social">
                <li><i class="fa fa-user"> </i>{{ item.user }}</li>
                <li><i class="fa fa-comments"></i> {{ item.comment }}</li>
              </ul>
              <p>{{ item.longDesc }}</p>
            </div>
          </div>
        </div>
      </div>
      <div class="col-xl-6">
        <div class="blog-side">
          <div class="blog-left">
            <a href="javascript:void(0)"
              ><img class="img-fluid" :src="item.img1" alt=""
            /></a>
          </div>
          <div class="blog-right">
            <div>
              <h6>{{ item.date }}</h6>
              <nuxt-link to="/blogs/blog_details">
                <a href="javascript:void(0)">
                  <h4>{{ item.shortDesc }}</h4></a
                >
              </nuxt-link>
              <ul class="post-social">
                <li><i class="fa fa-user"> </i>{{ item.user }}</li>
                <li><i class="fa fa-comments"></i> {{ item.comment }}</li>
              </ul>
              <p>{{ item.longDesc }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      blogDetail: [
        {
          img: require("@/assets/images/blog/1.jpg"),
          img1: require("@/assets/images/blog/2.jpg"),
          date: "25 January 2021",
          shortDesc: "you how all this mistaken idea of denouncing pleasure.",
          user: "Admin",
          comment: "10 Comment",
          longDesc:
            "Consequences that are extremely painful. Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but because occasionally circumstances occur in which toil and pain can procure him some great pleasure.",
        },
        {
          img: require("@/assets/images/blog/3.jpg"),
          img1: require("@/assets/images/blog/4.jpg"),
          date: "25 January 2021",
          shortDesc: "you how all this mistaken idea of denouncing pleasure.",
          user: "Admin",
          comment: "10 Comment",
          longDesc:
            "Consequences that are extremely painful. Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but because occasionally circumstances occur in which toil and pain can procure him some great pleasure.",
        },
        {
          img: require("@/assets/images/blog/1.jpg"),
          img1: require("@/assets/images/blog/2.jpg"),
          date: "25 January 2021",
          shortDesc: "you how all this mistaken idea of denouncing pleasure.",
          user: "Admin",
          comment: "10 Comment",
          longDesc:
            "Consequences that are extremely painful. Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but because occasionally circumstances occur in which toil and pain can procure him some great pleasure.",
        },
      ],
    };
  },
};
</script>
