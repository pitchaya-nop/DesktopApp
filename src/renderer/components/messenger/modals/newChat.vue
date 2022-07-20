<template>
  <b-modal
    content-class="add-popup msg-chat-modal"
    class="modal fade"
    id="msgchatModal"
    ref="msgchatModal"
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
            aria-describedby="basic-addon21"
          />
          <div class="input-group-append">
            <span class="input-group-text" id="basic-addon21">@</span>
          </div>
        </div>
      </div>
      <ul class="chat-main custom-scroll">
        <DirectChatUser />
      </ul>
    </div>
  </b-modal>
</template>

<script>
import DirectChatUser from "../chat/DirectChat/directchatuser.vue";

export default {
  components: {
    DirectChatUser,
  },
  methods: {
    show() {
      this.$refs.msgchatModal.show();
    },
    hide() {
      this.$refs.msgchatModal.hide();
    },
  },
};
</script>
