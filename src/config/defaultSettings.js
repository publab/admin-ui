/**
 * 项目默认配置项
 * primaryColor - 默认主题色, 如果修改颜色不生效，请清理 localStorage
 * navTheme - sidebar theme ['dark', 'light'] 两种主题
 * layout - 整体布局方式 ['sidemenu', 'topmenu'] 两种布局
 * contentWidth - 内容区布局： 流式 |  固定
 * fixedHeader - 固定 Header : boolean
 * fixSiderbar - 固定左侧菜单栏 ： boolean
 * autoHideHeader - 向下滚动时，隐藏 Header : boolean
 * colorWeak - 色盲模式
 *
 * storageOptions: {} - Vue-ls 插件配置项 (localStorage/sessionStorage)
 *
 */

export default {
  primaryColor: '#52C41A',
  navTheme: 'dark',
  layout: 'sidemenu',
  contentWidth: 'Fixed',
  fixedHeader: false,
  fixSiderbar: false,
  autoHideHeader: false,
  colorWeak: false,
  production: process.env.NODE_ENV === 'production',
  // vue-ls options
  storageOptions: {
      namespace: 'pro__', // key prefix
      name: 'ls', // name variable Vue.[ls] or this.[$ls],
      storage: 'local' // storage name session, local, memory
  }
}
