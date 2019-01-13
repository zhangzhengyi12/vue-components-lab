<template>
  <label>
    <input type="radio" :checked="currentChoose" :disabled="disabled" @change="change">
  </label>
</template>

<script>
import { findComponentUpward } from "../util/index";
export default {
  name: "radioItem",
  props: {
    label: {
      type: [Number, String],
      default: ""
    },
    disabled: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      currentChoose: this.value,
      parent: null
    };
  },
  mounted() {
    this.parent = findComponentUpward(this, "radioGroup");
    if (this.parent) {
      this.parent.updateModel();
    }
  },
  methods: {
    change(event) {
      if (this.disable) {
        return;
      }
      this.parent.change(this.label);
    }
  }
};
</script>

<style>
</style>
