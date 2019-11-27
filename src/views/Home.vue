<template>
    <a-layout id="components-layout-demo-side" style="min-height: 100vh">
        <a-layout-sider collapsible v-model="collapsed">
            <div class="logo" />

            <a-menu
                    theme="dark"
                    :defaultSelectedKeys="defaultSelected"
                    mode="inline"
                    :inlineCollapsed="collapsed"
            >
                <a-menu-item key="13" @click="jump('/')">
                    <a-icon type="pie-chart" />
                    <span>首页</span>
                </a-menu-item>
                <a-sub-menu key="sub1" @titleClick="titleClick">
                    <span slot="title"><a-icon type="mail" /><span>Navigation One</span></span>
                    <a-menu-item-group key="g1">
                        <template slot="title">
                            <a-icon type="qq" /><span>Item 1</span>
                        </template>
                        <a-menu-item key="1" @click="jump('nav')">nav</a-menu-item>
                        <a-menu-item key="2">Option 2</a-menu-item>
                    </a-menu-item-group>
                    <a-menu-item-group key="g2" title="Item 2">
                        <a-menu-item key="3">Option 3</a-menu-item>
                        <a-menu-item key="4">Option 4</a-menu-item>
                    </a-menu-item-group>
                </a-sub-menu>
                <a-sub-menu key="sub2" @titleClick="titleClick">
                    <span slot="title"><a-icon type="appstore" /><span>Navigation Two</span></span>
                    <a-menu-item key="5">Option 5</a-menu-item>
                    <a-menu-item key="6">Option 6</a-menu-item>
                    <a-sub-menu key="sub3" title="Submenu">
                        <a-menu-item key="7">Option 7</a-menu-item>
                        <a-menu-item key="8">Option 8</a-menu-item>
                    </a-sub-menu>
                </a-sub-menu>
                <a-sub-menu key="sub4">
                    <span slot="title"><a-icon type="setting" /><span>Navigation Three</span></span>
                    <a-menu-item key="9">Option 9</a-menu-item>
                    <a-menu-item key="10">Option 10</a-menu-item>
                    <a-menu-item key="11">Option 11</a-menu-item>
                    <a-menu-item key="12">Option 12</a-menu-item>
                </a-sub-menu>
            </a-menu>


        </a-layout-sider>
        <a-layout>
            <a-layout-header >
                <a-row>
                    <a-col :span="3"></a-col>
                    <a-col :span="18">
                        <a-menu
                                theme="dark"
                                mode="horizontal"
                                :style="{ lineHeight: '64px' }"
                                @select="topSelect"
                        >
                            <a-menu-item key="1"><router-link to="/">nav 1</router-link></a-menu-item>
                            <a-menu-item key="2">nav 2</a-menu-item>
                            <a-menu-item key="3">nav 3</a-menu-item>
                        </a-menu>
                    </a-col>
                    <a-col :span="3" :style="{textAlign: 'right'}">
                        <a-dropdown placement="bottomRight">
                            <a class="ant-dropdown-link" :style="{color: '#fff'}"> Hover me <a-icon type="down" /> </a>
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
                collapsed: true,
                defaultSelected: [
                    "13"
                ]
            };
        },
        methods: {
            jump(path){
                this.$route.path != path ? this.$router.push(path):null;
            },
            topSelect(){
                window.console.log(1111);
            },
            titleClick(e) {
                window.console.log('titleClick', e);
            },
        },
        watch: {

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
