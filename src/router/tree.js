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
            return this.showChild || !component ? h('router-view') : h(component);
            // const child = this.showChild ? h('router-view') : h(component);
            // return h('keep-alive', [child]);
        },
    };
}