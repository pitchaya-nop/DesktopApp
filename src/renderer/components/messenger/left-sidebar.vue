<template>
  <!-- Main Chat Left Sidebar start -->
  <aside class="chitchat-left-sidebar left-disp" >
    <div v-if="activesidebar == 1" >
      <Contacts />
    </div>
    <div v-if="activesidebar == 2 || activesidebar == 3">
      <Chats />
    </div>
    <div>

    </div>
    <!-- <Favourite />
    <Documents />
    <ContactList />
    <Notifications />
    <Settings />
    <Status /> -->
  </aside>
  <!-- Main Chat Left Sidebar end -->
</template>

<script>
// import Status from "./lefsidebar/status.vue";
// import Settings from "./lefsidebar/settings.vue";
// import Notifications from "./lefsidebar/notification.vue";
// import ContactList from "./lefsidebar/contact_list.vue";
// import Documents from "./lefsidebar/document.vue";
// import Favourite from "./lefsidebar/favourite.vue";
import Contacts from "./lefsidebar/contacts.vue";
import Chats from "./lefsidebar/chats.vue";
import { mapState } from "vuex";
export default {
  components: {
    // Status,
    // Settings,
    // Notifications,
    // ContactList,
    // Documents,
    // Favourite,
    Contacts,
    Chats,
  },
  computed: {
    ...mapState({
      activesidebar: (state) => state.common.activesidebar,
    }),
  },
};
</script>
