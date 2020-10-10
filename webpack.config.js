const path = require("path")
const HTMLPlugin = require("html-webpack-plugin")

module.exports = {
    entry: "./src/index.ts",
    output: {
        path: path.resolve(__dirname, "/dist"),
        publicPath: "/",
        filename: "bundle.js"
    },
    module: {
        rules: [
            {
                test: /\.ts$/,
                exclude: /node_modules/,
                use: [{loader: "ts-loader"}]
            },
        ]
    },
    plugins: [
        new HTMLPlugin({
            template: "src/index.html",
            minify: {
                collapseWhitespace: true,
                removeComments: true,
                removeRedundantAttributes: true,
                useShortDoctype: true
            }
        })
    ],
    resolve: {
        extensions: [".js",".ts"]
    },
    devServer: {
        port: 8000,
        contentBase: "dist",
        compress: true,
        open: true,
        watchContentBase: true,
        hot:true
    }
}
