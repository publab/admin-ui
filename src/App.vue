<template>
	<div id="app">
		<a-spin :spinning="loading ? true : false" size="large" :style="{background:'#000'}">
			<a-icon slot="indicator" type="loading" spin />
			<transition name="bounce" mode="out-in">
				<router-view></router-view>
			</transition>
		</a-spin>
	</div>
</template>

<script>
    import { deviceEnquire } from '@/plugins/device'

    export default {
        name: 'app',
        mounted(){
            deviceEnquire(deviceType => {
                this.$store.commit('app/setDevice',deviceType);
            })
        },
        computed: {
            loading(){
                return this.$store.state.loading.index;
            }
        }
    }
</script>
<style>
	.bounce-enter-active {
		transition: opacity .1s;
	}

	.bounce-enter, .bounce-leave-to {
		opacity: 0;
	}
</style>
