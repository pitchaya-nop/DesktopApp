<template>
  <!-- Right-Sidebar Reminder start -->
  <div class="tab-pane" :class="activerightsidebarmenu == 4 ? 'active' : ''">
    <li id="reminder">
      <div class="reminder-main">
        <div class="theme-title">
          <div class="media">
            <div>
              <h2>Reminders</h2>
              <h4>Set reminders</h4>
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
        <div class="reminder-content tab-card">
          <i class="ti-alarm-clock"></i>
          <p>Never forget important tasks. Set personal and group reminders.</p>
          <a
            class="setreminder btn btn-primary button-effect btn-sm"
            data-toggle="modal"
            data-target="#setReminder"
            @click="showReminderModal()"
            >set reminder</a
          >
        </div>
        <div class="reminder-list-disp">
          <h5>Themeforest Discusssion</h5>
          <h6>Project Discussion</h6>
          <span>11:22 PM | 15 FAB</span>
          <ul class="reminder-disp">
            <li class="reminder-list-toggle">
              <a class="icon-btn bg-transparent" href="javascript:void(0)"
                ><feather type="more-vertical" size="15" height="15"></feather
              ></a>
              <div class="reminder-contentlist-toggle">
                <ul>
                  <li>
                    <a class="icon-btn btn-sm" href="javascript:void(0)"
                      ><i data-feather="trash"></i
                    ></a>
                    <h5>Delete</h5>
                  </li>
                </ul>
              </div>
            </li>
          </ul>
        </div>
        <div class="reminder-list">
          <button
            class="Show-reminder"
            :style="showsession ? 'display:none' : 'display: '"
            @click="toggle()"
          >
            Show Completed
          </button>
          <button
            class="Hide-reminder"
            :style="showsession ? 'display:inline-block' : 'display:none'"
            @click="toggle()"
          >
            Hide Completed
          </button>
          <div
            class="target-reminder-list"
            :style="showsession ? 'display:block' : 'display:none'"
          >
            <h5>Session Start</h5>
            <h6>Project Discussion</h6>
            <h6>05:22 PM | 1 JAN</h6>
            <ul class="reminder-disp">
              <li class="reminder-toggle">
                <a
                  class="icon-btn bg-transparent"
                  href="javascript:void(0)"
                  data-tippy-content="Quick action"
                  ><feather type="more-vertical" size="15" height="15"></feather
                ></a>
                <div class="reminder-content-toggle">
                  <ul>
                    <li>
                      <a class="icon-btn btn-sm" href="javascript:void(0)"
                        ><i data-feather="trash"></i
                      ></a>
                      <h5>Delete</h5>
                    </li>
                  </ul>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </li>
    <SetReminder ref="reminderComponent" />
  </div>
  <!-- Right-Sidebar Reminder end -->
</template>

<script>
import { mapState } from "vuex";
import SetReminder from "../../modals/setreminder.vue";

export default {
  components: {
    SetReminder,
  },
  data() {
    return {
      showsession: false,
    };
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
    toggle() {
      this.showsession = !this.showsession;
    },
    showReminderModal() {
      this.$refs.reminderComponent.show();
    },
  },
};
</script>
