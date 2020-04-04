<template>
    <div class="box-container">
        <a-upload
                action="http://admin.2l2.cn/upload/image"
                listType="picture-card"
                :fileList="fileList"
                :multiple="true"
                :headers="headers"
                @preview="handlePreview"
                @change="handleChange"
        >
            <div v-if="fileList.length < 8">
                <a-icon type="plus" />
                <div class="ant-upload-text">Upload</div>
            </div>
        </a-upload>
        <a-modal :visible="previewVisible" :footer="null" @cancel="handleCancel">
            <img alt="example" style="width: 100%" :src="previewImage" />
        </a-modal>
        <ueditor @ready="editorReady" ref="ue" :value="defaultMSG" :ueditorConfig="config"></ueditor>
    </div>
</template>

<script>
    import Ueditor from '@/components/Ueditor';

    function getBase64(file) {
        return new Promise((resolve, reject) => {
            const reader = new FileReader();
            reader.readAsDataURL(file);
            reader.onload = () => resolve(reader.result);
            reader.onerror = error => reject(error);
        });
    }

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
                },
                previewVisible: false,
                previewImage: '',
                headers: {
                    'Accept': 'application/json',
                    'Authorization': 'Bearer ' + sessionStorage.getItem('access_token'),
                },
                fileList: [
                    {
                        uid: '-1',
                        name: 'image.png',
                        status: 'done',
                        url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
                    },
                    {
                        uid: '-2',
                        name: 'image.png',
                        status: 'done',
                        url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
                    },
                    {
                        uid: '-5',
                        name: 'image.png',
                        status: 'error',
                    },
                ],
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

            handleCancel() {
                this.previewVisible = false;
            },
            async handlePreview(file) {
                if (!file.url && !file.preview) {
                    file.preview = await getBase64(file.originFileObj);
                }
                this.previewImage = file.url || file.preview;
                this.previewVisible = true;
            },
            handleChange({file,fileList,event}) {
                // window.console.log(file,fileList,event);
                this.fileList = fileList;
            },
        }
    }
</script>

<style scoped>

</style>
