var path = require('path');

config = {
    entry: {
        bundle: ["./index.js"]
    },
    output: {
        filename: "[name].js",
        path: path.resolve(__dirname, "build"),
        publicPath: "build",
    },
    module: {
        rules: [
            {test: /\.(js|jsx)$/, use: 'babel-loader'}
        ]
    }
};

module.exports = config;
