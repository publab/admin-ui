import Vue from 'vue'
import VueRouter from 'vue-router'
import store from '../store'
import menu from './menu'

Vue.use(VueRouter)

const routes = [
  {
    path: '/user',
    component: () => import('@/layouts/UserLayout.vue'),
    children:[
        {
          path: 'login',
          meta: { title: '登录'},
          component: () => import('@/views/user/Login.vue'),
        },
        {
          path: 'password',
          meta: { title: '忘记密码'},
          component: () => import('@/views/user/Password.vue'),
        },
        {
          path: 'register',
          meta: { title: '注册'},
          component: () => import('@/views/user/Register.vue'),
        },
    ]
  }
]

const router = new VueRouter({
  routes
})

export const asyncRouterMap = [
    {
        path: '/',
        component: () => import('@/layouts/HomeLayout.vue'),
        meta: { title: false },
        redirect: '/index',
        children: menu
    },
];

router.addRoutes(asyncRouterMap);

router.afterEach((to, from) => {
    store.commit('router/setitems',to.matched.map(function (item) {
        return {
            title:item.meta.title,
            path:item.path
        }
    }));
})
export default router
