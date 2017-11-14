// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'

import {
  Vuetify,
  VApp,
  VFooter,
  VList,
  VBtn,
  VCard,
  VIcon,
  VGrid,
  VToolbar,
  transitions
} from 'vuetify'
import './stylus/main.styl'

import App from './App'
import axios from 'axios'
import { store } from './store'
import { router } from './router'
import { sync } from 'vuex-router-sync'

Vue.use(Vuetify, {
  components: {
    VApp,
    VFooter,
    VList,
    VBtn,
    VCard,
    VIcon,
    VGrid,
    VToolbar,
    transitions
  },
  theme: {
    primary: '#000'
  }
})

sync(store, router)
Vue.prototype.$http = axios
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  router,
  watch: {
    '$route' (to, from) {
      const toDepth = to.path.split('/').length
      const fromDepth = from.path.split('/').length
      this.transitionName = toDepth < fromDepth ? 'slide-fade-right' : 'slide-fade-left'
    }
  },
  data: {
    transitionName: 'slide-fade-left'
  },
  components: { App },
  template: '<App :transition-name="transitionName" />'
})
