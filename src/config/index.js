/**
 * 项目默认配置项
 * PRIMARYCOLOR     - 默认主题色, 如果修改颜色不生效，请清理 localStorage
 * NAVTHEME         - sidebar theme ['dark', 'light'] 两种主题
 * LAYOUT           - 整体布局方式 ['sidemenu', 'topmenu'] 两种布局
 * FIXHEADER        - 固定 Header : boolean
 * FIXSIDEBAR       - 固定左侧菜单栏 ： boolean
 * AUTOHIDEHEADER   - 向下滚动时，隐藏 Header : boolean
 * COLORWEAK        - 色盲模式
 * LSOPTIONS: {}    - Vue-ls 插件配置项 (localStorage/sessionStorage)
 */

export default {
    PRIMARYCOLOR    : '#52C41A',
    NAVTHEME        : 'light',
    LAYOUT          : 'sidemenu',
    FIXHEADER       : false,
    FIXSIDEBAR      : false,
    AUTOHIDEHEADER  : false,
    COLORWEAK       : false,
    PRODUCTION      : process.env.NODE_ENV === 'production',
    LSOPTIONS       :{
                          namespace : 'pro__',   // key prefix
                          name      : 'ls',      // name variable Vue.[ls] or this.[$ls],
                          storage   : 'local'    // storage name session, local, memory
                     }
}
