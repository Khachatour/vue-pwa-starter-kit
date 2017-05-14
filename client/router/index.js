import Vue from 'vue'
import Router from 'vue-router'
import Home from '../views/Home'
import Contact from '../views/Contact'

Vue.use(Router)

export default new Router({
  mode: 'hash',
  routes: [
    {
      path: '/',
      component: Home
    },
    {
      path: '/contact',
      component: Contact
    }
  ]
})
