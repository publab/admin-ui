<template>
    <a-layout style="min-height: 100vh">

        <a-drawer
                v-if="isMobile"
                placement="left"
                :closable="false"
                :visible="collapsed"
                @close="()=> collapsed = !collapsed"
                :bodyStyle="{ padding: '0px'}"
        >
            <a-layout-sider :theme="navtheme" :trigger="null" collapsible width="100%" style="min-height: 100vh">
                <div class="logo" style="height: 80px;"></div>
                <a-menu :theme="navtheme" mode="inline" :defaultSelectedKeys="['1']">
                    <a-menu-item key="1">
                        <a-icon type="user" />
                        <span>nav 1</span>
                    </a-menu-item>
                    <a-menu-item key="2">
                        <a-icon type="video-camera" />
                        <span>nav 2</span>
                    </a-menu-item>
                    <a-menu-item key="3">
                        <a-icon type="upload" />
                        <span>nav 3</span>
                    </a-menu-item>
                </a-menu>
            </a-layout-sider>
        </a-drawer>

        <a-layout-sider :theme="navtheme" :trigger="null" collapsible v-model="collapsed" v-if="!isMobile">
            <div class="logo" style="height: 80px;"></div>
            <a-menu :theme="navtheme" mode="inline" :defaultSelectedKeys="['1']">
                <a-menu-item key="1">
                    <a-icon type="user" />
                    <span>nav 1</span>
                </a-menu-item>
                <a-menu-item key="2">
                    <a-icon type="video-camera" />
                    <span>nav 2</span>
                </a-menu-item>
                <a-menu-item key="3">
                    <a-icon type="upload" />
                    <span>nav 3</span>
                </a-menu-item>
            </a-menu>
        </a-layout-sider>
        <a-layout>
            <a-layout-header style="background: #fff; padding: 0">
                <a-icon
                        class="trigger"
                        :type="collapsed ? 'menu-unfold' : 'menu-fold'"
                        @click="()=> collapsed = !collapsed"
                />
            </a-layout-header>
            <a-layout-content
                    :style="{ margin: '24px 16px', padding: '24px', background: '#fff', minHeight: '280px' }"
            >
                {{device}}-{{isMobile}}-{{isDesktop}}
                <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
            </a-layout-content>
        </a-layout>
    </a-layout>
</template>
<script>
    import {mixinApp} from '@/mixin/app'
    export default {
        mixins: [mixinApp],
        data() {
            return {
                collapsed: false
            };
        },
        // computed: {
        //     collapsed: function(){
        //         return false;
        //     }
        // },
        watch: {
            //渲染不触发 只有更改后才触发
            isMobile: function(val,oldVal){
                this.collapsed = false
            }
        },
        methods: {

        }
    };
</script>
<style scoped>
    .trigger {
        font-size: 18px;
        line-height: 64px;
        padding: 0 20px;
        cursor: pointer;
        transition: color 0.3s;
    }

    .trigger:hover {
        color: #1890ff;
    }
</style>
