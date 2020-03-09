<template>
    <a-layout-header style="background: #fff; padding: 0 20px;">
        <a-row>
            <a-col :span="4">
                <a-icon class="trigger" :type="collapsed ? 'menu-unfold' : 'menu-fold'" @click="toggle"/>
            </a-col>
            <a-col :span="20" :style="{textAlign: 'right'}">
                <a target="_blank">
                    <span class="action">
                      <a-icon type="question-circle-o"></a-icon>
                    </span>
                </a>
                <a-dropdown placement="bottomRight">
                    <span style="height: 100%; display: inline-block;">
                      <a-avatar size="small" src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" style="margin: 0 5px 0 20px;"/>
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
    export default {
        name: "Top",
        data() {
            return {
                mobile:'',
                name:'',
            };
        },
        props: {
            collapsed: {
                type: Boolean,
                required: false,
                default: false
            },
        },
        created (){
            let _this = this;
            axios.post('userinfo').then((response) => {
                _this.mobile = response.data.mobile
                _this.name = response.data.name
            });
        },
        methods: {
            topSelect(){
                window.console.log(1111);
            },
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
