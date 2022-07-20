<template>
  <!-- Right-Sidebar Profile start -->
  <aside class="chitchat-right-sidebar" id="slide-menu">
    <div class="custom-scroll right-sidebar">
      <PersonalInfo />
      <SharedDoc />
      <SharedMedia />
      <StarredMessage />
      <CommonGroup />
      <ContactInfo />
      <Status />
    </div>
  </aside>
  <!-- Right-Sidebar Profile end -->
</template>

<script>
import PersonalInfo from "./personalinfo.vue";
import SharedDoc from "../../common/shareddoc.vue";
import SharedMedia from "./sharedmedia.vue";
import StarredMessage from "./starredmessages.vue";
import CommonGroup from "./commongroup.vue";
import ContactInfo from "./contactinfo.vue";
import Status from "./status.vue";

export default {
  components: {
    PersonalInfo,
    SharedDoc,
    SharedMedia,
    StarredMessage,
    CommonGroup,
    ContactInfo,
    Status,
  },
};
</script>
