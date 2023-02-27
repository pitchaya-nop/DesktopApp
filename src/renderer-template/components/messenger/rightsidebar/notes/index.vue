<template>
  <!-- Right-Sidebar Notes start -->
  <div class="tab-pane" :class="activerightsidebarmenu == 2 ? 'active' : ''">
    <li id="notes">
      <div class="notes-main">
        <div class="theme-title">
          <div class="media">
            <div>
              <h2>Notes</h2>
              <h4>Notes List</h4>
            </div>
            <div class="media-body media-body text-right">
              <a
                class="icon-btn btn-sm btn-outline-light close-apps"
                href="javascript:void(0)"
                @click="close(0)"
                ><feather type="x" size="15" height="15"></feather
              ></a>
            </div>
          </div>
        </div>
        <form class="default-form">
          <div class="form-group notes-content">
            <select>
              <option>Contact Or Channel</option>
              <option>Weekdays (Mon-Fri)</option>
              <option>Daily</option>
              <option>Weekly (Custom)</option>
            </select>
            <ul>
              <li>
                <a
                  class="icon-btn btn-light button-effect btn-sm"
                  data-toggle="modal"
                  data-target="#notesModal"
                  @click="showNoteModal()"
                  ><feather type="plus" size="15" height="15"></feather
                ></a>
              </li>
            </ul>
          </div>
        </form>
        <div class="notes-list">
          <h6 class="mb-2 text-muted">Joshephin Water.10 Jan</h6>
          <div class="media">
            <img
              class="img-fluid mr-3"
              src="../../../../assets/images/file_icons/5.png"
              alt="media-img"
            />
            <div class="media-body">
              <h5 class="mt-0">Joshephin Water</h5>
            </div>
          </div>
          <h5 class="mb-2">Imporatnt project link</h5>
          <h6 class="mb-2">Please start testing task of your projects.</h6>
          <div class="forward-main">
            <a class="line fa fa-mail-forward" href="javascript:void(0)"
              >Forward
            </a>
          </div>
        </div>
      </div>
    </li>
    <Notemodal ref="noteComponent" />
  </div>
  <!-- Right-Sidebar Notes end -->
</template>

<script>
import { mapState } from "vuex";
import Notemodal from "../../modals/notesmodal.vue";

export default {
  components: {
    Notemodal,
  },
  computed: {
    ...mapState({
      activerightsidebarmenu: (state) => state.common.activerightsidebarmenu,
    }),
  },
  methods: {
    close(id) {
      this.$store.state.common.activerightsidebarmenu = id;
      document.getElementById("content").classList.add("small-sidebar");
    },
    showNoteModal() {
      this.$refs.noteComponent.show();
    },
  },
};
</script>
