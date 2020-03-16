import tree from  './tree';

export default [
    {
        path: 'index', meta: { title: '仪表盘', icon: 'pie-chart'},
        component: tree(() => import('../views/Welcome.vue')),
    },
    {
        path: 'account', meta: { title: '账户', icon: 'user'},
        component: tree(),
        children: [
            {
                path: 'info', meta: { title: '个人信息'},
                component: tree(() => import('../views/system/develop/permission/Index.vue')),
            },
            {
                path: 'setting', meta: { title: '个人设置'},
                component: tree(() => import('../views/system/develop/permission/Index.vue')),
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
