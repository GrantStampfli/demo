// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias (FYI).
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
  VSubheader,
  transitions
} from 'vuetify'
import './stylus/main.styl'

import App from './App'
import Axios from 'axios'
import Globals from './globals'
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
    VSubheader,
    transitions
  },
  theme: {
    primary: '#54CDB9'
  }
})

Vue.use(Globals)

sync(store, router)
Vue.prototype.$http = Axios
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  router,
  components: { App },
  template: '<App />'
})
