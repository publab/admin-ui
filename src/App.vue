<template>
  <div id="app">
      <transition name="bounce" mode="out-in">
        <router-view></router-view>
      </transition>
  </div>
</template>

<script>

export default {
  name: 'app',
  components: {

  }
}
</script>
<style>
    .bounce-enter-active, .bounce-leave-active {
        transition: opacity .1s ease;
    }

    .bounce-enter, .bounce-leave-to /* .fade-leave-active below version 2.1.8 */ {
        opacity: 0;
    }
</style>