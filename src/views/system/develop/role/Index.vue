<template>
	<s-table ref="table" :columns="columns" dataUrl="system/develop/role" :params="params">
		<template slot="title">
			<a-row type="flex" justify="space-around" align="middle">
				<a-col :span="8"><h3>角色列表</h3></a-col>
				<a-col :span="16" :style="{ textAlign:'right'}">
					<a-button type="primary" icon="plus" @click="jump('/system/develop/role/create')">添加角色</a-button>
				</a-col>
			</a-row>
			<a-form layout="inline" :form="form" @submit="handleFormSubmit" style="margin-top: 16px;">
				<a-form-item label="Field A">
					<a-input
							v-decorator="[
                              'gender', { rules: [{ required: false, message: 'Please input your gender!' }] }
                            ]"
							placeholder="input Field A"
					/>
				</a-form-item>
				<a-form-item label="Field B">
					<a-input
							v-decorator="[
                              'sex',
                            ]"
							placeholder="input Field B"
					/>
				</a-form-item>
				<a-form-item>
					<a-button type="primary" html-type="submit">
						Search
					</a-button>
					<a-button :style="{ marginLeft: '8px' }" @click="handleReset">
						Clear
					</a-button>
				</a-form-item>
			</a-form>
		</template>
		<div
				slot="filterDropdown"
				slot-scope="{ setSelectedKeys, selectedKeys, confirm, clearFilters, column }"
				style="padding: 8px"
		>
			<a-input
					v-ant-ref="c => searchInput = c"
					:placeholder="`Search ${column.dataIndex}`"
					:value="selectedKeys[0]"
					@change="e => setSelectedKeys(e.target.value ? [e.target.value] : [])"
					@pressEnter="confirm()"
					style="width: 188px; margin-bottom: 8px; display: block;"
			/>
			<a-button
					type="primary"
					@click="confirm()"
					icon="search"
					size="small"
					style="width: 90px; margin-right: 8px"
			>Search</a-button
			>
			<a-button @click="clearFilters" size="small" style="width: 90px"
			>Reset</a-button
			>
		</div>
		<a-icon
				slot="filterIcon"
				slot-scope="filtered"
				type="search"
				:style="{ color: filtered ? '#108ee9' : undefined }"
		/>
		<template slot="is_work" slot-scope="data">
			{{data == 1 ? '正常' : '停止'}}
		</template>
		<template slot="operation" slot-scope="data, record">
			<a @click="jump('/system/develop/role/update/'+record.id)">编辑</a>
			<a-divider type="vertical" />
			<a-popconfirm
					title="Sure to delete?"
					@confirm="() => onDelete(record.id)">
				<a>删除</a>
			</a-popconfirm>
		</template>
	</s-table>
</template>
<script>
    import { STable } from '@/components'

    export default {
        components: {
            STable
        },
        data() {
            return {
                form: this.$form.createForm(this),
                columns: [
                    {title: 'ID', dataIndex: 'id', sorter: true,},
                    {title: '显示名称', dataIndex: 'title', filters: [{ text: 'Male', value: 'male' }, { text: 'Female', value: 'female' }]},
                    {title: '角色名称', dataIndex: 'name', scopedSlots: { filterDropdown: 'filterDropdown', filterIcon: 'filterIcon'}, onFilterDropdownVisibleChange: visible => {visible && setTimeout(() => {this.searchInput.focus();}, 0);},},
                    {title: '状态', dataIndex: 'is_work', scopedSlots: {customRender: 'is_work'},},
                    {title: '操作', dataIndex: 'operation', width: 150, scopedSlots: { customRender: 'operation' },
                    }],
                params: {}
            }
        },
        mounted(){

        },
        methods: {
            handleFormSubmit(e){
                e.preventDefault();
                this.form.validateFields((err, values) => {
                    if (!err) {
                        this.params = values;
                        this.$nextTick(() => {
                            this.$refs.table.loadData()
                        });
                    }
                });
            },
            handleReset(){
                this.form.resetFields();
                this.params = {};
                this.$nextTick(() => {
                    this.$refs.table.loadData()
                });
            },
            onDelete(id){
                let _this = this;
                axios.post('system/develop/role/delete/'+id,{}).then((response) => {

                    if(!response.status){
                        return this.$message.error(response.message);
                    }
                    _this.data = _this.data.filter(item => item.id !== id);

                });
            },
        }
    }
</script>
