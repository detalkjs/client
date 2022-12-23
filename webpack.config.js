const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
    entry: './index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'detalk.js',
    },
    module: {
        rules: [{
            test: /\.(css)$/i, 
            use: [
                "style-loader",
                "css-loader"
            ]
        }]
    }
};