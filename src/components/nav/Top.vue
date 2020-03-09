<template>
    <a-layout-header style="background: #fff; padding: 0">
        <a-row>
            <a-col :span="4">
                <a-icon
                        class="trigger"
                        :type="collapsed ? 'menu-unfold' : 'menu-fold'"
                        @click="toggle"
                />
            </a-col>
            <a-col :span="20" :style="{textAlign: 'right'}">
                <a href="https://pro.loacg.com/docs/getting-started" target="_blank">
                    <span class="action">
                      <a-icon type="question-circle-o"></a-icon>
                    </span>
                </a>
                <a-dropdown placement="bottomRight">
                    <a class="ant-dropdown-link"> {{mobile}} {{name}} <a-icon type="down" /> </a>
                    <a-menu slot="overlay">
                        <a-menu-item key="0">
                            <a target="_blank" rel="noopener noreferrer" href="http://www.alipay.com/">1st menu item</a>
                        </a-menu-item>
                        <a-menu-item key="1">
                            <a rel="noopener noreferrer" @click="logout">Logout（退出）</a>
                        </a-menu-item>
                        <a-menu-divider />
                        <a-menu-item key="3" disabled>3rd menu item</a-menu-item>
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
                let _this = this;
                axios.post('logout').then((response) => {
                    if(!response.status){
                        return _this.$message.error(response.message);
                    }
                    sessionStorage.clear()
                    _this.jump('/user/login');
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
        padding: 0 20px;
        cursor: pointer;
        transition: color 0.3s;
    }

    .trigger:hover {
        color: #1890ff;
    }
</style>
