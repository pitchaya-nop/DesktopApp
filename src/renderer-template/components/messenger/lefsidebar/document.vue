<template>
  <!-- Left-Sidebar Documents start -->
  <div
    class="document-tab dynemic-sidebar"
    :class="activesidebar == 3 ? 'active' : ''"
    id="document"
  >
    <div class="theme-title">
      <div class="media">
        <div>
          <h2>Document</h2>
          <h4>List of document</h4>
        </div>
        <div class="media-body text-right">
          <a
            class="icon-btn btn-outline-light btn-sm m-r-15 search"
            href="javascript:void(0)"
            @click="openSeachbar()"
          >
            <feather type="search" size="15" height="15"></feather
          ></a>
          <form
            class="form-inline search-form"
            :class="openSearch ? 'open' : ''"
          >
            <div class="form-group">
              <input
                class="form-control-plaintext"
                type="search"
                placeholder="Search.."
              />
              <div
                class="icon-close close-search"
                @click="openSearch = false"
              ></div>
            </div>
          </form>
          <a
            class="icon-btn btn-outline-light btn-sm close-panel"
            href="javascript:void(0)"
            @click="activemenu(0)"
            ><feather type="x" size="15" height="15"></feather
          ></a>
        </div>
      </div>
    </div>
    <DocumenList />
  </div>
  <!-- Left-Sidebar Documents end -->
</template>

<script>
import { mapState } from "vuex";
import DocumenList from "../common/documentslist.vue";
export default {
  components: {
    DocumenList,
  },
  data() {
    return {
      openSearch: false,
    };
  },
  computed: {
    ...mapState({
      activesidebar: (state) => state.common.activesidebar,
    }),
  },
  methods: {
    activemenu(id) {
      this.$store.state.common.activesidebar = id;
    },
    openSeachbar() {
      this.openSearch = !this.openSearch;
    },
  },
};
</script>
