<template>
  <!-- Right-Sidebar Profile's Starred Messages start -->
  <div class="status">
    <div class="collapse-block" v-bind:class="{ open: opendoc }">
      <h5 class="block-title" @click="toggledoc()">
        Starred Messages
        <label class="badge badge-outline-dark sm ml-2">2</label>
      </h5>
      <div
        class="block-content"
        :style="opendoc ? 'display:block' : 'display:none'"
      >
        <div class="contact-chat p-0 m-0">
          <ul class="str-msg">
            <li v-for="(message, index) in messages" :key="index">
              <div class="media">
                <div
                  class="profile mr-4"
                  :style="[
                    { 'background-image': 'url(' + message.img + ')' },
                    styleObject,
                  ]"
                ></div>
                <div class="media-body">
                  <div class="contact-name">
                    <h5>{{ message.name }}</h5>
                    <h6>{{ message.time }}</h6>
                    <ul class="msg-box">
                      <li>
                        <h5>{{ message.msg }}</h5>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
  <!-- Right-Sidebar Profile's Starred Messages end -->
</template>

<script>
export default {
  data() {
    return {
      messages: [
        {
          img: require("@/assets/images/contact/2.jpg"),
          name: "Alan josheph",
          time: "01:35 AM",
          msg: "Hi I am Alan,",
        },
        {
          img: require("@/assets/images/contact/3.jpg"),
          name: "Josephin water",
          time: "01:35 AM",
          msg: "Can you help me to find best chat app?.",
        },
      ],
      opendoc: true,
      styleObject: {
        "background-size": "cover",
        "background-position": "center",
        display: "block",
      },
    };
  },
  methods: {
    toggledoc() {
      this.opendoc = !this.opendoc;
    },
  },
};
</script>
