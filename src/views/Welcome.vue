<template>
    <div class="about">
        <template  v-for="item in list">
            <h1 :key="item.id" v-if="item.id==1" @click="createPermission()">Welcome to my world {{item.name}}</h1>
            <h1 :key="item.id" v-else>Welcome to my world </h1>

        </template>
    </div>
</template>

<script>
    export default {
        name: "Welcome",
        data(){
            return {
                list: [
                    {id:1,name:'duan'},
                    {id:2,name:'zhi'},
                    {id:3,name:'wei'},
                ]
            }
        },
        methods:{
            createPermission(){

                let _this = this;
                axios.post('system/develop/permission/create').then((response) => {

                });
            }
        }
    }
</script>

<style scoped>

</style>
