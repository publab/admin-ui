<template>
    <a-layout-sider :theme="navtheme" :width="siderWidth" v-model="collapsed" style="box-shadow: 2px 0 6px rgba(0, 21, 41, 0.35);">
        <Logo></Logo>
        <a-menu
                :theme="navtheme"
                mode="inline"
                :openKeys="openKeys"
                :selectedKeys="selectedKeys"
                @click="menuClick"
                @openChange="openChange"
        >
            <template v-for="(top) in data">
                <a-menu-item v-if="!top.children" :key="top.path">
                    <a-icon :type="top.meta.icon" />
                    <span>{{top.meta.title}}</span>
                </a-menu-item>
                <a-sub-menu v-else :key="top.path">
                    <span slot="title"><a-icon :type="top.meta.icon" /><span>{{top.meta.title}}</span></span>

                    <template v-for="(middle) in top.children">
                        <a-menu-item v-if="!middle.children" :key="top.path+'/'+middle.path">{{middle.meta.title}}</a-menu-item>
                        <a-sub-menu v-else :key="top.path+'/'+middle.path" :title="middle.meta.title">

                            <template v-for="(bottom) in middle.children">
                                <a-menu-item :key="top.path+'/'+middle.path+'/'+bottom.path">{{bottom.meta.title}}</a-menu-item>
                            </template>

                        </a-sub-menu>
                    </template>

                </a-sub-menu>
            </template>
        </a-menu>
    </a-layout-sider>
</template>
<script>
    import Logo from '@/components/tool/Logo'
    import menu from '@/router/menu'

    export default {
        data() {
            return {
                data: menu,
                selectedKeys: ['index'],
                openKeys: []
            };
        },
        components: {
            Logo
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
        mounted(){
            //初始化
            const routes = this.$route.matched.concat()
            window.console.log(routes)
        },
        methods: {
            openChange(keys){
                window.console.log('----------- openChange -----------')
                window.console.log(keys)
                this.openKeys = keys;
            },
            menuClick(data){
                window.console.log('----------- menuClick -----------')
                window.console.log(data)
                this.selectedKeys = [data.key]
                this.jump('/'+data.key);
            },
        }
    };
</script>
