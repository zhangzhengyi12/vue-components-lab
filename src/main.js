import Vue from 'vue'
import App from './App.vue'
import message from './components/message/message.js'

Vue.config.productionTip = false
Vue.prototype.$message = message

new Vue({
  render: function(h) {
    return h(App)
  }
}).$mount('#app')
