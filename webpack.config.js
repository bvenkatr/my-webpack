var path = require('path');

module.exports = {
    // entry: "./index.js" =>> This will generate main.js as the final bundle
    //                OR
    // entry: {
    //     xyz :'./index.js'// This will generate xyz.js as the final bundle
    // },
    //                OR
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
