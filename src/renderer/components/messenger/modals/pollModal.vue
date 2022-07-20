<template>
  <b-modal
    class="modal pol-modal-main add-popup"
    id="pollModal"
    size="lg"
    ref="pollModal"
    tabindex="-1"
    role="dialog"
    aria-hidden="true"
    hide-footer
    hide-header
    hide-header-close
    centered
  >
    <div class="add-popup snippet-modal-main pol-modal-main">
      <div class="modal-header">
        <h2 class="modal-title"><feather type="bar-chart-2"></feather>poll</h2>
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
          <h3>create poll</h3>
          <div class="form-group">
            <input class="form-control" type="text" placeholder="ask que" />
            <input class="form-control" type="text" placeholder="add commatn" />
          </div>
          <div class="form-group mb-0">
            <input class="form-control" type="text" placeholder="option 1" />
            <input class="form-control" type="text" placeholder="option 2" /><a
              class="add-option"
              href="javascript:void(0)"
              >add an option</a
            >
          </div>
          <div class="form-group">
            <div class="post-poll">
              <ul>
                <li>
                  post poll in
                  <p class="pt-0">test name</p>
                </li>
                <li>
                  poll expier in 7 days
                  <p class="pt-0">test name</p>
                </li>
              </ul>
            </div>
          </div>
          <div class="form-group">
            <div class="allow-group">
              <input class="allow-check" type="checkbox" />Allow users to vote
              anonymously
            </div>
          </div>
          <div class="creat-poll-btn">
            <a
              class="btn btn-primary button-effect btn-sm"
              href="javascript:void(0)"
              data-dismiss="modal"
              aria-label="Close"
              @click="hide()"
              >Create poll</a
            >
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
      this.$refs.pollModal.show();
    },
    hide() {
      this.$refs.pollModal.hide();
    },
  },
};
</script>
