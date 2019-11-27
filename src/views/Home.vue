<template>
    <a-layout id="components-layout-demo-side" style="min-height: 100vh">
        <a-layout-sider collapsible v-model="collapsed">
            <div class="logo" />
            <a-menu theme="dark" :defaultSelectedKeys="['1']" mode="inline">
                <a-menu-item key="1">
                    <a-icon type="pie-chart" />
                    <span>Option 1</span>
                </a-menu-item>
                <a-menu-item key="2">
                    <a-icon type="desktop" />
                    <span>Option 2</span>
                </a-menu-item>
                <a-sub-menu key="sub1">
                    <span slot="title"><a-icon type="user" /><span>User</span></span>
                    <a-menu-item key="3">Tom</a-menu-item>
                    <a-menu-item key="4">Bill</a-menu-item>
                    <a-menu-item key="5">Alex</a-menu-item>
                </a-sub-menu>
                <a-sub-menu key="sub2">
                    <span slot="title"><a-icon type="team" /><span>Team</span></span>
                    <a-menu-item key="6">Team 1</a-menu-item>
                    <a-menu-item key="8">Team 2</a-menu-item>
                </a-sub-menu>
                <a-menu-item key="9">
                    <a-icon type="file" />
                    <span>File</span>
                </a-menu-item>
            </a-menu>
        </a-layout-sider>
        <a-layout>
            <a-layout-header style="background: #fff; padding: 0">
                <a-row>
                    <a-col :span="3">

                    </a-col>
                    <a-col :span="19">
                        <a-menu
                                theme="light"
                                mode="horizontal"
                                :defaultSelectedKeys="['2']"
                                :style="{ lineHeight: '64px' }"
                        >
                            <a-menu-item key="1"><router-link to="/login">login</router-link></a-menu-item>
                            <a-menu-item key="2">nav 2</a-menu-item>
                            <a-menu-item key="3">nav 3</a-menu-item>
                        </a-menu>
                    </a-col>
                    <a-col :span="2">
                        <a-dropdown>
                            <a class="ant-dropdown-link" href="#"> Hover me <a-icon type="down" /> </a>
                            <a-menu slot="overlay">
                                <a-menu-item key="0">
                                    <a target="_blank" rel="noopener noreferrer" href="http://www.alipay.com/">1st menu item</a>
                                </a-menu-item>
                                <a-menu-item key="1">
                                    <a target="_blank" rel="noopener noreferrer" href="http://www.taobao.com/">2nd menu item</a>
                                </a-menu-item>
                                <a-menu-divider />
                                <a-menu-item key="3" disabled>3rd menu item</a-menu-item>
                            </a-menu>
                        </a-dropdown>
                    </a-col>
                </a-row>
            </a-layout-header>

            <a-layout-content :style="{ padding: '24px', background: '#fff', minHeight: '360px', margin: '16px' }">
                <transition name="bounce">
                    <router-view></router-view>
                </transition>
            </a-layout-content>
            <a-layout-footer style="text-align: center">
                Ant Design ©2018 Created by Ant UED
            </a-layout-footer>
        </a-layout>
    </a-layout>
</template>
<script>
    export default {
        data() {
            return {
                collapsed: false,
                openKeys: ['sub1'],
            };
        },
        methods: {
            handleClick(e) {
                window.console.log('click', e);
            },
            titleClick(e) {
                window.console.log('titleClick', e);
            },
        },
        watch: {
            openKeys(val) {
                window.console.log('openKeys', val);
            },
        },
        components: {

        },

        computed:{
            count: function () {
                window.console.log(this.$store.getters.getTodoById(2));

                return 'asgffsdgd1';
            }
        }
    };
</script>

<style>
    #components-layout-demo-side .logo {
        height: 32px;
        margin: 16px;
        background-image: url("../assets/logo.png");
        background-size: auto 100%;
        background-repeat: no-repeat;
        background-position: center;
    }

    .bounce-enter-active, .bounce-leave-active {
        transition: opacity .3s;
    }

    .bounce-enter, .bounce-leave-to /* .fade-leave-active below version 2.1.8 */ {
        opacity: 0;
    }
</style>
