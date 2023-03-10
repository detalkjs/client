const path = require('path');
module.exports = {
    mode: 'development',
    entry: './index.js',
    output: {
        path: path.resolve(__dirname, 'dev'),
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