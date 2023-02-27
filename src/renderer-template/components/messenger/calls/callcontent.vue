<template>
  <!--Call Contents start -->
  <div class="row">
    <div class="col-sm-5">
      <div class="user-profile mb-3">
        <div class="user-content">
          <img
            class="img-fluid"
            src="../../../assets/images/contact/2.jpg"
            alt="user-img"
          />
          <h3>Josephin water</h3>
          <h4 class="mt-2">+0 1800 76855</h4>
          <ul>
            <li><i class="fa fa-twitch"></i>message</li>
            <li>
              <i
                class="fa fa-phone"
                data-toggle="modal"
                data-target="#audiocall"
                @click="showAudioModal()"
              ></i
              >voice call
            </li>
            <li>
              <i
                class="fa fa-video-camera"
                data-toggle="modal"
                data-target="#videocall"
                @click="showVedioModal()"
              ></i
              >video call
            </li>
          </ul>
        </div>
      </div>
      <div class="user-profile">
        <SharedDoc />
      </div>
    </div>
    <div class="col-sm-7">
      <div class="call-log-main custom-scroll">
        <div
          class="coll-log-group"
          v-for="(calllog, index) in calllogs"
          :key="calllog.id"
        >
          <div class="log-content-left">
            <div class="media">
              <feather :type="calllog.log_symbol"></feather>
              <div class="media-body">
                <h5>{{ calllog.log_type }}</h5>
              </div>
            </div>
          </div>
          <div class="log-content-right">
            <h6>{{ calllog.time }} &nbsp;{{ calllog.date }}</h6>
          </div>
        </div>
      </div>
      <div class="call-log-clear">
        <i class="ti-trash font-danger"></i
        ><span class="font-danger">Delete call log</span>
      </div>
    </div>

    <VedioCall ref="vedioComponent" />
    <AudioCall ref="audioComponent" />
  </div>

  <!--Call Contents end -->
</template>

<script>
import { mapState } from "vuex";
import VedioCall from "../modals/vediocall.vue";
import AudioCall from "../modals/audiocall1.vue";
import SharedDoc from "../common/shareddoc.vue";

export default {
  components: {
    VedioCall,
    AudioCall,
    SharedDoc,
  },
  methods: {
    showVedioModal() {
      this.$refs.vedioComponent.show();
    },
    showAudioModal() {
      this.$refs.audioComponent.show();
    },
  },
  computed: {
    ...mapState({
      calllogs: (state) => state.common.calllogs,
    }),
  },
};
</script>
