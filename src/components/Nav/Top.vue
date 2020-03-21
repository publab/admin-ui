<template>
    <a-layout-header v-if="isMobile || layout == 'sidemenu'" class="light">
        <a-row>
            <a-col :span="4">
                <a-icon class="trigger" :type="collapsed ? 'menu-unfold' : 'menu-fold'" @click="toggle"/>
            </a-col>
            <a-col :span="20" :style="{textAlign: 'right'}">
                <user-menu theme="light"></user-menu>
            </a-col>
        </a-row>
    </a-layout-header>
    <a-layout-header v-else-if="layout == 'topmenu'" :class="navtheme">
        <div class="header-wapper">
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
<style scoped>
    .dark{
        background: #002140;
        padding: 0 20px;
    }
    .light{
        background: #fff;
        padding: 0 20px;
    }
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
