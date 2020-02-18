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
                window.console.log('selectedKeys', selectedKeys);
                window.console.log('info', info);
                window.console.log('this', this);
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