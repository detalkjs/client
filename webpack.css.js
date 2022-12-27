// CSS 单独打包

const path = require('path');
module.exports = {
    entry: './index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'detalk-nocss.js',
    },
    module: {
        rules: [{
            test: /\.(css)$/i, 
            type: 'asset/resource',
            use: ['postcss-loader'],
            generator: {
                filename: 'detalk-[name].css'
            }
        }]
    }
};