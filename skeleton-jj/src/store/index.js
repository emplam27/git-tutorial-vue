import Vue from 'vue'
import Vuex from 'vuex'
import router from '../router'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    isNavBar: false,
  },
  mutations: {
    setIsNavBar(state, boolean) {
      state.isNavBar = boolean
    }
  },
  actions: {
    clickSingleBtn({ commit }) {
      commit('setIsNavBar', true)
      router.push({ name: 'Single'})
    },
    clickMultiBtn({ commit }) {
      commit('setIsNavBar', true)
      router.push({ name: 'Multi'})
    }
  },
  modules: {
  }
})
