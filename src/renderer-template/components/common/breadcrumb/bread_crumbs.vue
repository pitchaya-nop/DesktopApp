<template>
  <!--Breadcrumb start -->
  <section class="breadcrumb-main">
    <div class="custom-container">
      <h2>{{ title }}</h2>
      <ul>
        <li>
          <nuxt-link to="/messenger/messenger">
            <a href="javascript:void(0)">{{ main }}</a>
          </nuxt-link>
        </li>
        <li>
          <a href="javascript:void(0)">{{ title }}</a>
        </li>
      </ul>
    </div>
  </section>
  <!--Breadcrumb end -->
</template>
<script>
export default {
  props: {
    title: {
      default: "Home",
    },
    main: {
      default: "",
    },
  },
};
</script>
