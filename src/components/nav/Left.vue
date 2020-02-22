<template>
    <a-layout-sider collapsible v-model="collapsed">
        <div class="logo" />

        <a-menu
                theme="dark"
                :defaultSelectedKeys="defaultSelected"
                mode="inline"
                :inlineCollapsed="collapsed"
        >
            <a-menu-item key="1" @click="jump({name:'index'})">
                <a-icon type="pie-chart" />
                <span>首页</span>
            </a-menu-item>
            <a-sub-menu key="sub1" @titleClick="titleClick">
                <span slot="title"><a-icon type="mail" /><span>Navigation One</span></span>
                <a-menu-item-group key="g1">
                    <template slot="title">
                        <a-icon type="qq" /><span>Item 1</span>
                    </template>
                    <a-menu-item key="13">nav</a-menu-item>
                    <a-menu-item key="2">Option 2</a-menu-item>
                </a-menu-item-group>
                <a-menu-item-group key="g2" title="Item 2">
                    <a-menu-item key="3">Option 3</a-menu-item>
                    <a-menu-item key="4">Option 4</a-menu-item>
                </a-menu-item-group>
            </a-sub-menu>
            <a-sub-menu key="sub4">
                <span slot="title"><a-icon type="appstore" /><span>Navigation Two</span></span>
                <a-menu-item key="9">Option 9</a-menu-item>
                <a-menu-item key="10">Option 10</a-menu-item>
                <a-menu-item key="11">Option 11</a-menu-item>
                <a-menu-item key="12">Option 12</a-menu-item>
            </a-sub-menu>
            <a-sub-menu key="sub2" @titleClick="titleClick">
                <span slot="title"><a-icon type="setting" /><span>系统设置</span></span>
                <a-menu-item key="5">Option 5</a-menu-item>
                <a-menu-item key="6">Option 6</a-menu-item>
                <a-sub-menu key="sub3" title="权限管理">
                    <a-menu-item key="7" @click="jump('/system/develop/permission')">权限列表</a-menu-item>
                    <a-menu-item key="8" @click="jump('/system/develop/role')">角色列表</a-menu-item>
                </a-sub-menu>
            </a-sub-menu>
        </a-menu>


    </a-layout-sider>
</template>
<script>
    export default {
        data() {
            return {
                collapsed: false,//侧面菜单 默认状态
                defaultSelected: [

                ]
            };
        },
        methods: {
            titleClick(e) {
                // window.console.log('titleClick', e);
            },
        }
    };
</script>
