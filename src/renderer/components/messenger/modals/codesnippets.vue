<template>
  <b-modal
    class="modal snippet-modal-main add-popup"
    id="snippetModal"
    size="lg"
    ref="snippetModal"
    tabindex="-1"
    role="dialog"
    aria-hidden="true"
    hide-footer
    hide-header
    hide-header-close
    centered
  >
    <div class="add-popup snippet-modal-main">
      <div class="modal-header">
        <h2 class="modal-title"><i class="fa fa-code"></i>code snippets</h2>
        <button
          class="close"
          type="button"
          @click="hide()"
          data-dismiss="modal"
          aria-label="Close"
        >
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
        <form class="default-form">
          <h3>creat snippets</h3>
          <div class="form-group">
            <input
              class="form-control"
              type="text"
              placeholder="title(optional)"
            />
          </div>
          <div class="form-group">
            <select class="mb-0">
              <option>ebnf</option>
              <option>c++</option>
              <option>diff</option>
              <option>dart</option>
            </select>
          </div>
          <div class="form-group">
            <textarea class="form-control" rows="5"></textarea>
          </div>
          <div class="form-group">
            <input
              class="form-control mb-0"
              type="text"
              placeholder="add commant (optional)"
            />
          </div>
          <div class="form-group mb-0">
            <div class="btn-snipate">
              <a
                class="btn btn-danger button-effect btn-sm mr-3"
                href="javascript:void(0)"
                data-dismiss="modal"
                aria-label="Close"
                @click="hide()"
                >Cancel</a
              ><a
                class="btn btn-primary button-effect btn-sm"
                href="javascript:void(0)"
                data-dismiss="modal"
                aria-label="Close"
                @click="hide()"
                >Create & post</a
              >
            </div>
          </div>
        </form>
      </div>
    </div>
  </b-modal>
</template>

<script>
export default {
  methods: {
    show() {
      this.$refs.snippetModal.show();
    },
    hide() {
      this.$refs.snippetModal.hide();
    },
  },
};
</script>
