var path = require('path');

module.exports = {
    entry: {
        "bundle": ["./index.js"]
    },
    output: {
        path: path.join(__dirname, "build"),
        filename: "[name].js",
        publicPath: "build"
    },
    devServer: {
        inline: true,
        port: 8080,
        headers: { "Access-Control-Allow-Origin": "*" }
    },
    module: {
        loaders: [{
            test: /\.js$/,
            exclude: /node_modules/,
            loader: "babel",
            query: {
                presets: ["es2015"]
            }
        }]
    }
};
