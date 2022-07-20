<template>
  <!-- Right-Sidebar Profile's Commongroup start -->
  <div class="status">
    <div class="collapse-block" v-bind:class="{ open: opendoc }">
      <h5 class="block-title" @click="toggledoc()">
        Common groups
        <label class="badge badge-outline-dark sm ml-2">3</label>
      </h5>
      <div
        class="block-content"
        :style="opendoc ? 'display:block' : 'display:none'"
      >
        <ul class="group-main">
          <li v-for="(group, index) in groups" :key="index">
            <div class="group-box">
              <div
                class="profile"
                :style="[
                  { 'background-image': 'url(' + group.img + ')' },
                  styleObject,
                ]"
              ></div>
              <div class="details">
                <h5>{{ group.groupname }}</h5>
                <h6>{{ group.group }}</h6>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
  <!-- Right-Sidebar Profile's Commongroup end -->
</template>

<script>
export default {
  data() {
    return {
      groups: [
        {
          img: require("@/assets/images/avtar/teq.jpg"),
          groupname: "Tech Ninjas",
          group: "johan, deo, Sufiya Elija, Pabelo & you",
        },
        {
          img: require("@/assets/images/avtar/family.jpg"),
          groupname: "Family Ties",
          group: "Mukrani, deo & you",
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
