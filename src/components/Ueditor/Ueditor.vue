<template>
    <div>
        <script :id="randomId"  type="text/plain"></script>
    </div>
</template>

<script>
    //主体文件引入
    import '../../../public/static/ueditor/ueditor.config.js'
    import '../../../public/static/ueditor/ueditor.all.min.js'
    import '../../../public/static/ueditor/lang/zh-cn/zh-cn.js'

    export default {
        name: "Ueditor",
        props: {
            value: {
                default: function() {
                    return ''
                }
            },
            ueditorConfig: {}
        },
        data() {
            return {
                //每个编辑器生成不同的id,以防止冲突
                randomId: 'editor_' + (Math.random() * 100000000000000000),
                //编辑器实例
                instance: null,
                ready: false,
            };
        },
        watch: {
            value: function(val, oldVal) {
                if (val != null  && this.ready) {
                    this.instance = UE.getEditor(this.randomId, this.ueditorConfig);
                    this.instance.setContent(val);
                }
            }
        },
        //此时--el挂载到实例上去了,可以初始化对应的编辑器了
        mounted() {
            this.initEditor();
        },

        beforeDestroy() {
            // 组件销毁的时候，要销毁 UEditor 实例
            if(this.instance !== null && this.instance.destroy) {
                this.instance.destroy();
            }
        },
        methods: {
            initEditor() {
                const _this = this;
                //dom元素已经挂载上去了
                this.$nextTick(() => {
                    this.instance = UE.getEditor(this.randomId, this.ueditorConfig);
                    // 绑定事件，当 UEditor 初始化完成后，将编辑器实例通过自定义的 ready 事件交出去
                    this.instance.addListener('ready', () => {
                        this.ready = true;
                        this.$emit('ready', this.instance);
                    });
                });
            },
            setText(con) {
                this.instance = UE.getEditor(this.randomId, this.ueditorConfig);
                this.instance.setContent(con);
            },
        }
    }
</script>

<style scoped>

</style>
