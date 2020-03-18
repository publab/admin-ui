const Tree = function tree(component = false) {
    window.console.log('innnnn');
    return {
        name: 'Tree',
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

export {
    Tree
}
