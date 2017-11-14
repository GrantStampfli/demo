import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export const store = new Vuex.Store({
  state: {
    page: {},
    pageHeaderText: 'Loading...'
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
