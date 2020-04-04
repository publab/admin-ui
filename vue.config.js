// vue.config.js

const CompressionPlugin = require('compression-webpack-plugin');

module.exports = {
    publicPath: '/admin',
    lintOnSave: false,
    productionSourceMap: false,
    configureWebpack: {
        plugins: [
            new CompressionPlugin({
                test:/\.js$|\.html$|\.css/,
                threshold:10240,//
                deleteOriginalAssets:false,
            })
        ]
    },
    css: {
        loaderOptions: {
            less: {
                modifyVars: {
                    // less vars，customize ant design theme

                    // 'primary-color': '#F5222D',
                    // 'link-color': '#F5222D',
                    // 'border-radius-base': '2px'
                },
                // DO NOT REMOVE THIS LINE
                javascriptEnabled: true
            }
        }
    },
}
