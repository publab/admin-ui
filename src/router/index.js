import Vue from 'vue';
import VueRouter from 'vue-router';
const Home = () => import('../views/Home.vue');
const NavMain = () => import('../components/NavMain.vue');
const Welcome = () => import('../views/Welcome.vue');
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
                name: 'index',
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