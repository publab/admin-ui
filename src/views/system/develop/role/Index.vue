<template>
    <a-table :columns="columns" :dataSource="data" :pagination="pagination" @change="handleTableChange">
        <template slot="title">
            <a-row type="flex" justify="space-around" align="middle">
                <a-col :span="18">角色列表</a-col>
                <a-col :span="6" :style="{ textAlign:'right'}">
                    <a-button type="primary" icon="plus" @click="jump('/system/develop/role/create')">添加角色</a-button>
                </a-col>
            </a-row>
        </template>
        <template slot="is_work" slot-scope="data">
            {{data == 1 ? '正常' : '停止'}}
        </template>
        <template slot="operation" slot-scope="data, record">
            <a @click="jump('/system/develop/role/update/'+record.key)">编辑</a>
            <a-divider type="vertical" />
            <a-popconfirm
                title="Sure to delete?"
                @confirm="() => onDelete(record.key)">
                <a>删除</a>
            </a-popconfirm>
        </template>
    </a-table>
</template>
<script>
    const columns = [{
        title: 'ID',
        dataIndex: 'key',
        width: 100,
    },{
        title: '显示名称',
        dataIndex: 'title',
    },{
        title: '角色名称',
        dataIndex: 'name',
    },{
        title: '状态',
        dataIndex: 'is_work',
        width: 100,
        scopedSlots: { customRender: 'is_work' },
    },{
        title: '操作',
        dataIndex: 'operation',
        width: 150,
        scopedSlots: { customRender: 'operation' },
    }];

    export default {
        data() {
            return {
                data: [],
                columns,
                pagination: {}
            }
        },
        mounted(){
            this.fetch();
        },
        methods: {
            handleTableChange(pagination, filters, sorter) {

                window.console.log(pagination, filters, sorter);
                const pager = { ...this.pagination };
                pager.current = pagination.current;
                this.pagination = pager;
                this.fetch({
                    results: pagination.pageSize,
                    page: pagination.current,
                    sortField: sorter.field,
                    sortOrder: sorter.order,
                    ...filters,
                });
            },
            fetch(params = {}){
                let _this = this;
                axios.post('system/develop/role',{}).then((response) => {

                    if(!response.status){
                        return this.$message.error(response.message);
                    }
                    _this.data = response.data;
                    _this.pagination = {
                        total : response.meta.total,
                        pageSize : response.meta.per_page,
                        ..._this.pagination,
                    }
                });
            },
            onDelete(id){
                let _this = this;
                axios.post('system/develop/role/delete/'+id,{}).then((response) => {

                    if(!response.status){
                        return this.$message.error(response.message);
                    }
                    _this.data = _this.data.filter(item => item.key !== id);

                });
            }
        }
    }
</script>