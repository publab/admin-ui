<template>
	<a-layout-header v-if="isMobile || layout == 'sidemenu'" :class="['light']">
		<div class="header-wapper-tool">
			<div class="left-tool">
				<a-icon class="trigger" :type="collapsed ? 'menu-unfold' : 'menu-fold'" @click="toggle"/>
			</div>
			<user-menu class="header-user-menu" theme="light"></user-menu>
		</div>
	</a-layout-header>
	<a-layout-header v-else-if="layout == 'topmenu'" :class="[navtheme]">
		<div class="header-wapper-menu">
			<logo :navtheme="navtheme"></logo>
			<Menu
					mode="horizontal"
					:menu="menus"
					:theme="navtheme"
					class="header-menu"
			></Menu>
			<user-menu class="header-user-menu" :theme="navtheme"></user-menu>
		</div>
	</a-layout-header>
</template>

<script>
    import UserMenu from '@/components/Tool/UserMenu'
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
            UserMenu,Logo,Menu
        },
        props: {
            navtheme: {
                type: String,
                required: false,
                default: 'dark'
            },
            collapsed: {
                type: Boolean,
                required: false,
                default: false
            },
            isMobile: {
                type: Boolean,
                required: false,
                default: false
            },
            layout: {
                type: String,
                required: false,
                default: 'sidemenu'
            },
        },
        methods: {
            toggle () {
                this.$emit('toggle')
            }
        }
    }
</script>
<style lang="less" scoped>
	.dark{
		background: #002140;
	}
	.light{
		background: #fff;
	}

	//单独处理下特殊样式
	.tablet{
		.header-logo{
			flex: 0 0 80px !important;
		}
	}

	.ant-layout-header{
		padding: 0;
		.header-wapper-tool {
			display: flex;
			.left-tool{
				flex: 0 1 150px;
				.trigger {
					font-size: 18px;
					line-height: 64px;
					cursor: pointer;
					transition: color 0.3s;
					margin-left: 24px;
					&:hover{
						color: #1890ff;
					}
				}
			}
			.header-user-menu{
				text-align: right;
				flex: 1 0 auto;
				margin-right: 10px;
			}
		}

		.header-wapper-menu{
			display: flex;
			.header-logo{
				flex: 0 0 256px;
				padding-left: 24px;
			}
			.header-menu{
				height: 64px;
				line-height: 64px;
				border: none;
				flex: 1 1 auto;
				white-space: normal;
			}
			.header-user-menu{
				text-align: right;
				flex: 0 0 260px;
				margin-right: 10px;
			}
		}
	}

</style>
