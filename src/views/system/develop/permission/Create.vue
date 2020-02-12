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
                  'parent_id'
                ]"
                    placeholder="请选择上级模块"
            >
                <a-select-option value="0">
                    male
                </a-select-option>
                <a-select-option value="1">
                    female
                </a-select-option>
            </a-select>
        </a-form-item>

        <a-form-item label="显示名称">
            <a-input
                v-decorator="[
                  'display_name',
                  {rules: [{ required: true, message: 'Please input your display_name!' }]}
                ]"
                placeholder="请输入显示名称"
            />
        </a-form-item>

        <a-form-item label="权限名称">
            <a-input
                v-decorator="[
                  'name',
                  {rules: [{ required: true, message: 'Please input your route_name!' }]}
                ]"
                placeholder="请输入权限名称"
            />
        </a-form-item>

        <a-form-item label="菜单">
            <a-radio-group v-decorator="['is_menu',{ initialValue: 1 }]">
                <a-radio :value="1">菜单</a-radio>
                <a-radio :value="2">非菜单</a-radio>
            </a-radio-group>
        </a-form-item>

        <a-form-item label="状态">
            <a-radio-group v-decorator="['is_work',{ initialValue: 1 }]">
                <a-radio :value="1">正常</a-radio>
                <a-radio :value="2">停止</a-radio>
            </a-radio-group>
        </a-form-item>

        <a-form-item label="排序">
            <a-input-number v-decorator="['sorts', { initialValue: 0 }]" :min="0" :max="99999999" style="width: 100px" />
            <span class="ant-form-text">
                (0 ~ 99999999) 值越大越靠前
            </span>
        </a-form-item>

        <a-form-item
            label="图标"
        >
            <a-input
                v-decorator="[
                  'icon',
                  {rules: [{ required: false, message: 'Please input your icon' }]}
                ]"
                placeholder="请输入图标"
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

                let _this = this;
                _this.form.validateFields((err, values) => {
                    if(err){
                        return false;
                    }

                    axios.post('system/develop/permission/create',{data:values}).then((response) => {

                        if(!response.status){
                            return this.$message.error(response.message);
                        }
                        return this.$message.success(response.message,1,() => _this.$router.go(-1));

                    });

                });
            },
        },
    };
</script>