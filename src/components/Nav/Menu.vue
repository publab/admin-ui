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
            '$route': function (newVal) {
                this.menuInit();
            },
            collapsed(news,olds){
                this.menuInit();
            }
        },
        mounted(){
            //初始化
            this.menuInit();
        },
        methods: {
            menuInit(){
                this.openKeys = [];
                let _menu = this.menuCheck(this.$route.path.replace(/^(\s|\/)+|(\s|\/)+$/g, '').split('/'));
                this.menuSelect({key: _menu.join('/')},false);
                _menu.pop();
                this.collapsed || this.titleClick({key: _menu.join('/')});
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
                                <span slot="title">{item.meta.icon ? <a-icon type={item.meta.icon} /> : ''}<span>{item.meta.title}</span></span>
                                {this.renderItem(item.children,uri)}
                            </a-sub-menu>
                        ):null;
                    }else{
                        return !item.meta.hidden ? (
                            <a-menu-item key={uri} title={item.meta.title}>{item.meta.icon ? <a-icon type={item.meta.icon} /> : ''}<span>{item.meta.title}</span></a-menu-item>
                        ):null;
                    }
                });
            },
            menuCheck(menu){
                let _menu = [],tmpJson,searchJson = this.menu;
                for(var i in menu){
                    tmpJson = this.jsonFind(searchJson,'path',menu[i]);
                    if(tmpJson){
                        _menu.push(menu[i]);
                        tmpJson.hideChildrenInMenu ? searchJson = [] : searchJson = tmpJson.children;
                    }else{
                        break;
                    }
                }
                return _menu;
            },
            jsonFind(data,key,value){
                return data.find(item => item[key] == value);
            }
        },
        render(){
            const extra = !((this.mode == 'inline' && this.collapsed) || this.mode == 'horizontal') ? {
                openKeys: this.openKeys,
            }:{};
            const dynamicProps = {
                props: {
                    mode: this.mode,
                    theme: this.theme,
                    selectedKeys: this.selectedKeys,
                    ...extra
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
