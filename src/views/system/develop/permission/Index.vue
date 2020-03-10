<template>
    <a-table :columns="columns" :dataSource="data" :pagination="pagination" rowKey="id">
        <template slot="title">
            <a-row type="flex" justify="space-around" align="middle">
                <a-col :span="8">Admin功能列表</a-col>
                <a-col :span="16" :style="{ textAlign:'right'}">
                    <a-button type="primary" icon="plus" @click="jump('/system/develop/permission/create')">添加功能</a-button>
                </a-col>
            </a-row>
        </template>
        <template slot="icon" slot-scope="data">
            <a-icon v-if="data" :type="data" />
        </template>
        <template slot="display_name" slot-scope="data, record">
            |<span v-for="i in record.level" :key="i"> --- </span> {{data}}
        </template>
        <template slot="is_menu" slot-scope="data">
            {{data == 1 ? '是' : '否'}}
        </template>
        <template slot="is_work" slot-scope="data">
            {{data == 1 ? '正常' : '停止'}}
        </template>
        <template slot="operation" slot-scope="data, record">
            <a @click="jump('/system/develop/permission/update/'+record.id)">编辑</a>
            <a-divider type="vertical" />
            <a-popconfirm
                title="Sure to delete?"
                @confirm="() => onDelete(record.id)">
                <a>删除</a>
            </a-popconfirm>
        </template>
    </a-table>
</template>
<script>

    export default {
        data() {
            return {
                data: [],
                pagination: {
                    pageSize: 20
                },
                columns: [
                    {title: 'ID', dataIndex: 'id', align: 'right'},
                    {title: '名称', dataIndex: 'title', scopedSlots: { customRender: 'display_name' },},
                    {title: '路由', dataIndex: 'name'},
                    {title: '菜单', dataIndex: 'is_menu', scopedSlots: { customRender: 'is_menu' },},
                    {title: '状态', dataIndex: 'is_work', scopedSlots: { customRender: 'is_work' },},
                    {title: '排序', dataIndex: 'sorts'},
                    {title: '操作', dataIndex: 'operation', width: 150, scopedSlots: { customRender: 'operation' },}
                ]
            }
        },
        mounted(){
            this.fetch();
        },
        methods: {
            fetch(){
                let _this = this;
                axios.post('system/develop/permission',{merge:1}).then((response) => {

                    if(!response.status){
                        return this.$message.error(response.message);
                    }
                    _this.data = response.data;
                });
            },
            onDelete(id){
                let _this = this;
                axios.post('system/develop/permission/delete/'+id,{}).then((response) => {

                    if(!response.status){
                        return this.$message.error(response.message);
                    }
                    _this.data = _this.data.filter(item => item.id !== id);

                });
            }
        }
    }
</script>
