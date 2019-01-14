<template>
  <div class="message-box">
    <transition-group name="fade">
      <div class="m-outer" v-for="message of messages" :style="`z-index:${message.uid}`" :key="message.uid">
        <div class="message" :class="[message.type,{'closeable':message.showClose,'center':message.center}]">
          <span class="content">
            <content-render :content="message.content"/>
          </span>
          <span class="close" @click="remove(message.uid)" v-if="message.showClose">X</span>
        </div>
      </div>
    </transition-group>
  </div>
</template>

<script>
import ContentRender from "./render.js";
let uid = 1;
import Vue from "vue";
export default {
  data() {
    return {
      messages: []
    };
  },
  components: {
    ContentRender
  },
  methods: {
    add(message) {
      let _uid = ++uid;
      message = Object.assign(message, {
        uid
      });
      this.messages.push(message);
      const duration = message.duration;

      setTimeout(() => {
        this.remove(_uid);
      }, duration);
      return {
        close() {
          this.remove(_uid);
        }
      };
    },
    remove(uid) {
      const removeIndex = this.messages.findIndex(v => v.uid === uid);
      this.messages.splice(removeIndex, 1);
    }
  }
};
</script>

<style>
.message-box {
  z-index: 100;
}
.m-outer {
  position: fixed;
  left: 50%;
  transform: translate(-50%, 0px);
  top: 80px;
}
.message {
  background-color: #edf2fc;
  color: #909399;
  padding: 8px 20px 10px 20px;
  border-radius: 5px;
  border: 1px solid #ebeef5;
  min-width: 380px;
  max-width: 100%;
  display: flex;
  align-items: center;
  position: relative;
}
.message.closeable {
  padding-right: 30px;
}
.message.success {
  background-color: #f0f9eb;
  border: 1px solid #e1f3d8;
  color: #67c23a;
}
.message.error {
  background-color: #fef0f0;
  border: 1px solid #fde2e2;
  color: #f56c6c;
}
.message .content {
  position: relative;
}
.message .close {
  position: absolute;
  right: 10px;
  top: 50%;
  transform: translateY(-50%);
  color: #ccc;
  font-size: 12px;
  cursor: pointer;
}

.message.center {
  justify-content: center;
}

.fade-enter,
.fade-leave-to {
  transform: translate(-50%, -60px);
  opacity: 0;
}
.fade-leave,
.fade-enter-to {
  opacity: 1;
  transform: translate(-50%, 0px);
}
.fade-leave-active,
.fade-enter-active {
  will-change: transform;
  transition: all 0.3s;
}
</style>
