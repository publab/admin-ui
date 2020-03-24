<template>
	<div>
		<a target="_blank" class="action">
            <span :class="'action ' + theme">
              <a-icon type="question-circle-o"></a-icon>
            </span>
		</a>
		<notice-icon class="action" :theme="theme"></notice-icon>
		<a-dropdown placement="bottomRight" :trigger="['click','hover']">
            <span class="action">
              <a-avatar class="avatar" size="small" :src="avatar"/>
              <span :class="theme">{{ name }} <a-icon type="down" /></span>
            </span>
			<a-menu slot="overlay" style="width: 150px">
				<a-menu-item key="11"><a-icon type="user" />个人中心</a-menu-item>
				<a-menu-item key="21"><a-icon type="setting" />账户设置</a-menu-item>
				<a-menu-item key="41" disabled><a-icon type="setting" />禁用</a-menu-item>
				<a-menu-divider/>
				<a-menu-item key="31" @click="logout"><a-icon type="logout"/>退出登录</a-menu-item>
			</a-menu>
		</a-dropdown>
	</div>
</template>

<script>
    import NoticeIcon from '@/components/NoticeIcon'
    import { mapState } from 'vuex'

    export default {
        name: "UserMenu",
        computed: {
            ...mapState({
                name: state => state.user.name,
                avatar: state => state.user.avatar
            })
        },
        props: {
            theme: {
                type: String,
                required: false,
                default: 'dark'
            }
        },
        components: {
            NoticeIcon
        },
        created (){
            this.$store.dispatch('user/GetInfo',this)
        },
        methods: {
            logout(){

                var _this = this;

                this.$confirm({
                    title: '提示',
                    content: '真的要注销登录吗 ?',
                    onOk() {
                        axios.post('logout').then((response) => {
                            if(!response.status){
                                return _this.$message.error(response.message);
                            }
                            sessionStorage.clear()
                            _this.jump('/user/login');
                        });
                    },
                    onCancel() {

                    },
                });


            },
        }
    }
</script>

<style lang="less" scoped>
	.action {
		cursor: pointer;
		padding: 0 12px;
		display: inline-block;
		transition: all 0.3s;
		height: 100%;
		color: rgba(0, 0, 0, 0.65);

		&:hover {
			background: rgba(0, 0, 0, 0.025);
		}

		.dark{
			color:#ffffff !important;
		}

		.avatar {
			margin: 20px 8px 20px 0;
			color: #1890ff;
			background: hsla(0, 0%, 100%, 0.85);
			vertical-align: middle;
			position: relative;
			top: -3px;
		}

		.icon {
			font-size: 16px;
			padding: 4px;
		}
	}
</style>
