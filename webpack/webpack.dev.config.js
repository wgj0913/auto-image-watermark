const path = require("path");
const webpack = require("webpack");
const devServer = require("./devserver");
const env = process.env.NODE_ENV || "none";
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
    entry: path.resolve("./src/index.ts"),
    devServer: devServer,
    devtool: "source-map",
    mode: "development",
    watch: true,
    module: {
        rules: [
            {
                test: /\.ts?$/,
                loaders: ["babel-loader", "ts-loader"]
            }
        ]
    },
    resolve: {
        extensions: [".ts", ".js"]
    },
    plugins: [
        new webpack.DefinePlugin({
            "process.env": {
                NODE_ENV: JSON.stringify(env)
            }
        }),
        new HtmlWebpackPlugin({
            template: "index.html"
        })
    ],
    output: {
        path: path.resolve("./dist"),
        filename: "index.dev.js",
        libraryTarget: "umd",
        sourceMapFilename: "index.dev.js.map",
        library: "H5SDK"
    }
};
