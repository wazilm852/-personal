import Vue from 'vue'
import Router from 'vue-router'
import Main from '../view/main'
import Lianxi from '../view/lianxi'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'main',
      component: Main
    },
    {
      path: '/lianxi',
      name: 'lianxi',
      component: Lianxi
    },
  ]
})
