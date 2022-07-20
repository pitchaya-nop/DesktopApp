<template>
  <!-- Right-Sidebar Files's Link start -->
  <div
    class="tab-pane fade"
    :class="activesharedmedia == 2 ? 'active show' : ''"
    id="tab2"
  >
    <div class="link-group" v-for="(link, index) in links" :key="link.id">
      <div class="media">
        <feather type="link" size="15" height="15"></feather>
        <div class="media-body">
          <h5 class="mt-0">{{ link.themeName }}</h5>
          <h6>{{ link.time }}</h6>
        </div>
      </div>
      <a :href="link.themeLink">{{ link.placeholder }}</a>
      <div class="media">
        <img class="img-fluid" :src="getImgUrl(link.logo)" alt="media-img" />
        <div class="media-body">
          <h5>{{ link.template }}</h5>
          <h6 class="mt-0">{{ link.templateLine }}</h6>
        </div>
      </div>
    </div>
  </div>
  <!-- Right-Sidebar Files's Link end -->
</template>

<script>
import { mapState } from "vuex";
export default {
  computed: {
    ...mapState({
      links: (state) => state.sidebar.link,
      activesharedmedia: (state) => state.common.activesharedmedia,
    }),
  },
  methods: {
    getImgUrl(path) {
      return require("../../../../assets/images/" + path);
    },
  },
};
</script>
