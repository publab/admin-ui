export default function tree(component = false) {
    return {
        name: 'tree',
        computed: {
            showChild() {
                const deepestMatchedRoute = this.$route.matched[this.$route.matched.length - 1];
                return deepestMatchedRoute.instances.default !== this;
            },
        },
        render(h) {
            // const { $route: { meta } } = this
            const routerView = (
                <transition name="bounce" mode="out-in">
                    <router-view></router-view>
                </transition>
            );
            return this.showChild || !component ? routerView : h(component);
            // const child = this.showChild ? h('router-view') : h(component);
            // return h('keep-alive', [child]);
        },
    };
}
