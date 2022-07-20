<template>
  <!-- Left-Sidebar Status start -->
  <div
    class="status-tab custom-scroll dynemic-sidebar"
    :class="activesidebar == 8 ? 'active' : ''"
    id="status"
  >
    <div class="my-status-box">
      <div class="status-content">
        <div class="media">
          <div class="img-status">
            <div
              class="user-status bg-size"
              :style="[
                {
                  'background-image':
                    'url(' + getImgUrl('avtar/girls.jpg') + ')',
                },
                styleObject,
              ]"
            ></div>
            <div class="upload-img">
              <input type="file" />
            </div>
          </div>
          <div class="media-body">
            <h3>my status</h3>
            <p>tap to add status Update</p>
          </div>
          <div>
            <a
              class="icon-btn btn-outline-light btn-sm close-panel"
              @click="activemenu(0)"
              href="#"
              ><feather type="x" size="15" height="15"></feather
            ></a>
          </div>
        </div>
      </div>
    </div>
    <div class="contact-status-box">
      <div class="theme-title">
        <h3>Recent Update</h3>
      </div>
      <div
        class="status-content"
        v-for="(user, index) in status"
        :key="user.id"
      >
        <ul>
          <li class="user-status">
            <a
              class="lightbox img-status status"
              :href="`#${user.id}`"
              :style="[
                {
                  'background-image': 'url(' + getImgUrl(user.small_img) + ')',
                },
                styleObject,
              ]"
            >
            </a>
            <div class="lightbox-target" :id="user.id">
              <img :src="getImgUrl(user.large_img)" alt="status" /><a
                class="lightbox-close"
                href="#"
              ></a>
            </div>
          </li>
          <li>
            <h5>{{ user.name }}</h5>
            <p>{{ user.time }}</p>
          </li>
        </ul>
      </div>
    </div>
  </div>
  <!-- Left-Sidebar Status end -->
</template>

<script>
import { mapState } from "vuex";

export default {
  data() {
    return {
      styleObject: {
        "background-size": "cover",
        "background-position": "center center",
        display: "block",
      },
    };
  },
  computed: {
    ...mapState({
      activesidebar: (state) => state.common.activesidebar,
      status: (state) => state.sidebar.status,
    }),
  },
  methods: {
    getImgUrl(path) {
      return require("../../../assets/images/" + path);
    },
    activemenu(id) {
      this.$store.state.common.activesidebar = id;
    },
  },
};
</script>
