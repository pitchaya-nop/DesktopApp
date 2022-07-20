<template>
  <b-modal
    content-class="add-popup todo-main-modal"
    class="modal fade"
    id="createtodoModal"
    ref="createtodoModal"
    tabindex="-1"
    role="dialog"
    aria-hidden="true"
    hide-footer
    hide-header
    hide-header-close
    centered
  >
    <div class="modal-header">
      <h2 class="modal-title">Today's ToDo</h2>
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
        <div class="todo-task">
          <h5>Felling Lonely</h5>
          <div class="todo-main-content">
            <div class="form-group">
              <input
                type="checkbox"
                aria-label="Checkbox for following text input"
              />
              <input
                class="w-100"
                id="user_input123"
                type="text"
                placeholder="Fill Your Fillings "
              />
            </div>
            <UserDropDown />
          </div>
        </div>
      </form>
    </div>
    <div class="modal-footer">
      <button
        class="btn btn-danger button-effect btn-sm"
        type="button"
        @click="hide()"
      >
        Save
      </button>
      <button
        class="btn btn-primary button-effect btn-sm"
        type="button"
        @click="hide()"
        data-dismiss="modal"
      >
        Cancel
      </button>
    </div>
  </b-modal>
</template>

<script>
import UserDropDown from "../common/userdropdown.vue";
export default {
  components: {
    UserDropDown,
  },
  methods: {
    show() {
      this.$refs.createtodoModal.show();
    },
    hide() {
      this.$refs.createtodoModal.hide();
    },
  },
};
</script>
