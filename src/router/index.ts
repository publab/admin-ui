import Vue from 'vue'
import VueRouter from 'vue-router'
import store from '../store'
import tree from  './tree';

const  Home = () => import('../views/Home.vue');
const  Welcome = () => import('../views/Welcome.vue');
const  Login = () => import('../views/Login.vue');

Vue.use(VueRouter)

const routes = [
  {
    path: '/login',
    name: 'login',
    component: Login,
  }
]

const router = new VueRouter({
  routes
})

export const asyncRouterMap = [
    {
        path: '/', name: 'home',
        component: Home,
        children:[
            {
                path: '/index', name: 'index',
                component: Welcome
            },
            {
                path: 'system', name: 'system',
                component: tree(),
                children: [
                    {
                        path: 'develop', name: 'system.develop',
                        component: tree(),
                        children:[
                            {
                                path: 'permission', name: 'system.develop.permission',
                                component: tree(() => import('../views/system/develop/permission/Index.vue')),
                                children:[
                                    {
                                        path: 'create', name: 'system.develop.permission.create',
                                        component: tree(() => import('../views/system/develop/permission/Create.vue'))
                                    },
                                    {
                                        path: 'update/:id', name: 'system.develop.permission.update',
                                        component: tree(() => import('../views/system/develop/permission/Create.vue'))
                                    },
                                ]
                            },
                            {
                                path: 'role', name: 'system.develop.role',
                                component: tree(() => import('../views/system/develop/role/Index.vue')),
                                children:[
                                    {
                                        path: 'create', name: 'system.develop.role.create',
                                        component: tree(() => import('../views/system/develop/role/Create.vue'))
                                    },
                                    {
                                        path: 'update/:id', name: 'system.develop.role.update',
                                        component: tree(() => import('../views/system/develop/role/Create.vue'))
                                    },
                                ]
                            },
                        ]
                    }
                ],

            },
        ]
    },
];

router.addRoutes(asyncRouterMap);

router.afterEach((to, from) => {
    store.commit('router/setitems',to.matched.map(function (item) {
        return {
            name:item.name,
            path:item.path
        }
    }));
})
export default router
