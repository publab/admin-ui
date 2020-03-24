import Vue from 'vue'
import Vuex from 'vuex'
import app from './modules/app'
import user from './modules/user'
import loading from './modules/loading'
import router from './modules/router'

Vue.use(Vuex)

export default new Vuex.Store({
    modules: {
        app,
        user,
        loading,
        router
    },
    strict: true,
    plugins: []
})
