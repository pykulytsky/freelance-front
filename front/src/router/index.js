import Vue from 'vue'
import VueRouter from 'vue-router'

import Login from '../views/Login'
import Register from '../views/Register'
import AlertForActivate from '../views/activateUser/AlertForActivate'
import Activate from '../views/activateUser/Activate'

Vue.use(VueRouter)

const routes = [
  {
    path: '/login',
    component: Login,
    name: 'login'
  },
  {
    path: '/register',
    component: Register,
    name: 'register'
  },
  {
    path: '/activate',
    component: AlertForActivate,
    name: 'activate',
  },
  {
    path: '/verify/:code',
    component: Activate,
    name: 'verify'
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
