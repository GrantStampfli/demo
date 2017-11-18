import Vue from 'vue'
import { store } from '@/store'
import Router from 'vue-router'

// Pages:
import Home from '@/pages/Home'
import Provider from '@/pages/Provider'
import Forbidden from '@/components/Forbidden'

Vue.use(Router)

const showLoader = () => store.dispatch('setLoader', true)

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
      alias: '/provider/customBroker',
      name: 'customBroker',
      component: Provider,
      meta: {
        title: 'Custom Brokers',
        loader: showLoader
      }
    },
    {
      path: '/provider/ocean',
      name: 'ocean',
      component: Provider,
      meta: {
        title: 'Ocean Providers',
        loader: showLoader
      }
    },
    {
      path: '/provider/air',
      name: 'air',
      component: Provider,
      meta: {
        title: 'Air Providers',
        loader: showLoader
      }
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
