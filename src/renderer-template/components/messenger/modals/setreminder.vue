<template>
  <b-modal
    content-class="modal reminder-modal-main add-popup"
    id="setReminder"
    ref="setReminder"
    tabindex="-1"
    role="dialog"
    aria-hidden="true"
    hide-footer
    hide-header
    hide-header-close
    centered
  >
    <div class="modal-header">
      <h2 class="modal-title">Set redminders</h2>
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
      <form class="form default-form">
        <div class="lable">Reminder for (Groups or contacts)</div>
        <div class="form-group">
          <input
            class="form-control"
            type="text"
            placeholder="contact or channel"
          />
        </div>
        <div class="lable">Remind about</div>
        <div class="form-group">
          <textarea
            class="form-control dib"
            rows="3"
            placeholder="Some details about task"
          ></textarea>
        </div>
        <div class="lable">Remind about</div>
        <div class="form-group">
          <ul class="reminder-count">
            <li :class="activereminder == 1 ? 'active' : ''">
              <div class="reminder-box" @click="activeReminder(1)">
                <h3 class="remi-num">15</h3>
                <h5 class="remi-val">minutes</h5>
              </div>
            </li>
            <li :class="activereminder == 2 ? 'active' : ''">
              <div class="reminder-box" @click="activeReminder(2)">
                <h3 class="remi-num">1</h3>
                <h5 class="remi-val">hour</h5>
              </div>
            </li>
            <li :class="activereminder == 3 ? 'active' : ''">
              <div class="reminder-box" @click="activeReminder(3)">
                <h3 class="remi-num">5 PM</h3>
                <h5 class="remi-val">today</h5>
              </div>
            </li>
          </ul>
        </div>
        <div class="form-group mb-0">
          <div class="lable">select custom time</div>
          <div class="custom-remider-main">
            <div class="custom-remider-content">
              <div class="custom-reminder-inline">
                <input class="form-control" type="date" />
                <input class="form-control" type="time" />
              </div>
              <div class="custom-reminder-block">
                <select>
                  <option>Do not repeat</option>
                  <option>Weekdays (Mon-Fri)</option>
                  <option>Daily</option>
                  <option>Weekly (Custom)</option>
                </select>
              </div>
            </div>
          </div>
        </div>
        <div class="reminder-btn">
          <a class="btn btn-primary button-effect" @click="hide()"
            >set reminder</a
          >
        </div>
      </form>
    </div>
  </b-modal>
</template>

<script>
export default {
  data() {
    return {
      activereminder: 1,
    };
  },
  methods: {
    show() {
      this.$refs.setReminder.show();
    },
    hide() {
      this.$refs.setReminder.hide();
    },
    activeReminder(id) {
      this.activereminder = id;
    },
  },
};
</script>
