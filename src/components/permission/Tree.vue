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
                window.console.log('treeData', this.treeData);
                window.console.log('key', info.node.eventKey);
                // window.console.log('info', info);

                //选中
                    //向下全选
                    //向上父节点全部选中

                //撤销
                    //向下撤销
                    //向上父节点撤销无子节点选中
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