<template>
    <a-tree v-if="treeData.length"
            checkable
            v-model="checkboxs"
            :treeData="treeData"
            :defaultExpandAll="true"
            :checkStrictly="true"
            @check="onCheck"
    />
</template>

<script>
    const treeData = [
        {
            title: '0-0',
            key: '0-0',
            children: [
                {
                    title: '0-0-0',
                    key: '0-0-0',
                    class: 'whiteSpaceNormal',
                    children: [
                        { title: '0-0-0-0', key: '0-0-0-0'},
                        { title: '0-0-0-1', key: '0-0-0-1'},
                        { title: '0-0-0-2', key: '0-0-0-2'},
                        { title: '0-0-0-2', key: '0-0-0-3'},
                        { title: '0-0-0-2', key: '0-0-0-4'},
                        { title: '0-0-0-2', key: '0-0-0-5'},
                        { title: '0-0-0-2', key: '0-0-0-6'},
                        { title: '0-0-0-2', key: '0-0-0-7'},
                        { title: '0-0-0-2', key: '0-0-0-8'},
                        { title: '0-0-0-2', key: '0-0-0-9'},
                        { title: '0-0-0-2', key: '0-0-0-10'},
                        { title: '0-0-0-2', key: '0-0-0-11'},
                    ],
                },
                {
                    title: '0-0-1',
                    key: '0-0-1',
                    children: [
                        { title: '0-0-1-0', key: '0-0-1-0' },
                        { title: '0-0-1-1', key: '0-0-1-1' },
                        { title: '0-0-1-2', key: '0-0-1-2' },
                    ],
                },
                {
                    title: '0-0-2',
                    key: '0-0-2',
                },
            ],
        },
        {
            title: '0-1',
            key: '0-1',
            children: [
                { title: '0-1-0-0', key: '0-1-0-0' },
                { title: '0-1-0-1', key: '0-1-0-1' },
                { title: '0-1-0-2', key: '0-1-0-2' },
            ],
        },
        {
            title: '0-2',
            key: '0-2',
        },
    ];

    export default {
        name: "Tree",
        data: () => ({
            treeData: [],
            checkboxs: [],
        }),
        mounted(){
            let _this = this;

            //异步加载权限
            axios.post('system/develop/permission',{}).then((response) => {
                if(!response.status){
                    return this.$message.error(response.message);
                }
                for(var i in response.data){
                    for(var j in response.data[i].children){
                        response.data[i].children[j].class = 'whiteSpaceNormal'
                    }
                }
                _this.treeData = response.data;
            });

        },
        methods: {
            onCheck(selectedKeys, info) {
                window.console.log('selectedKeys', selectedKeys);
                // window.console.log('info', info);
            },
        }
    }
</script>

<style>
    .whiteSpaceNormal>ul{
        white-space: normal !important;
    }
    .whiteSpaceNormal>ul>li{
        display: inline-block;
    }
</style>