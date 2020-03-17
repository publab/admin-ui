<script>
    export default {
        name: "Menu",
        props: {
            menu: {
                type: Array,
                required: true
            },
            theme: {
                type: String,
                required: false,
                default: 'dark'
            },
            mode: {
                type: String,
                required: false,
                default: 'inline'
            },
            collapsed: {
                type: Boolean,
                required: false,
                default: false
            },
        },
        data () {
            return {
                selectedKeys: ['index'],
                openKeys: []
            }
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
                let _menu = this.menuCheck(this.$route.path.replace(/^(\s|\/)+|(\s|\/)+$/g, '').split('/'));
                this.menuSelect({key: _menu.join('/')},false);
                _menu.pop();
                this.titleClick({key: _menu.join('/')});
            },
            menuSelect(data,jump = true){
                this.selectedKeys = [data.key]
                jump && this.jump('/'+data.key);
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
            renderItem (menu,path = '') {
                return menu.map(item => {
                    const uri = path+(path?'/':'')+item.path;
                    if(item.children && !item.hideChildrenInMenu){
                        return !item.meta.hidden ? (
                            <a-sub-menu key={uri} onTitleClick={this.titleClick}>
                                <span slot="title"><a-icon type={item.meta.icon}/><span>{item.meta.title}</span></span>
                                {this.renderItem(item.children,uri)}
                            </a-sub-menu>
                        ):null;
                    }else{
                        return !item.meta.hidden ? (
                            <a-menu-item key={uri}><a-icon type={item.meta.icon}/><span>{item.meta.title}</span></a-menu-item>
                        ):null;
                    }
                });
            },
            menuCheck(menu){

                return menu.slice(0,3);
            }
        },
        render(){
            const dynamicProps = {
                props: {
                    mode: this.mode,
                    theme: this.theme,
                    openKeys: this.openKeys,
                    selectedKeys: this.selectedKeys
                },
                on: {
                    select: this.menuSelect
                }
            }

            const menuTree = this.renderItem(this.menu);

            return (<a-menu {...dynamicProps}>{menuTree}</a-menu>)
        }
    }
</script>
