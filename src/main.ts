import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './registerServiceWorker'
import './plugins/axios'
import './plugins/ant-design-vue.js'
import './plugins/vue-ls.js'
import './plugins/helper.js'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

//移动端UI框架 vant
// ant https://www.antdv.com/components/menu/
