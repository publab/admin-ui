import Vue from 'vue'
import Vuex from 'vuex'
import app from './modules/app'
import loading from './modules/loading'
import router from './modules/router'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
      app,
      loading,
      router
  },
  strict: true,
  plugins: []
})
