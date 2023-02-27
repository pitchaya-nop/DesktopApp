<template>
  <!-- Right-Sidebar Files start -->
  <div class="tab-pane" :class="activerightsidebarmenu == 1 ? 'active' : ''">
    <li id="files">
      <div class="theme-title">
        <div class="media">
          <div>
            <h2>Files</h2>
            <h4>Shared Media</h4>
          </div>
          <div class="media-body media-body text-right">
            <a
              class="icon-btn btn-sm btn-outline-light close-apps"
              href="javascript:void(0)"
              @click="close(0)"
              ><feather type="x" size="15" height="15"></feather
            ></a>
          </div>
        </div>
      </div>
      <div class="theme-tab">
        <ul class="nav nav-tabs">
          <li class="nav-item">
            <a
              class="nav-link button-effect"
              :class="activesharedmedia == 1 ? 'active' : ''"
              data-toggle="pill"
              href="javascript:void(0)"
              @click="activemedia(1)"
              >Media</a
            >
          </li>
          <li class="nav-item">
            <a
              class="nav-link button-effect"
              :class="activesharedmedia == 2 ? 'active' : ''"
              data-toggle="pill"
              href="javascript:void(0)"
              @click="activemedia(2)"
              >Link</a
            >
          </li>
          <li class="nav-item">
            <a
              class="nav-link button-effect"
              :class="activesharedmedia == 3 ? 'active' : ''"
              data-toggle="pill"
              href="javascript:void(0)"
              @click="activemedia(3)"
              >Docs</a
            >
          </li>
        </ul>
      </div>
      <div class="file-tab">
        <div class="tab-content custom-scroll">
          <div
            class="tab-pane"
            :class="activesharedmedia == 1 ? 'active show' : ''"
            id="tab1"
          >
            <MediaTab />
          </div>
          <LinkTab />
          <div
            class="tab-pane fade"
            :class="activesharedmedia == 3 ? 'active show' : ''"
            id="tab3"
          >
            <DocumenTab />
          </div>
        </div>
      </div>
    </li>
  </div>
  <!-- Right-Sidebar Files end -->
</template>

<script>
import { mapState } from "vuex";
import DocumenTab from "../../common/documentslist.vue";
import LinkTab from "./link.vue";
import MediaTab from "./media.vue";

export default {
  components: {
    DocumenTab,
    LinkTab,
    MediaTab,
  },
  computed: {
    ...mapState({
      activesharedmedia: (state) => state.common.activesharedmedia,
      activerightsidebarmenu: (state) => state.common.activerightsidebarmenu,
    }),
  },
  methods: {
    activemedia(id) {
      this.$store.state.common.activesharedmedia = id;
    },
    close(id) {
      this.$store.state.common.activerightsidebarmenu = id;
      document.getElementById("content").classList.add("small-sidebar");
    },
  },
};
</script>
