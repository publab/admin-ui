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
                path: '/', name: 'index',
                component: Welcome
            },
            {
                path: 'system', name: 'system',
                component: tree(),
                children: [
                    {
                        path: 'develop', name: 'develop',
                        component: tree(),
                        children:[
                            {
                                path: 'permission', name: 'permission',
                                component: tree(() => import('../views/system/develop/permission/Index.vue')),
                                children:[
                                    {
                                        path: 'create', name: 'create',
                                        component: tree(() => import('../views/system/develop/permission/Create.vue'))
                                    },
                                    {
                                        path: 'update/:id', name: 'update',
                                        component: tree(() => import('../views/system/develop/permission/Create.vue'))
                                    },
                                ]
                            }
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
