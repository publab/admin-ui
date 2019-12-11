import Vue from 'vue'
import VueRouter from 'vue-router'

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
            component: Welcome,
        },
        {
            path: 'system/develop/permission/index',
            component: () => import('../views/system/develop/permission/Index.vue')
        },
        {
            path: 'system/develop/permission/create',
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

export default router
