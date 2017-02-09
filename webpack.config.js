var path = require('path');
var LiveReloadPlugin = require('webpack-livereload-plugin');

config = {
    entry: {
        bundle: ["./index.js"]
    },
    output: {
        filename: "[name].js",
        path: path.resolve(__dirname, "build")
    },
    module: {
        rules: [
            {test: /\.(js|jsx)$/, use: 'babel-loader'}
        ]
    },
    plugins: [
        new LiveReloadPlugin({})
    ]
};

module.exports = config;
