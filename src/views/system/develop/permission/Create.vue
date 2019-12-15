<template>
    <a-form id="components-form-demo-validate-other" :form="form" v-bind="formItemLayout" @submit="handleSubmit">
        <a-form-item label="Plain Text">
            <span class="ant-form-text">
                China
            </span>
        </a-form-item>

        <a-form-item label="InputNumber">
            <a-input-number v-decorator="['input-number', { initialValue: 3 }]" :min="1" :max="10" />
            <span class="ant-form-text">
                machines
            </span>
        </a-form-item>

        <a-form-item :wrapper-col="{ span: 12, offset: 6 }">
            <a-button type="primary" html-type="submit">
                Submit
            </a-button>
        </a-form-item>
    </a-form>
</template>

<script>
    export default {
        data: () => ({
            formItemLayout: {
                labelCol: { span: 3},
                wrapperCol: { span: 17 },
            },
        }),
        beforeCreate() {
            this.form = this.$form.createForm(this, { name: 'validate_other' });
        },
        methods: {
            handleSubmit(e) {
                e.preventDefault();
                this.form.validateFields((err, values) => {

                });
            },
            normFile(e) {
                if (Array.isArray(e)) {
                    return e;
                }
                return e && e.fileList;
            },
        },
    };
</script>