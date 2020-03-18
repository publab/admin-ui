<template>
  <div id="app">
      <a-spin :spinning="loading ? true : false" size="large" :style="{background:'#000'}">
          <a-icon slot="indicator" type="loading" spin />
          <transition name="bounce" mode="out-in">
              <router-view></router-view>
          </transition>
      </a-spin>
  </div>
</template>

<script>
import { deviceEnquire } from '@/utils/device'

export default {
    name: 'app',
    mounted(){
        deviceEnquire(deviceType => {
            this.$store.commit('setDevice',deviceType);
        })
    },
    computed: {
        loading(){
            return this.$store.state.loading.index;
        }
    }
}
</script>
<style>
    .bounce-enter-active, .bounce-leave-active {
        transition: opacity 1s ease;
    }

    .bounce-enter, .bounce-leave-to /* .fade-leave-active below version 2.1.8 */ {
        opacity: 0;
    }
</style>
