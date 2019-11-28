import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';
import NavMain from '../components/NavMain.vue';
import Welcome from '../views/Welcome.vue';
//import Login from '../views/Login.vue'
const Login = () => import('../views/Login.vue');
Vue.use(VueRouter);
const routes = [
    {
        path: '/',
        name: 'home',
        component: Home,
        children: [
            {
                path: '/',
                name: 'home',
                component: Welcome,
            },
            {
                path: 'nav',
                name: 'nav',
                component: NavMain,
            }
        ]
    },
    {
        path: '/login',
        name: 'login',
        component: Login,
    }
];
const router = new VueRouter({
    routes
});
export default router;
//# sourceMappingURL=index.js.map