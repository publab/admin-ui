<template>
	<a-tree v-if="treeData.length"
			checkable
			v-model="checkboxs"
			:treeData="treeData"
			:replaceFields="replaceFields"
			:defaultExpandedKeys="threeNodes"
			:checkStrictly="true"
			@check="onCheck"
	/>
</template>

<script>
    export default {
        name: "Tree",
        props: ['selectNode'],
        data: () => ({
            replaceFields:{
                children:'children',
                title:'title',
                key:'id'
            },
            treeData: [],
            checkboxs: [],
            threeNodes:[],
        }),
        mounted(){
            let _this = this;

            //异步加载权限
            axios.post('system/develop/permission',{}).then((response) => {
                if(!response.status){
                    return this.$message.error(response.message);
                }
                let threeNodes = [];
                for(var i in response.data){
                    threeNodes.push(response.data[i].id);
                    for(var j in response.data[i].children){
                        threeNodes.push(response.data[i].children[j].id);
                        response.data[i].children[j].class = 'whiteSpaceNormal'
                    }
                }
                _this.threeNodes = threeNodes;
                _this.treeData = response.data;
            });

        },
        watch:{
            selectNode(val){
                this.checkboxs = val;
            }
        },
        methods: {
            onCheck(selectedKeys, info) {
                let _this = this;
                _this.$nextTick(() => {
                    let status = info.checked,
                        isSelected = selectedKeys.checked,
                        line = this.findLine(this.treeData,info.node.eventKey);

                    this.initLineCheck(this.treeData,line,status,isSelected);
                });
            },
            initLineCheck(data,line,status){
                let sons = this.getSonKey(this.getNodeByLine(data,line));
                let nodePool = this.checkboxs.checked;
                if(status){
                    sons = sons.filter(item => {
                        return !nodePool.includes(item)
                    });
                    nodePool = [...nodePool,...sons];
                }else{
                    nodePool = nodePool.filter(item => {
                        return !sons.includes(item)
                    })
                }
                nodePool = this.parentNode(data,line,nodePool);
                this.checkboxs = nodePool;
            },
            findLine(data,key,line = []){
                for(var i in data){
                    line.push(i);
                    if(data[i].id == key){
                        return line;
                    }
                    if(this.findLine(data[i].children,key,line)){
                        return line;
                    }else{
                        line.pop();
                    }
                }
                return false;
            },
            getNodeByLine(data,line){
                let need = data;
                for (let i in line){
                    need = need[line[i]].children
                }
                return need;
            },
            getSonKey(data,line = []){
                for(var i in data){
                    line.push(data[i].id);
                    this.getSonKey(data[i].children,line)
                }
                return line;
            },
            parentNode(data,line,nodePool){
                line.pop()
                if(!line.length){
                    return nodePool;
                }
                let brothers = this.getNodeByLine(data,line);
                let top = brothers.map(item => {
                    return item.id;
                }).some(item => {
                    return nodePool.includes(item)
                });
                let parentKey = brothers[0].parent_id;

                if(top){
                    nodePool = nodePool.includes(parentKey) ? nodePool : [...nodePool,parentKey];
                }else{
                    nodePool = nodePool.filter(item => {
                        return item != parentKey
                    })
                }
                return this.parentNode(data,line,nodePool);
            }
        }
    }
</script>

<style lang="less">
	.whiteSpaceNormal>ul{
		white-space: normal !important;
	}
	.whiteSpaceNormal>ul>li{
		display: inline-block;
		vertical-align: top;
		padding-top: 8px;
	}
</style>
