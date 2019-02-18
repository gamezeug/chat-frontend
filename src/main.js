import Vue from 'vue'
import ChatApp from './ChatApp.vue'
import 'bootstrap/dist/css/bootstrap.min.css'

Vue.config.productionTip = false

new Vue({
  render: h => h(ChatApp)
}).$mount('#chatApp')
