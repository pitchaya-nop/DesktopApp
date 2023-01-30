<template>
  <div class="checkbox" style="margin-bottom: 1em">
    <input
      class="custom-checkbox"
      type="checkbox"
      id="checkbox"
      name="checkbox"
      :checked="value"
      @input="$emit('input', $event.target.checked)"
    />
    <label for="checkbox" class="typography"> {{ label }}</label>
  </div>
</template>

<script>
export default {
  emits: ["update:value"],
  props: {
    label: {
      default: "Checkbox",
    },
    value: {
      // default: true,
    },
  },
};
</script>

<style></style>
