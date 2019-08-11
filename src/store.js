import Vue from 'vue'
import Vuex from 'vuex'

import language from '@/store/language'
import blog from '@/store/blog'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    language,
    blog
  },
  state: {
    lan: 'es',
    showLanModal: false
  },
  mutations: {

  },
  actions: {

  }
})
