var path = require('path');

config = {
    entry: {
        bundle: ["./index.js"]
    },
    resolve: {
        alias: {
            "@project1": path.join(__dirname, "Project1")
        },
        extensions: [".js"]
    },
    output: {
        filename: "[name].js",
        path: path.resolve(__dirname, "build"),
        publicPath: "build",
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                use: [{
                    loader: 'babel-loader',
                    options: {
                        presets: [],
                        plugins: []
                    }
                }]
            }
        ]
    }
};

module.exports = config;
