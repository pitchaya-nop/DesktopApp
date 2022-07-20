<template>
  <section class="massage_box">
    <div class="col-12 p-0">
      <div class="element-card">
        <div class="element-card-header heading">
          <h2>Main Chat</h2>
        </div>
        <div class="element-card-body typography">
          <ul class="chat-main">
            <li class="py-0">
              <div class="chat-box">
                <div
                  class="profile offline"
                  :style="[
                    {
                      'background-image':
                        'url(' + getImgUrl('avtar/1.jpg') + ')',
                    },
                    styleObject,
                  ]"
                ></div>
                <div class="details">
                  <h5>Josephin water</h5>
                  <h6>
                    Hi, i am josephin. How are you.. ! There are many variations
                    of passages.
                  </h6>
                </div>
                <div class="date-status">
                  <h6>22/10/19</h6>
                  <h6 class="font-success status">Seen</h6>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      styleObject: {
        "background-size": "cover",
        "background-position": "center",
        display: "block",
      },
    };
  },
  methods: {
    getImgUrl(path) {
      return require("../../../assets/images/" + path);
    },
  },
};
</script>
