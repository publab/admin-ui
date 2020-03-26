<template>
	<div class="page-header-index-wide mobile-fill-width">
		<a-card :bordered="false" :bodyStyle="{ padding: '16px 0', height: '100%' }" :style="{ height: '100%' }">
			<div class="account-settings-info-main" :class="device">
				<div class="account-settings-info-left">
					<a-menu
							:mode="device == 'mobile' ? 'horizontal' : 'inline'"
							:style="{ border: '0', width: device == 'mobile' ? '560px' : 'auto'}"
							:selectedKeys="selectedKeys"
							@click="userMenuClick"
					>
						<a-menu-item key="/account/settings/base">
							基本设置
						</a-menu-item>
						<a-menu-item key="/account/settings/security">
							安全设置
						</a-menu-item>
						<a-menu-item key="/account/settings/custom">
							个性化
						</a-menu-item>
						<a-menu-item key="/account/settings/binding">
							账户绑定
						</a-menu-item>
						<a-menu-item key="/account/settings/notification">
							新消息通知
						</a-menu-item>
					</a-menu>
				</div>
				<div class="account-settings-info-right">
					<div class="account-settings-info-title">
						<span>{{ $route.meta.title }}</span>
					</div>
					<router-view></router-view>
				</div>
			</div>
		</a-card>
	</div>
</template>

<script>
    import { mixinApp } from '@/mixin/app.js'

    export default {
        mixins: [mixinApp],
        data () {
            return {
                selectedKeys: [],
            }
        },
        mounted () {
            this.updateMenu()
        },
        methods: {
            updateMenu () {
                const routes = this.$route.matched.concat()
                this.selectedKeys = [ routes.pop().path ]
            },
            userMenuClick(data){
                this.jump(data.key);
			}
        },
        watch: {
            '$route' (val) {
                this.updateMenu()
            }
        }
    }
</script>

<style lang="less" scoped>
	.account-settings-info-main {
		width: 100%;
		display: flex;
		height: 100%;
		overflow: auto;

		&.mobile {
			display: block;

			.account-settings-info-left {
				border-right: unset;
				border-bottom: 1px solid #e8e8e8;
				width: 100%;
				overflow-x: scroll;
				overflow-y: hidden;
			}
			.account-settings-info-right {
				padding: 20px 40px;
			}
		}

		.account-settings-info-left {
			border-right: 1px solid #e8e8e8;
			width: 224px;
		}

		.account-settings-info-right {
			flex: 1 1;
			padding: 8px 40px;

			.account-settings-info-title {
				color: rgba(0,0,0,.85);
				font-size: 20px;
				font-weight: 500;
				line-height: 28px;
				margin-bottom: 12px;
			}
			.account-settings-info-view {
				padding-top: 12px;
			}
		}
	}

</style>
