<template>
    <div class="box-container">
        <ueditor @ready="editorReady" ref="ue" :value="defaultMSG" :ueditorConfig="config"></ueditor>
    </div>
</template>

<script>
    import Ueditor from '@/components/Ueditor';
    export default {
        name: "Custom",
        data() {
            return {
                defaultMSG: null,
                form: {
                    content: ''
                },
                config: {
                    initialFrameHeight: 500
                }
            };
        },
        created() {

        },
        components: {
            Ueditor
        },
        methods: {

            editorReady(instance) {
                instance.setContent('段志伟');
                instance.addListener('contentChange', () => {
                     window.console.log(instance.getContent());
                });
            },
        }
    }
</script>

<style scoped>

</style>
