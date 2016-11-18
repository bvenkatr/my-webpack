//var LiveReloadPlugin = require("webpack-livereload-plugin");

module.exports = [{
    cache: true,
    entry: {
        "bundle": "./index.js",
    },
    output: {
        path: "dist",
        filename: "[name].js",
        libraryTarget: "umd",
        library: "[name]"
    },
    plugins: [
        // new LiveReloadPlugin({
        //     port: 36000
        // })
    ],
    externals: {},
    module: {
        loaders: [
            {
                test: /.jsx?$/,
                exclude: /node_modules/,
                loaders: ["babel"]
            }
        ]
    }
}];