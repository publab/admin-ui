<template>
    <a-form id="components-form-demo-validate-other"
            :form="form"
            v-bind="formItemLayout"
            :layout="formLayout"
            @submit="handleSubmit"
    >

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

        <a-form-item
                label="Note"
                validate-status="error"
                help="ooooooooooooooooo"
        >
            <a-input
                    v-decorator="[
                  'note',
                  {rules: [{ required: true, message: 'Please input your note!' }]}
                ]"
            />
        </a-form-item>

        <a-form-item label="Gender">
            <a-select
                    v-decorator="[
                  'gender',
                  {rules: [{ required: true, message: 'Please select your gender!' }]}
                ]"
                    placeholder="Select a option and change input text above"
                    @change="handleSelectChange"
            >
                <a-select-option value="male">
                    male
                </a-select-option>
                <a-select-option value="female">
                    female
                </a-select-option>
            </a-select>
        </a-form-item>

        <a-form-item
                label="Nickname"
        >
            <a-input
                    v-decorator="[
                  'nickname',
                  {rules: [{ required: checkNick, message: 'Please input your nickname' }]}
                ]"
                    placeholder="Please input your nickname"
            />
        </a-form-item>

        <a-form-item
                :wrapper-col="{offset: formItemLayout.labelCol.span}"
        >
            <a-checkbox
                    :checked="checkNick"
                    @change="handleChange"
            >
                Nickname is required
            </a-checkbox>
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
    import AFormItem from "ant-design-vue/es/form/FormItem";
    export default {
        components: {AFormItem},
        data: () => ({
            formItemLayout: {
                labelCol: { span: 3},
                wrapperCol: { span: 17 },
            },
            formLayout: 'horizontal',
            checkNick: false,
        }),
        beforeCreate() {
            this.form = this.$form.createForm(this, { note: 'validate_other' });
        },
        mounted () {
            this.$nextTick(() => {
                // To disabled submit button at the beginning.
                // this.form.validateFields();
            });
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
            handleSelectChange (value) {
                this.form.setFieldsValue({
                    note: `Hi, ${value === 'male' ? 'man' : 'lady'}!`,
                });
            },
            handleChange  (e) {
                this.checkNick = e.target.checked;
                this.$nextTick(() => {
                    this.form.validateFields(['nickname'], { force: true });
                });
            },
            hasErrors (fieldsError) {
                return Object.keys(fieldsError).some(field => fieldsError[field]);
            }
        },
    };
</script>