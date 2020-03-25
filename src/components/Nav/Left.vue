<template>
	<a-layout-sider :theme="navtheme" :width="siderWidth" :collapsed="collapsed">
		<logo :navtheme="navtheme"></logo>
		<Menu
				:menu="menus"
				:theme="navtheme"
				:collapsed="collapsed"
		></Menu>
	</a-layout-sider>
</template>
<script>
    import Menu from '@/components/Nav/Menu'
    import Logo from '@/components/Tool/Logo'
    import menus from '@/router/menu'

    export default {
        data() {
            return {
                menus: menus,
            };
        },
        components: {
            Logo,Menu
        },
        props: {
            navtheme: {
                type: String,
                required: false,
                default: 'dark'
            },
            siderWidth: {
                type: Number,
                required: false,
                default: 200
            },
            collapsed: {
                type: Boolean,
                required: false,
                default: false
            },
        },
        methods: {

        }
    };
</script>
<style lang="less" scoped>
	.ant-layout-sider{
		box-shadow: 2px 0 6px rgba(0, 21, 41, 0.35);
		z-index: 1;
		.header-logo{
			padding-left: 24px;
		}
	}
</style>
