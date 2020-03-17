<template>
    <a-layout-sider :theme="navtheme" :width="siderWidth" v-model="collapsed" style="box-shadow: 2px 0 6px rgba(0, 21, 41, 0.35);">
        <logo></logo>
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
