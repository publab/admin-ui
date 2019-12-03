<template>
  <div id="app">
      <transition name="bounce" mode="out-in">
          <a-spin>
              <a-icon slot="indicator" type="loading" style="font-size: 24px" spin />
              <router-view></router-view>
          </a-spin>
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
