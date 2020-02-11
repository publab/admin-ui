<template>
    <a-form id="components-form-demo-validate-other"
            :form="form"
            v-bind="formItemLayout"
            :layout="formLayout"
            @submit="handleSubmit"
    >
        <a-divider orientation="left">Admin 功能添加</a-divider>

        <a-form-item label="上级模块">
            <a-select
                    v-decorator="[
                  'gender',
                  {rules: [{ required: true, message: 'Please select your gender!' }]}
                ]"
                    placeholder="Select a option and change input text above"
            >
                <a-select-option value="male">
                    male
                </a-select-option>
                <a-select-option value="female">
                    female
                </a-select-option>
            </a-select>
        </a-form-item>

        <a-form-item label="显示名称">
            <a-input
                v-decorator="[
                  'note',
                  {rules: [{ required: true, message: 'Please input your note!' }]}
                ]"
            />
        </a-form-item>

        <a-form-item label="排序">
            <a-input-number v-decorator="['input-number', { initialValue: 0 }]" :min="0" :max="99999999" style="width: 100px" />
            <span class="ant-form-text">
                (0 ~ 99999999) 值越大越靠前
            </span>
        </a-form-item>

        <a-form-item
            label="Nickname"
        >
            <a-input
                v-decorator="[
                  'nickname',
                  {rules: [{ required: false, message: 'Please input your nickname' }]}
                ]"
                    placeholder="Please input your nickname"
            />
        </a-form-item>

        <a-form-item :wrapper-col="{offset: formItemLayout.labelCol.span }">
            <a-button
                type="primary"
                html-type="submit"
                :disabled="hasErrors(form.getFieldsError())"
            >
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
            formLayout: 'horizontal',
        }),
        beforeCreate() {
            this.form = this.$form.createForm(this);
        },
        methods: {
            handleSubmit(e) {
                e.preventDefault();
                this.form.validateFields((err, values) => {
                    if(!err){
                        window.console.log('innnnnn');
                    }

                });
            },
        },
    };
</script>