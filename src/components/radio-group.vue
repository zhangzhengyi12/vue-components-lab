<template>
  <div>
    <slot/>
  </div>
</template>

<script>
import { findComponentsDownward } from "../util/index";
export default {
  name: "radioGroup",
  props: {
    value: {
      type: [String, Number],
      default: ""
    },
    disabled: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      currentChoose: this.value
    };
  },
  mounted() {
    this.updateModel();
  },
  methods: {
    updateModel() {
      let children = findComponentsDownward(this, "radioItem");
      if (!children || children.length <= 0) return;
      children.forEach(v => {
        v.currentChoose = this.value === v.label;
        // 子元素全部disabled
        if (this.disabled) {
          v.disabled = true;
        }
      });
    },
    change(val) {
      this.currentChoose = val;
      this.$emit("input", val);
      this.$emit("on-change", val);
    }
  },
  watch: {
    value(nVal) {
      if (nVal) {
        this.updateModel();
      }
    }
  }
};
</script>

<style>
</style>
