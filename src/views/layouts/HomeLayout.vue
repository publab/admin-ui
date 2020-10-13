<template>
	<mobile-layout></mobile-layout>
</template>
<script>

    import {mixinApp} from '@/mixin/app'
	import MobileLayout from './home/MobileLayout'

    export default {
        mixins: [mixinApp],
        data() {
            return {

            };
        },
        components: {
            MobileLayout
        },
        mounted(){

        },
        watch: {

        },
        methods: {

        }
    };
</script>
