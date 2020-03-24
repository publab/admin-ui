<template>
	<a-form id="components-form-demo-validate-other"
			:form="form"
			v-bind="formItemLayout"
			:layout="formLayout"
			@submit="handleSubmit"
	>
		<a-divider orientation="left">角色添加</a-divider>

		<a-form-item label="显示名称">
			<a-input
					v-decorator="['title',{initialValue: '',rules: [{ required: true, message: 'Please input your display_name!' }]}]"
					placeholder="请输入显示名称"
			/>
		</a-form-item>

		<a-form-item label="角色名称">
			<a-input
					v-decorator="['name',{initialValue: '',rules: [{ required: true, message: 'Please input your route_name!' }]}]"
					placeholder="请输入角色名称"
			/>
		</a-form-item>

		<a-form-item label="状态">
			<a-radio-group v-decorator="['is_work',{ initialValue: 1 }]">
				<a-radio :value="1">正常</a-radio>
				<a-radio :value="2">停止</a-radio>
			</a-radio-group>
		</a-form-item>

		<a-form-item label="权限">
			<p-tree ref="permissionTree" :selectNode="selectNode"></p-tree>
		</a-form-item>

		<a-form-item
				:wrapperCol="{ span: 24 }"
				style="text-align: center"
		>
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
    import {PTree} from '@/components';

    export default {
        data: () => ({
            formItemLayout: {
                labelCol: {sm: {span: 5}},
                wrapperCol: {sm: {span: 14} },
            },
            formLayout: 'horizontal',
            selectNode: [],
        }),
        beforeCreate() {
            this.form = this.$form.createForm(this);
        },
        mounted(){
            let _this = this;


            if(_this.$route.params.id){
                axios.post('system/develop/role/detail/'+_this.$route.params.id,{permission:1}).then((response) => {
                    if(!response.status){
                        return this.$message.error(response.message);
                    }
                    _this.$nextTick(() => {
                        _this.selectNode = response.data.permission;
                        delete response.data.permission;
                        _this.form.setFieldsValue(response.data);
                    });
                });
            }
        },
        components: {
            PTree
        },
        methods: {
            handleSubmit(e) {
                e.preventDefault();

                let _this = this;
                _this.form.validateFields((err, values) => {
                    if(err){
                        return false;
                    }

                    let url;
                    if(_this.$route.params.id){
                        url = 'system/develop/role/update/'+_this.$route.params.id;
                    }else{
                        url = 'system/develop/role/create';
                    }

                    axios.post(url,{data:values,permission:_this.$refs.permissionTree.checkboxs}).then((response) => {

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
