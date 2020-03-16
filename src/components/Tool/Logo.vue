<template>
  <div class="logo">
    <img src="@/assets/logo.svg" alt="logo">
    <h1 v-if="showTitle">{{ title }}</h1>
  </div>
</template>

<script>

export default {
  name: 'Logo',
  props: {
    title: {
      type: String,
      default: 'Zhiwei Duan',
      required: false
    },
    showTitle: {
      type: Boolean,
      default: true,
      required: false
    }
  }
}
</script>
<style lang="scss">
  .logo {
    position: relative;
    height: 64px;
    padding-left: 24px;
    overflow: hidden;
    line-height: 64px;
    background: #002140;
    transition: all .3s;

    img,
    svg,
    h1 {
      display: inline-block;
      vertical-align: middle;
    }

    img,
    svg {
      height: 32px;
      width: 32px;
    }

    h1 {
      color: #fff;
      font-size: 20px;
      margin: 0 0 0 12px;
      font-family: Avenir, Helvetica Neue, Arial, Helvetica, sans-serif;
      font-weight: 600;
    }
  }
</style>
