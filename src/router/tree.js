const Tree = function tree(component = false) {
    return {
        name: 'tree',
        computed: {
            showChild() {
                const deepestMatchedRoute = this.$route.matched[this.$route.matched.length - 1];
                return deepestMatchedRoute.instances.default !== this;
            },
        },
        render(h) {
            const { $route: { meta ,path } } = this
            const routerView = (
                <transition name="bounce" mode="out-in">
                    <router-view key={path}></router-view>
                </transition>
            );
            return this.showChild || !component ? routerView : h(component);
            // const child = this.showChild ? h('router-view') : h(component);
            // return h('keep-alive', [child]);
        },
    };
}

const RouterView = {
    name: 'RouteView',
    props: {
        keepAlive: {
            type: Boolean,
            default: true
        }
    },
    data () {
        return {}
    },
    render () {
        const { $route: { meta }, $store: { getters } } = this
        const inKeep = (
            <keep-alive>
                <router-view />
            </keep-alive>
        )
        const notKeep = (
            <router-view />
        )
        // 这里增加了 multiTab 的判断，当开启了 multiTab 时
        // 应当全部组件皆缓存，否则会导致切换页面后页面还原成原始状态
        // 若确实不需要，可改为 return meta.keepAlive ? inKeep : notKeep
        if (!getters.multiTab && !meta.keepAlive) {
            return notKeep
        }
        return this.keepAlive || getters.multiTab || meta.keepAlive ? inKeep : notKeep
    }
}

export {
    Tree,RouterView
}
