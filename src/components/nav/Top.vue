<template>
    <a-layout-header>
        <a-row>
            <a-col :span="3"></a-col>
            <a-col :span="16">
                <a-menu
                        theme="dark"
                        mode="horizontal"
                        :style="{ lineHeight: '64px' }"
                        @select="topSelect"
                >
                    <a-menu-item key="1">nav 1</a-menu-item>
                    <a-menu-item key="2">nav 2</a-menu-item>
                    <a-menu-item key="3">nav 3</a-menu-item>
                </a-menu>
            </a-col>
            <a-col :span="5" :style="{textAlign: 'right'}">
                <a-dropdown placement="bottomRight">
                    <a class="ant-dropdown-link" :style="{color: '#fff'}"> {{mobile}} {{name}} <a-icon type="down" /> </a>
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
                    _this.jump('/login');
                });

            }
        }
    }
</script>
