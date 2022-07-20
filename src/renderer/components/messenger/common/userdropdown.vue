<template>
  <div class="drop-picker">
    <datepicker
      placeholder="Due date"
      input-class="datepicker-here form-control digits"
    ></datepicker>
    <b-dropdown id="dropdown-1" :text="selected ? selected : 'Assign To'">
      <b-dropdown-item>
        <div class="d-flex">
          <div class="fa fa-user mr-2"></div>
          <h5 class="p-0 m-0">Assign To</h5>
        </div>
      </b-dropdown-item>
      <b-dropdown-divider></b-dropdown-divider>
      <b-dropdown-item @click="selectext('Josephin john')"
        >Josephin john</b-dropdown-item
      >
      <b-dropdown-item @click="selectext('Lynetin john')"
        >Lynetin john</b-dropdown-item
      >
      <b-dropdown-item @click="selectext('Sufiya john')"
        >Sufiya john</b-dropdown-item
      >
      <b-dropdown-item @click="selectext('Jhon john')"
        >Jhon john</b-dropdown-item
      >
    </b-dropdown>
  </div>
</template>

<script>
import Datepicker from "vuejs-datepicker";
export default {
  components: {
    Datepicker,
  },
  data() {
    return {
      selected: null,
    };
  },
  methods: {
    selectext(name) {
      this.selected = name;
    },
  },
};
</script>
