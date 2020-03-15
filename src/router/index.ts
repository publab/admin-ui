import Vue from 'vue'
import VueRouter from 'vue-router'
import store from '../store'
import tree from  './tree';

Vue.use(VueRouter)

const routes = [
  {
    path: '/user',
    component: () => import('@/layouts/UserLayout.vue'),
    children:[
        {
          path: 'login',
          meta: { title: '确定', keepAlive: true},
          component: () => import('@/views/user/Login.vue'),
        },
        {
          path: 'password',
          meta: { title: '忘记密码', keepAlive: true},
          component: () => import('@/views/user/Password.vue'),
        },
        {
          path: 'register',
          meta: { title: '注册', keepAlive: true},
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
        meta: { title: '首页' },
        redirect: '/index',
        children:[
            {
                path: 'index',
                meta: { title: '仪表盘'},
                component: tree(() => import('../views/Welcome.vue')),
            },
            {
                path: 'system',
                meta: { title: '系统'},
                component: tree(),
                children: [
                    {
                        path: 'develop',
                        meta: { title: '开发管理'},
                        component: tree(),
                        children:[
                            {
                                path: 'permission',
                                meta: { title: '权限列表', keepAlive: true}, //keepAlive 暂未开发此功能（当前暂无可行方案）
                                component: tree(() => import('../views/system/develop/permission/Index.vue')),
                                children:[
                                    {
                                        path: 'create',
                                        meta: { title: '创建'},
                                        component: tree(() => import('../views/system/develop/permission/Create.vue'))
                                    },
                                    {
                                        path: 'update/:id',
                                        meta: { title: '更新'},
                                        component: tree(() => import('../views/system/develop/permission/Create.vue'))
                                    },
                                ]
                            },
                            {
                                path: 'role',
                                meta: { title: '角色列表'},
                                component: tree(() => import('../views/system/develop/role/Index.vue')),
                                children:[
                                    {
                                        path: 'create',
                                        meta: { title: '创建'},
                                        component: tree(() => import('../views/system/develop/role/Create.vue'))
                                    },
                                    {
                                        path: 'update/:id',
                                        meta: { title: '更新'},
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
            title:item.meta.title,
            path:item.path
        }
    }));
})
export default router
