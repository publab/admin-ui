<template>
    <a-layout-sider :theme="navtheme" :width="siderWidth" v-model="collapsed" style="box-shadow: 2px 0 6px rgba(0, 21, 41, 0.35);">
        <Logo></Logo>
        <a-menu
                :theme="navtheme"
                mode="inline"
                :openKeys="openKeys"
                :selectedKeys="selectedKeys"
                @select="menuSelect"
        >
            <template v-for="(top) in data">
                <a-menu-item v-if="!top.children" :key="top.path">
                    <a-icon :type="top.meta.icon" />
                    <span>{{top.meta.title}}</span>
                </a-menu-item>
                <a-sub-menu v-else :key="top.path" @titleClick="titleClick">
                    <span slot="title"><a-icon :type="top.meta.icon" /><span>{{top.meta.title}}</span></span>

                    <template v-for="(middle) in top.children">
                        <a-menu-item v-if="!middle.children" :key="top.path+'/'+middle.path">{{middle.meta.title}}</a-menu-item>
                        <a-sub-menu v-else :key="top.path+'/'+middle.path" :title="middle.meta.title"  @titleClick="titleClick">

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
        computed: {

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
        watch: {
            collapsed(news,olds){
                if(news){
                   this.openKeys = [];
                }else{
                    this.menuInit();
                }
            }
        },
        mounted(){
            //初始化
            this.menuInit();
        },
        methods: {
            menuInit(){
                let _menu = this.$route.path.replace(/^(\s|\/)+|(\s|\/)+$/g, '').split('/').slice(0,3);
                this.menuSelect({key: _menu.join('/')});
                _menu.pop();
                this.titleClick({key: _menu.join('/')});
            },
            menuSelect(data){
                this.selectedKeys = [data.key]
                this.jump('/'+data.key);
            },
            titleClick(data){
                if(!this.openKeys.includes(data.key)){   //选中
                    let _maps = []
                    this.openKeys = []
                    data.key.split('/').map((item) => {
                        _maps.push(item);
                        this.openKeys.push(_maps.join('/'))
                    })
                }else{  //取消选择
                    this.openKeys = this.openKeys.filter(item => item.search(data.key))
                }
            },
        }
    };
</script>
