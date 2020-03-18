<template>
    <a-layout-header style="background: #fff; padding: 0 20px;">
        <a-row>
            <a-col :span="4">
                <a-icon class="trigger" :type="collapsed ? 'menu-unfold' : 'menu-fold'" @click="toggle"/>
            </a-col>
            <a-col :span="20" :style="{textAlign: 'right'}">
                <a target="_blank" class="action">
                    <span class="action">
                      <a-icon type="question-circle-o"></a-icon>
                    </span>
                </a>
                <notice-icon class="action"></notice-icon>
                <a-dropdown placement="bottomRight" :trigger="['click','hover']">
                    <span class="action">
                      <a-avatar class="avatar" size="small" :src="avatar"/>
                      <span class="ant-dropdown-link">{{ name }} <a-icon type="down" /></span>
                    </span>
                    <a-menu slot="overlay" style="width: 150px">
                        <a-menu-item key="11"><a-icon type="user" />个人中心</a-menu-item>
                        <a-menu-item key="21"><a-icon type="setting" />账户设置</a-menu-item>
                        <a-menu-item key="41" disabled><a-icon type="setting" />禁用</a-menu-item>
                        <a-menu-divider/>
                        <a-menu-item key="31" @click="logout"><a-icon type="logout"/>退出登录</a-menu-item>
                    </a-menu>
                </a-dropdown>
            </a-col>
        </a-row>
    </a-layout-header>
</template>

<script>
    import NoticeIcon from '@/components/NoticeIcon'
    import { mapState } from 'vuex'

    export default {
        data() {
            return {

            };
        },
        props: {
            collapsed: {
                type: Boolean,
                required: false,
                default: false
            },
        },
        computed: {
            ...mapState({
                name: state => state.user.name,
                avatar: state => state.user.avatar
            })
        },
        components: {
            NoticeIcon
        },
        created (){
            this.$store.dispatch('GetInfo',this)
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
            toggle () {
                this.$emit('toggle')
            }
        }
    }
</script>
<style scoped>
    .trigger {
        font-size: 18px;
        line-height: 64px;
        cursor: pointer;
        transition: color 0.3s;
    }

    .trigger:hover {
        color: #1890ff;
    }
</style>
<style lang="scss">
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
