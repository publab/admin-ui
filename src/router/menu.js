import tree from  './tree';

export default [
    {
        path: 'index', meta: { title: '仪表盘', icon: 'pie-chart', hidden: false},
        component: () => import('../views/Welcome.vue'),
    },
    {
        path: 'account', meta: { title: '账户', icon: 'user'},
        component: tree(),
        children: [
            {
                path: 'center', meta: { title: '个人中心'},
                component: () => import('../views/account/center/Index.vue'),
            },
            {
                path: 'hiddens', meta: { title: '个人测试隐藏', hidden: true},
                component: () => import('../views/account/center/Index.vue'),
            },
            {
                path: 'settings', meta: { title: '个人设置'},
                component: () => import('../views/system/develop/permission/Index.vue'),
                redirect: '/account/settings/base',
                hideChildrenInMenu: true,
                children: [
                    {
                        path: 'base', meta: { title: '基本设置'},
                        component: () => import('../views/system/develop/permission/Index.vue'),
                    },
                ]
            },
        ]
    },
    {
        path: 'system', meta: { title: '系统', icon: 'setting'},
        component: tree(),
        children: [
            {
                path: 'develop', meta: { title: '开发管理'},
                component: tree(),
                children:[
                    {
                        path: 'permission', meta: { title: '权限列表', keepAlive: true}, //keepAlive 暂未开发此功能（当前暂无可行方案）
                        component: tree(() => import('../views/system/develop/permission/Index.vue')),
                        hideChildrenInMenu: true,
                        children:[
                            {
                                path: 'create', meta: { title: '创建'},
                                component: tree(() => import('../views/system/develop/permission/Create.vue'))
                            },
                            {
                                path: 'update/:id', meta: { title: '更新'},
                                component: tree(() => import('../views/system/develop/permission/Create.vue'))
                            },
                        ]
                    },
                    {
                        path: 'role', meta: { title: '角色列表'},
                        component: tree(() => import('../views/system/develop/role/Index.vue')),
                        hideChildrenInMenu: true,
                        children:[
                            {
                                path: 'create', meta: { title: '创建'},
                                component: tree(() => import('../views/system/develop/role/Create.vue'))
                            },
                            {
                                path: 'update/:id', meta: { title: '更新'},
                                component: tree(() => import('../views/system/develop/role/Create.vue'))
                            },
                        ]
                    },
                ]
            }
        ],

    },
];
