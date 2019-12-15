import Vue from 'vue'
import VueRouter from 'vue-router'
import store from '../store'

const  Home = () => import('../views/Home.vue');
const  Welcome = () => import('../views/Welcome.vue');
const  Login = () => import('../views/Login.vue');

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home,
    children:[
        {
            path: '/',
            name: 'index',
            component: Welcome
        },
        {
            path: 'system/develop/permission/index',
            name: 'permission',
            component: () => import('../views/system/develop/permission/Index.vue')
        },
        {
            path: 'system/develop/permission/create',
            name: 'create',
            component: () => import('../views/system/develop/permission/Create.vue')
        }
    ]
  },
  {
    path: '/login',
    name: 'login',
    component: Login,
  }
]

const router = new VueRouter({
  routes
})
router.afterEach((to, from) => {
    window.console.log(to);
    store.commit('router/setitems',to.matched.map(function (item) {
        return {
            name:item.name,
            path:item.path
        }
    }));
})
export default router
