<template>
  <!-- Right-Sidebar start -->
  <aside class="app-sidebar" :class="togglerightside ? 'active' : ''">
    <div class="apps">
      <!-- <ul class="apps-ul">
        <div class="tab-content">
          <Todo />
          <Files />
          <Notes />
          <Reminder />
        </div>
      </ul> -->
    </div>
    <!-- <div class="app-list">
      <ul class="app-list-ul custom-scroll">
        <li class="title apps-toggle" @click="close()">
          <feather type="grid"></feather>
          <h5>Apps</h5>
        </li>
        <li>
          <a
            class="icon-btn btn-outline-success btn-sm button-effect"
            :class="activerightsidebarmenu == 1 ? 'active' : ''"
            href="javascript:void(0);"
            @click="activesidemenu(1)"
            ><feather type="file" size="15" height="15"></feather
          ></a>
          <h5>Files</h5>
        </li>
        <li>
          <a
            class="icon-btn btn-outline-primary btn-sm button-effect"
            :class="activerightsidebarmenu == 2 ? 'active' : ''"
            href="javascript:void(0);"
            @click="activesidemenu(2)"
            ><feather type="book" size="15" height="15"></feather
          ></a>
          <h5>Notes</h5>
        </li>
        <li>
          <a
            class="icon-btn btn-outline-danger btn-sm button-effect"
            :class="activerightsidebarmenu == 3 ? 'active' : ''"
            href="javascript:void(0);"
            @click="activesidemenu(3)"
            ><feather type="list" size="15" height="15"></feather
          ></a>
          <h5>Todo</h5>
        </li>
        <li>
          <a
            class="icon-btn btn-outline-warning btn-sm button-effect"
            :class="activerightsidebarmenu == 4 ? 'active' : ''"
            href="javascript:void(0);"
            @click="activesidemenu(4)"
            ><feather type="clock" size="15" height="15"></feather
          ></a>
          <h5>Reminder</h5>
        </li>
        <li class="close-app">
          <a
            class="icon-btn btn-danger"
            href="javascript:void(0)"
            @click="close()"
            ><feather type="x" size="15" height="15"></feather
          ></a>
          <h5>close</h5>
        </li>
      </ul>
    </div> -->
  </aside>
  <!-- Right-Sidebar end -->
</template>

<script>
import { mapState } from "vuex";
// import Todo from "../rightsidebar/todo/index.vue";
// import Files from "../rightsidebar/files/index.vue";
// import Notes from "../rightsidebar/notes/index.vue";
// import Reminder from "../rightsidebar/reminder/index.vue";

export default {
  components: {
    // Todo,
    // Files,
    // Notes,
    // Reminder,
  },
  computed: {
    ...mapState({
      activerightsidebarmenu: (state) => state.common.activerightsidebarmenu,
      togglerightside: (state) => state.common.togglerightside,
    }),
  },
  methods: {
    activesidemenu(id) {
      this.$store.state.common.activerightsidebarmenu = id;
      if (process.client) {
        let width = window.innerWidth;
        if (width > 1650) {
          document.getElementById("content").classList.remove("small-sidebar");
        }
      } else {
        return null;
      }
    },
    close() {
      this.$store.state.common.togglerightside = false;
      if (this.$store.state.common.togglerightside == false) {
        document.getElementById("body").classList.remove("sidebar-active");
        document.getElementById("body").classList.add("main-page");
      } else {
        document.getElementById("body").classList.remove("main-page");
        document.getElementById("body").classList.add("sidebar-active");
      }
    },
  },
};
</script>
