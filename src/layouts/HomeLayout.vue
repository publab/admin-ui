<template>
    <a-layout id="components-layout-demo-custom-trigger">

        <a-drawer
                v-if="isMobile"
                placement="left"
                :closable="false"
                :visible="collapsed"
                @close="drawerClose"
                wrapClassName="duanzhiwei"
                :bodyStyle="{ padding: '0px'}"
                :drawerStyle="{background: '#001529'}"
        >
            <div class="logo" style="height: 80px;"></div>
            <a-menu theme="dark" mode="inline" :defaultSelectedKeys="['1']">
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
        </a-drawer>

        <a-layout-sider :trigger="null" collapsible v-model="collapsed" v-if="!isMobile">
            <div class="logo" style="height: 80px;"></div>
            <a-menu theme="dark" mode="inline" :defaultSelectedKeys="['1']">
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
            </a-layout-content>
        </a-layout>
    </a-layout>
</template>
<script>
    import {mixinDevice} from '@/mixin/device'
    export default {
        mixins: [mixinDevice],
        data() {
            return {
                collapsed: false,
            };
        },
        mounted(){
            this.collapsed = this.isMobile ? false : true;
        },
        methods: {
            drawerClose () {
                this.collapsed = false
            }
        }
    };
</script>
