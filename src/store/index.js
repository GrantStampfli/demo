import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export const store = new Vuex.Store({
  state: {
    loader: false,
    pageHeaderText: 'Popular Services'
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
