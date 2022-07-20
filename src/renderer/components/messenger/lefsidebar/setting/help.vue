<template>
  <!-- Left-Sidebar Settings's Help start -->
  <div class="setting-block">
    <div class="block" :class="activesetting == 4 ? 'open' : ''">
      <div class="media">
        <div class="media-body">
          <h3>Help</h3>
        </div>
        <div class="media-right">
          <a
            class="icon-btn btn-outline-light btn-sm pull-right previous"
            href="javascript:void(0)"
            @click="activeSettingmenu(0)"
          >
            <feather type="chevron-left" size="15" height="15"> </feather
          ></a>
        </div>
      </div>
      <ul class="help">
        <li>
          <h5><a href="javascript:void(0)">FAQ</a></h5>
        </li>
        <li>
          <h5><a href="javascript:void(0)"> Contact Us</a></h5>
        </li>
        <li>
          <h5><a href="javascript:void(0)">Terms and Privacy Policy</a></h5>
        </li>
        <li>
          <h5><a href="javascript:void(0)">Licenses</a></h5>
        </li>
        <li>
          <h5>
            <a href="javascript:void(0)">2019 - 20 Powered by Pixelstrap</a>
          </h5>
        </li>
      </ul>
    </div>
    <div class="media">
      <div class="media-body">
        <h3>Help</h3>
        <h4>You are Confusion, Tell me</h4>
      </div>
      <div class="media-right">
        <a
          class="icon-btn btn-outline-light btn-sm pull-right next"
          href="javascript:void(0)"
          @click="activeSettingmenu(4)"
        >
          <feather type="chevron-right" size="15" height="15"></feather
        ></a>
      </div>
    </div>
  </div>
  <!-- Left-Sidebar Settings's Help end -->
</template>

<script>
import { mapState } from "vuex";

export default {
  computed: {
    ...mapState({
      activesetting: (state) => state.common.activesetting,
    }),
  },
  methods: {
    activeSettingmenu(id) {
      this.$store.state.common.activesetting = id;
    },
  },
};
</script>
