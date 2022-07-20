<template>
  <!-- Right-Sidebar Profile's status start -->
  <div>
    <div class="status">
      <ul>
        <li>
          <b-form-checkbox
            class="js-switch"
            name="check-button"
            switch
            size="lg"
          >
            <h5>Block</h5>
          </b-form-checkbox>
        </li>
        <li>
          <b-form-checkbox
            class="js-switch1"
            name="check-button"
            switch
            size="lg"
          >
            <h5>Mute</h5>
          </b-form-checkbox>
        </li>
        <li>
          <b-form-checkbox
            class="js-switch2"
            name="check-button"
            switch
            size="lg"
          >
            <h5>Get Notification</h5>
          </b-form-checkbox>
        </li>
      </ul>
    </div>
    <div class="status other">
      <ul>
        <li>
          <h5>
            <a href="javascript:void(0)">
              <feather type="share-2" size="15" height="15"></feather>share
              Contact</a
            >
          </h5>
        </li>
        <li>
          <h5>
            <a href="javascript:void(0)">
              <feather type="trash-2" size="15" height="15"></feather>Clear
              Chat</a
            >
          </h5>
        </li>
        <li>
          <h5>
            <a href="javascript:void(0)">
              <feather type="external-link" size="15" height="15"></feather
              >Export Chat</a
            >
          </h5>
        </li>
        <li>
          <h5>
            <a href="javascript:void(0)">
              <feather type="alert-circle" size="15" height="15"></feather
              >Report Contact
            </a>
          </h5>
        </li>
      </ul>
    </div>
  </div>
  <!-- Right-Sidebar Profile's status end -->
</template>
