// vue.config.js

const CompressionPlugin = require('compression-webpack-plugin');

module.exports = {
    publicPath: '/',
    productionSourceMap: false,
    configureWebpack: {
        plugins: [
            new CompressionPlugin({
                test:/\.js$|\.html$|\.css/,
                threshold:10240,//
                deleteOriginalAssets:false,
            })
        ]
    }
}
