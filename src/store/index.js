import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export const store = new Vuex.Store({
  state: {
    loader: false,
    pageHeaderText: 'Popular Services',
    providers: {
      customBroker: {
        title: 'Custom Brokers',
        logo: '/static/images/customs.svg',
        alais: ''
      },
      ocean: {
        title: 'Ocean Providers',
        logo: '/static/images/ocean.svg',
        alais: ''
      },
      air: {
        title: 'Air Providers',
        logo: '/static/images/air.svg',
        alais: ''
      }
    }
  },
  mutations: {
    setLoader (state, bool) {
      state.loader = bool
    },
    setHeader (state, str) {
      state.pageHeaderText = str
    },
    setPage (state, obj) {
      state.page = obj
    }
  },
  getters: {
    loader (state) {
      return state.loader
    },
    header (state) {
      return state.pageHeaderText
    },
    page (state) {
      return state.page
    },
    route (state) {
      return state.route
    },
    providers (state) {
      return state.providers
    }
  },
  actions: {
    setLoader (context, bool) {
      context.commit('setLoader', bool)
    },
    setHeader (context, str) {
      context.commit('setHeader', str)
    },
    setPage (context, obj) {
      context.commit('setPage', obj)
    }
  },
  strict: true
})
