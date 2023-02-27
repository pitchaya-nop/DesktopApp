<template>
  <!--Customizer start -->
  <section
    class="setting-sidebar"
    :style="opencustomizer ? 'right: 0px;' : 'right: -400px;'"
  >
    <div class="theme-title">
      <div class="media">
        <div>
          <h2>Customizer</h2>
          <h4>Real Time Customize</h4>
          <button
            v-b-modal.modal-customizer
            class="btn btn-primary plus-popup btn-sm mt-2"
          >
            Configuration
          </button>
          <b-modal
            id="modal-customizer"
            ref="modalcustomizer"
            content-class="configuration-modal add-popup"
            class="theme-modal"
            hide-footer centered hide-header hide-header-close
          >
            <div class="modal-header">
              <h2 class="modal-title">Customizer configuration</h2>
              <button class="close" type="button" @click="hide()" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
            </div>
            <div class="modal-body">
              <div class="config-popup">
                <p>
                  To replace our design with your desired theme. Please do
                  configuration as mention
                </p>
                <p>
                  <b>Path : src > data > layout.json</b>
                </p>
                <div>
                  <pre>
										<code>
											<b-form-textarea :value="data" ref="layout" rows="1" v-bind:style="styleObject"></b-form-textarea>
											{{layout}}
										</code>
									</pre>
                </div>
                <button class="btn btn-primary mt-2" @click="copyText()">
                  Copy Json
                </button>
              </div>
            </div>
          </b-modal>
        </div>
        <div class="media-body">
          <a
            class="icon-btn btn-outline-light button-effect pull-right cog-close"
            href="javascript:void(0)"
            @click="closecustomizer()"
            ><i class="fa fa-close"></i
          ></a>
        </div>
      </div>
    </div>
    <Choosecolor />
    <Layout />
    <ChatWallpaper />
    <Sidebar />
  </section>
  <!--Customizer end -->
</template>

<script>
import { mapState } from "vuex";
import Choosecolor from "./choosecolor.vue";
import Layout from "./layout.vue";
import ChatWallpaper from "./chatwallpaper.vue";
import Sidebar from "./sidebar.vue";

export default {
  components: {
    Choosecolor,
    Layout,
    ChatWallpaper,
    Sidebar,
  },
  data() {
    return {
      styleObject: {
        position: "fixed",
        left: "0",
        top: "0",
        opacity: "0",
      },
    };
  },
  computed: {
    ...mapState({
      opencustomizer: (state) => state.common.opencustomizer,
      data: (state) => JSON.stringify(state.layout.layout),
      layout: (state) => state.layout.layout,
    }),
  },
  methods: {
    closecustomizer() {
      this.$store.state.common.opencustomizer = false;
    },
    hide() {
      this.$refs.modalcustomizer.hide();
    },
    copyText() {
      this.$refs.layout.select();
      document.execCommand("copy");
      this.$toasted.show("Code Copied to clipboard", {
        theme: "outline",
        position: "top-right",
        type: "default",
        duration: 2000,
      });
    },
  },
};
</script>
