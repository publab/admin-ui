/**
 * 项目默认配置项
 * NAVTHEME         - sidebar theme ['dark', 'light'] 两种主题
 * LAYOUT           - 整体布局方式 ['sidemenu', 'topmenu'] 两种布局
 * FIXHEADER        - 固定 Header : boolean
 * FIXSIDEBAR       - 固定左侧菜单栏 ： boolean
 * AUTOHIDEHEADER   - 向下滚动时，隐藏 Header : boolean
 * COLORWEAK        - 色盲模式
 * MULTITAB         - 多标签模式
 * LSOPTIONS: {}    - Vue-ls 插件配置项 (localStorage/sessionStorage)
 */

export default {
    NAVTHEME        : 'dark',
    LAYOUT          : 'sidemenu',
    FIXHEADER       : false,
    FIXSIDEBAR      : false,
    AUTOHIDEHEADER  : false,
    COLORWEAK       : false,
    MULTITAB        : true,
    PRODUCTION      : process.env.NODE_ENV === 'production',
    LSOPTIONS       :{
                          namespace : 'pro__',   // key prefix
                          name      : 'ls',      // name variable Vue.[ls] or this.[$ls],
                          storage   : 'local'    // storage name session, local, memory
                     }
}
