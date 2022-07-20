<template>
  <div class="inner-page">
    <Header />
    <Breadcrumbs main="Home" title="Blog" />
  </div>
</template>

<script>
import Header from "../../common/header/header.vue";
import Breadcrumbs from "../../common/breadcrumb/bread_crumbs.vue";

export default {
  components: {
    Header,
    Breadcrumbs,
  },
};
</script>
