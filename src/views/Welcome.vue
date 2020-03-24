<template>
	<div class="about">
		<template  v-for="item in list">
			<h1 :key="item.id" v-if="item.id==1">Welcome to my world {{item.name}}</h1>
			<h1 :key="item.id" v-else>Welcome to my world </h1>

		</template>
		<t-chacao>
			<div slot="headerContent">
				<div class="title">1111<span class="welcome-text"> 3323</span></div>
				<div>前端工程师 | 蚂蚁金服 - 某某某事业群 - VUE平台</div>
			</div>
			<div>
				这里是匿名的东西啊啊啊啊
			</div>
			<div>
				这里是匿名的东西啊啊啊啊22222
			</div>
		</t-chacao>

	</div>
</template>

<script>

    import {TChacao} from '@/components';

    export default {
        name: "Welcome",
        components: {
            TChacao
        },
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

        }
    }
</script>
