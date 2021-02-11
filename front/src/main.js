import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import axios from 'axios'
import Vuesax from 'vuesax'

import jwt from 'jsonwebtoken'
import Vuelidate from 'vuelidate'

import Unicon from 'vue-unicons'
import { uni17Plus, uniSignInAlt, uniUser, uniUsersAlt, uniHomeAlt, uniConstructor, uniChat, uniComment, uniCommentAlt, uniCommentAltMessage, uniCommentAltImage, uniFileNetwork, uniTrafficBarrier, uniHouseUser, uniEnvelope, uniKeySkeletonAlt, uniKeySkeleton, uniLocationArrow, uniPlane, uniPhone, uniPhoneVolume, uniMegaphone, uniCardAtm, uniHeartSign, uniCreditCard, uniExclamationOctagon} from 'vue-unicons/src/icons'

Unicon.add([uni17Plus, uniSignInAlt, uniUser, uniUsersAlt, uniHomeAlt, uniConstructor, uniChat, uniComment, uniCommentAlt, uniCommentAltMessage, uniCommentAltImage, uniFileNetwork, uniTrafficBarrier, uniHouseUser, uniEnvelope, uniKeySkeletonAlt, uniKeySkeleton, uniLocationArrow, uniPlane, uniPhone, uniPhoneVolume, uniMegaphone, uniCardAtm, uniHeartSign, uniCreditCard, uniExclamationOctagon])
Vue.use(Unicon)

import 'vuesax/dist/vuesax.css' //Vuesax styles
Vue.use(Vuesax, {
  // options here
})
Vue.use(Vuelidate)

Vue.config.productionTip = false

Vue.prototype.$http = axios.create({
  baseURL: 'http://localhost:8000/api/',
  headers: {
    Authorization: `Bearer ${localStorage.getItem("token")}`
  }
})

Vue.prototype.$anonHttp = axios.create({
  baseURL: 'http://localhost:8000/api/',
})

Vue.prototype.$jwt = jwt

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
