<template>
  <div id="app">
    <radio-group v-model="radioTest">
      <radio-item label="aaa"/>
      <radio-item label="bbb"/>
      <radio-item label="ccc" disabled/>
    </radio-group>
    <div @click="showMessageS">go succ</div>
    <div @click="showMessageE">go err</div>
  </div>
</template>

<script>
import RadioGroup from "./components/radio-group";
import RadioItem from "./components/radio-item";
import message from "./components/message/message.js";

export default {
  name: "app",
  components: {
    RadioGroup,
    RadioItem
  },
  data() {
    window.a = this;
    return {
      radioTest: "aaa"
    };
  },
  methods: {
    showMessageS() {
      this.$message({
        type: "success",
        showClose: true,
        content: "cooojflkasdjfklads?"
      });
    },
    showMessageE() {
      let h = this.$createElement;
      this.$message({
        type: "error",
        showClose: true,
        content: h("i", "hahahahahh")
      });
    }
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
