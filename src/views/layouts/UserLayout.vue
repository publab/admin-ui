<template>
    <div id="wrapper" :style="{  backgroundImage: 'url(https://tinyuse-video.oss-cn-beijing.aliyuncs.com/loginbgimg/'+img_index+'.jpg)'}">
        <div class="container">
            <div title="返回首页" class="logo"></div>
            <transition name="bounce" mode="out-in">
                <router-view></router-view>
            </transition>
        </div>
    </div>
</template>

<script>
    export default {
        name: "UserLayout",
        data(){
            return {
                img_index: Math.floor(Math.random()*39)+1,
            };
        },
    }
</script>
<style lang="scss">
    @import '../../assets/css/login';
</style>
<style scoped>
    .bounce-enter-active, .bounce-leave-active {
        transition: opacity .2s ease;
    }

    .bounce-enter, .bounce-leave-to /* .fade-leave-active below version 2.1.8 */ {
        opacity: 0;
    }
</style>
