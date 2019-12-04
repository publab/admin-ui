<template>
    <div class="about">
        <template  v-for="item in list">
            <h1 :key="item.id" v-if="item.id==1">Welcome to my world {{item.name}}</h1>
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
        }
    }
</script>

<style scoped>

</style>
