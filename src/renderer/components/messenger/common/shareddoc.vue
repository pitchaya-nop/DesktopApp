<template>
  <div class="document">
    <div class="filter-block">
      <div class="collapse-block" v-bind:class="{ open: opendoc }">
        <h5 class="block-title" @click="toggledoc()">
          Shared Document
          <label class="badge badge-success sm ml-2">3</label>
        </h5>
        <div
          class="block-content"
          v-bind:style="opendoc ? 'display: ;' : 'display: none;'"
        >
          <ul class="document-list">
            <li>
              <i class="ti-folder font-danger"></i>
              <h5>Simple_practice_project-zip</h5>
            </li>
            <li>
              <i class="ti-write font-success"></i>
              <h5>Word_Map-jpg</h5>
            </li>
            <li>
              <i class="ti-zip font-primary"></i>
              <h5>Latest_Design_portfolio.pdf</h5>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      opendoc: true,
    };
  },
  methods: {
    toggledoc() {
      this.opendoc = !this.opendoc;
    },
  },
};
</script>
