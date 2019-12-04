import Vue from 'vue';
import './plugins/axios';
import App from './App.vue';
import './registerServiceWorker';
import router from './router';
import store from './store';
import './plugins/ant-design-vue.js';
import './plugins/helper.js';
Vue.config.productionTip = false;
new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app');
//移动端UI框架 vant
// ant https://www.antdv.com/components/menu/
//# sourceMappingURL=main.js.map