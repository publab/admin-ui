<template>
  <div id="app">
      <a-spin :spinning="this.$store.state.loading ? true : false" size="large">
          <a-icon slot="indicator" type="loading" spin />
          <transition name="bounce" mode="out-in">
              <router-view></router-view>
          </transition>
      </a-spin>
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
