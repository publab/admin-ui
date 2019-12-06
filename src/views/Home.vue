<template>
    <a-layout id="components-layout-demo-side" style="min-height: 100vh">
        <left></left>
        <a-layout>
            <top></top>
            <a-layout-content :style="{ padding: '24px', background: '#fff', minHeight: '360px', margin: '16px' }">
                <transition name="bounce" mode="out-in">
                    <router-view></router-view>
                </transition>
            </a-layout-content>
            <a-layout-footer style="text-align: center">
                Ant Design ©2018 Created by Ant UED {{count}}
            </a-layout-footer>
        </a-layout>
        <a-back-top />
    </a-layout>
</template>
<script>
    import Left from '../components/nav/Left';
    import Top from '../components/nav/Top';

    export default {
        data() {
            return {
                count: 0
            };
        },
        created (){

        },
        methods: {

        },
        watch: {

        },
        components: {
            Left,Top
        },

        computed:{
            // ...mapGetters({
            //     count:'loading/getTodoById'
            // })
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
        transition: opacity .2s ease;
    }

    .bounce-enter, .bounce-leave-to /* .fade-leave-active below version 2.1.8 */ {
        opacity: 0;
    }
</style>
