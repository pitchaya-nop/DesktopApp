<template>
  <!--Group Chat Header start -->
  <div class="contact-details">
    <div class="row">
      <div class="col">
        <div class="media left">
          <div class="media-left mr-3">
            <div
              v-if="currentChat.img"
              class="profile menu-trigger"
              :style="[
                {
                  'background-image': 'url(' + getImgUrl(currentChat.img) + ')',
                },
                styleObject,
              ]"
            ></div>
            <div
              v-if="!currentChat.img"
              class="profile"
            >
              <span v-if="currentChat.profile_tag">{{
                currentChat.profile_tag
              }}</span>
            </div>
          </div>
          <div class="media-body">
            <h5>{{ currentChat.name }}</h5>
            <div class="badge badge-success">Active</div>
          </div>
          <div class="media-right">
            <ul>
              <li>
                <a
                  class="icon-btn btn-light button-effect mute"
                  href="javascript:void(0)"
                  @click="showvolume = !showvolume"
                  ><span v-if="showvolume" class="effect-wave"></span
                  ><i
                    class="fa"
                    :class="showvolume ? 'fa-volume-up' : 'fa-volume-up off'"
                  ></i
                ></a>
              </li>
              <li>
                <a
                  class="icon-btn btn-light search search-right"
                  href="javascript:void(0)"
                >
                  <feather type="search" size="15" height="15"></feather
                ></a>
                <form class="form-inline search-form">
                  <div class="form-group">
                    <input
                      class="form-control-plaintext"
                      type="search"
                      placeholder="Search.."
                    />
                    <div class="icon-close close-search"></div>
                  </div>
                </form>
              </li>
              <li>
                <a
                  class="icon-btn btn-light button-effect mobile-sidebar"
                  @click="backtochat()"
                  href="javascript:void(0)"
                  ><feather type="chevron-left" size="15" height="15"></feather
                ></a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div class="col">
        <ul class="calls text-right">
          <li>
            <a
              class="icon-btn btn-light button-effect"
              @click="showAudioModal()"
              v-b-tooltip.hover.bottomleft
              title="Start Audio Conference"
              href="javascript:void(0)"
              data-tippy-content="Start Audio Conference"
              data-toggle="modal"
              data-target="#confercall"
              ><feather type="phone" size="15" height="15"></feather
            ></a>
          </li>
          <li>
            <a
              class="icon-btn btn-light button-effect"
              @click="showVedioModal()"
              v-b-tooltip.hover.bottomleft
              title="Start Video Conference"
              href="javascript:void(0)"
              data-tippy-content="Start Video Conference"
              data-toggle="modal"
              data-target="#confvideocl"
              ><feather type="video" size="15" height="15"></feather
            ></a>
          </li>
          <li>
            <a
              class="icon-btn btn-light button-effect apps-toggle"
              @click="togglerightside()"
              href="javascript:void(0)"
              v-b-tooltip.hover.bottomleft
              title="All Apps"
              data-tippy-content="All Apps"
              ><i class="ti-layout-grid2"></i
            ></a>
          </li>
        </ul>
      </div>
    </div>

    <GroupAudioCall ref="audioComponent" />
    <GroupVedioCall ref="vedioComponent" />
  </div>
  <!--Group Chat Header end -->
</template>

<script>
import { mapState } from "vuex";
import GroupAudioCall from "../../modals/groupaudiocall.vue";
import GroupVedioCall from "../../modals/groupvediocall.vue";

export default {
  components: {
    GroupAudioCall,
    GroupVedioCall,
  },
  data() {
    return {
      showvolume: true,
      currentchat: [],
      styleObject: {
        "background-size": "cover",
        "background-position": "center",
        display: "block",
      },
    };
  },
  computed: {
    ...mapState({
      currentChat() {
        return (this.currentchat = this.$store.getters[
          "groupchat/currentChat"
        ]);
      },
    }),
  },
  methods: {
    getImgUrl(path) {
      return require("../../../../assets/images/" + path);
    },
    showVedioModal() {
      this.$refs.vedioComponent.show();
    },
    backtochat() {
      document.querySelector(".sidebar-toggle").classList.remove("mobile-menu");
    },
    togglerightside() {
      this.$store.state.common.togglerightside = !this.$store.state.common
        .togglerightside;
      if (this.$store.state.common.togglerightside == false) {
        document.getElementById("body").classList.remove("sidebar-active");
        document.getElementById("body").classList.add("main-page");
      } else {
        document.getElementById("body").classList.remove("menu-active");
        document.getElementById("body").classList.remove("main-page");
        document.getElementById("body").classList.add("sidebar-active");
      }
    },
    showAudioModal() {
      this.$refs.audioComponent.show();
    },
  },
};
</script>
