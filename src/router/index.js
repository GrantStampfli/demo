import Vue from 'vue'
import Router from 'vue-router'

// Pages:
import Home from '@/pages/Home'
import Provider from '@/pages/Provider'
import Forbidden from '@/components/Forbidden'

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
      path: '/provider/custom-broker',
      name: 'customBroker',
      component: Provider,
      alias: 'provider/customBroker'
    },
    {
      path: '/provider/ocean',
      name: 'ocean',
      component: Provider
    },
    {
      path: '/provider/air',
      name: 'air',
      component: Provider
    },
    {
      path: '*',
      component: Forbidden
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
