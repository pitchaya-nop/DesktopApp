<template>
  <b-modal
    content-class="add-popup add-contact-modal"
    class="modal fade"
    id="exampleModalCenter"
    ref="exampleModalCenter"
    tabindex="-1"
    role="dialog"
    aria-hidden="true"
    hide-footer
    hide-header
    hide-header-close
    centered
  >
    <div class="modal-header">
      <h2 class="modal-title">Add Contact</h2>
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
      <form class="default-form">
        <div class="form-group">
          <h5>Email or Username</h5>
          <input
            class="form-control"
            id="exampleInputEmail1"
            type="text"
            placeholder="Josephin water"
          />
        </div>
        <div class="form-group mb-0">
          <h5>Contact number</h5>
          <input
            class="form-control"
            id="examplemsg"
            type="number"
            placeholder="12345678912"
          />
        </div>
      </form>
    </div>
    <div class="modal-footer">
      <button
        class="btn btn-danger button-effect btn-sm"
        @click="hide()"
        type="button"
        data-dismiss="modal"
      >
        Cancel
      </button>
      <button
        class="btn btn-primary button-effect btn-sm"
        @click="hide()"
        type="button"
      >
        Add contact
      </button>
    </div>
  </b-modal>
</template>

<script>
export default {
  methods: {
    show() {
      this.$refs.exampleModalCenter.show();
    },
    hide() {
      this.$refs.exampleModalCenter.hide();
    },
  },
};
</script>
