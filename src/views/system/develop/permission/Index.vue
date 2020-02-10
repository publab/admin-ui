<template>
    <a-table :columns="columns" :dataSource="data">
        <template slot="title">
            <a-row type="flex" justify="space-around" align="middle">
                <a-col :span="18">Admin功能列表</a-col>
                <a-col :span="6" :style="{ textAlign:'right'}">
                    <a-button type="primary" icon="plus">添加功能</a-button>
                </a-col>
            </a-row>
        </template>
        <template slot="name" slot-scope="text">
            <a href="javascript:;">{{text}}</a>
        </template>
        <template slot="operation" slot-scope="text, record">
            <a-popconfirm
                title="Sure to delete?"
                @confirm="() => onDelete(record.key)">
                <a>Delete</a>
            </a-popconfirm>
        </template>
    </a-table>
</template>
<script>
    const columns = [{
        title: 'Name',
        dataIndex: 'name',
        scopedSlots: { customRender: 'name' },
    }, {
        title: 'Cash Assets',
        className: 'column-money',
        dataIndex: 'money',
        align: 'right',
    }, {
        title: 'Address',
        dataIndex: 'address',
    }, {
        title: 'operation',
        dataIndex: 'operation',
        scopedSlots: { customRender: 'operation' },
    }];

    const data = [{
        key: '1',
        name: 'John Brown',
        money: '￥300,000.00',
        address: 'New York No. 1 Lake Park',
    }, {
        key: '2',
        name: 'Jim Green',
        money: '￥1,256,000.00',
        address: 'London No. 1 Lake Park',
    }, {
        key: '3',
        name: 'Joe Black',
        money: '￥120,000.00',
        address: 'Sidney No. 1 Lake Park',
    }];

    export default {
        data() {
            return {
                data,
                columns,
            }
        }
    }
</script>