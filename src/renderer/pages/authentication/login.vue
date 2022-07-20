<template>
  <div class="login-page1">
    <Login />
  </div>
</template>

<script>
import Login from "../../components/Authentication/login.vue";

export default {
  layout: "login",
  components: {
    Login,
  },
};
</script>
