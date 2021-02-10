import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import axios from 'axios'

import Vuesax from 'vuesax'

import 'vuesax/dist/vuesax.css' //Vuesax styles
Vue.use(Vuesax, {
  // options here
})

Vue.config.productionTip = false
Vue.prototype.$http = axios.create({
  baseURL: 'http:/localhost/api',
  headers: {
    Authorization: `Bearer ${localStorage.getItem("token")}`
  }
})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
