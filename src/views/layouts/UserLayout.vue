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
<style lang="less">
	@import '../../assets/css/login';
</style>
