import Vue from 'vue'
import Router from 'vue-router'

// Pages:
import Home from '@/pages/Home'
import Provider from '@/pages/Provider'

Vue.use(Router)

export const router = new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/provider/:tenant',
      name: 'provider',
      component: Provider
    }
  ],
  scrollBehavior (to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return { x: 0, y: 0 }
    }
  }
})
