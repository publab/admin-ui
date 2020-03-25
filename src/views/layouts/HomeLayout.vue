<template>
	<a-layout style="min-height: 100vh;" :class="[device,layout]">
		<a-drawer
				v-if="isMobile"
				placement="left"
				:closable="false"
				:visible="collapsed"
				@close="()=> collapsed = !collapsed"
				:bodyStyle="{ padding: '0px'}"
				:width="siderWidth"
		>
			<n-left :navtheme="navtheme" :siderWidth="siderWidth" style="min-height: 100vh;"></n-left>
		</a-drawer>
		<n-left v-else-if="layout == 'sidemenu'" :navtheme="navtheme" :siderWidth="siderWidth" :collapsed="collapsed"></n-left>
		<a-layout>
			<n-top
					:collapsed="collapsed"
					:navtheme="navtheme"
					:isMobile="isMobile"
					:layout="layout"
					@toggle="toggle"
			></n-top>
			<multi-tab v-if="multitab"></multi-tab>
			<a-breadcrumb class="breadcrumb">
				<template v-for="(item,key) in breadcrumb">
					<a-breadcrumb-item v-if="item.title" :key="key">{{item.title}}</a-breadcrumb-item>
				</template>
			</a-breadcrumb>
			<a-layout-content>
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

    import { NTop,NLeft,MultiTab } from '@/components';
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
            NTop,NLeft,MultiTab
        },
        computed: {
            breadcrumb(){
                return this.$store.state.router.items;
            }
        },
        mounted(){
            this.resetView();
        },
        watch: {
            //渲染不触发 只有更改后才触发
            device: function(val,oldVal){
                this.resetView();
            }
        },
        methods: {
            toggle () {
                this.collapsed = !this.collapsed
            },
            resetView(){
                this.device == 'mobile' && (this.collapsed = false);    //手机模式 主要设置的 抽屉状态
                this.device == 'tablet' && (this.collapsed = true);
                this.device == 'desktop' && (this.collapsed = false);

            }
        }
    };
</script>
