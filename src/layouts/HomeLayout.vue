<template>
    <a-layout style="min-height: 100vh;">
        <a-drawer
                v-if="isMobile"
                placement="left"
                :closable="false"
                :visible="collapsed"
                @close="()=> collapsed = !collapsed"
                :bodyStyle="{ padding: '0px'}"
                :width="siderWidth"
        >
            <Left :navtheme="navtheme" :siderWidth="siderWidth" style="min-height: 100vh;"></Left>
        </a-drawer>
        <Left v-else :navtheme="navtheme" :siderWidth="siderWidth" :collapsed="collapsed"></Left>
        <a-layout>
            <Top :collapsed="collapsed" @toggle="toggle"></Top>
            <a-breadcrumb :style="{margin: '16px'}">
                <template v-for="(item,key) in breadcrumb">
                    <a-breadcrumb-item v-if="item.title" :key="key">{{item.title}}</a-breadcrumb-item>
                </template>
            </a-breadcrumb>
            <a-layout-content :style="{ padding: '10px 24px', background: '#fff', margin: '0 16px 10px' }">
                <transition name="bounce" mode="out-in">
                    <router-view></router-view>
                </transition>
            </a-layout-content>
            <a-layout-footer style="text-align: center">
                <a href="https://www.antdv.com/components/button-cn/" target="_blank">Ant Design ©2018 Created by Ant UED</a>
            </a-layout-footer>
        </a-layout>
    </a-layout>
</template>
<script>
    import Left from '../components/nav/Left';
    import Top from '../components/nav/Top';
    import {mixinApp} from '@/mixin/app'

    export default {
        mixins: [mixinApp],
        data() {
            return {
                collapsed: false,
                siderWidth:256
            };
        },
        components: {
            Left,Top
        },
        computed: {
            breadcrumb(){
                return this.$store.state.router.items;
            }
        },
        watch: {
            //渲染不触发 只有更改后才触发
            isMobile: function(val,oldVal){
                this.collapsed = false
            }
        },
        methods: {
            toggle () {
                this.collapsed = !this.collapsed
            },
        }
    };
</script>
<style scoped>
    .bounce-enter-active, .bounce-leave-active {
        transition: opacity .2s ease;
    }

    .bounce-enter, .bounce-leave-to /* .fade-leave-active below version 2.1.8 */ {
        opacity: 0;
    }
</style>
