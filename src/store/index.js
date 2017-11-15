import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export const store = new Vuex.Store({
  state: {
    page: {},
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
    setHeader (state, str) {
      state.pageHeaderText = str
    },
    setPage (state, obj) {
      state.page = obj
    }
  },
  getters: {
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
    setHeader (context, str) {
      context.commit('setHeader', str)
    },
    setPage (context, obj) {
      context.commit('setPage', obj)
    }
  },
  strict: true
})
