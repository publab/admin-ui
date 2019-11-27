<template>
    <div>
        <button v-on:click="show = !show">
            Toggle
        </button>
        <transition name="fade" :duration="1000">
            <p v-if="show">hello</p>
        </transition>
    </div>
</template>

<script>
    export default {
        data () {
            return {
                show: true
            }
        }
    }
</script>
