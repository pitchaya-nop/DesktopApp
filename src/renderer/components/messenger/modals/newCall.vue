<template>
  <b-modal
    content-class="add-popup msg-chat-modal"
    class="modal fade"
    id="msgcallModal"
    ref="msgcallModal"
    tabindex="-1"
    role="dialog"
    aria-hidden="true"
    hide-footer
    hide-header
    hide-header-close
    centered
  >
    <div class="modal-header">
      <h2 class="modal-title">Create New Message</h2>
      <button
        class="close"
        @click="hide()"
        type="button"
        data-dismiss="modal"
        aria-label="Close"
      >
        <span aria-hidden="true">&times;</span>
      </button>
    </div>
    <div class="modal-body">
      <div class="chat-msg-search">
        <div class="input-group">
          <input
            class="form-control"
            type="text"
            placeholder="Search"
            aria-label="Recipient's username"
            aria-describedby="basic-addon20"
          />
          <div class="input-group-append">
            <span class="input-group-text" id="basic-addon20">@</span>
          </div>
        </div>
      </div>
      <ul class="call-log-main custom-scroll">
        <AllCalls />
      </ul>
    </div>
  </b-modal>
</template>

<script>
import AllCalls from "../calls/allcalls.vue";

export default {
  components: {
    AllCalls,
  },
  methods: {
    show() {
      this.$refs.msgcallModal.show();
    },
    hide() {
      this.$refs.msgcallModal.hide();
    },
  },
};
</script>
