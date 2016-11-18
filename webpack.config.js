module.exports = {
    entry: {
        "bundle": "./index.js"
    },
    output: {
        filename: "build/bundle.js"
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