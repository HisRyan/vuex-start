import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex) // 全局安装 Vuex

const store = new Vuex.Store({
  state: {
    count: 0,
    page: 1,
    limit: 10
  },
  mutations: {
    increment (state) {
      state.count++
    },
    reduce (state) {
      state.count--
    }
  }
})
store.commit('increment')
store.commit('reduce')
export default store
