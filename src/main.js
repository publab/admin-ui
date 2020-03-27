import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import './plugins/axios';
import './plugins/ant-design-vue';
import './plugins/vue-ls';
import './plugins/vue-cropper';
import './utils/helper';
Vue.config.productionTip = false;
new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app');
//移动端UI框架 vant
// ant https://www.antdv.com/components/menu/
//# sourceMappingURL=main.js.map