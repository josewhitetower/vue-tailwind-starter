const path = require("path")
const HtmlWepackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const VueLoaderPlugin = require('vue-loader/lib/plugin')

module.exports = function (env) {
    return {
        entry: './src/index.js',
        output: {
            path: path.resolve(__dirname, 'build'),
            filename: 'bundle.js',
        },
        module: {
            rules: [
                {
                    test:/\.(js|jsx)$/,
                    exclude:/(node_modules)/,
                    use: {
                        loader: 'babel-loader',
                    },
                },
                {
                    test: /\.vue$/,
                    loader: 'vue-loader'
                },
                {
                    test:/\.css$/,
                    use: [
                        MiniCssExtractPlugin.loader,
                        "css-loader", "postcss-loader",
                    ],
                },
            ]
        },
        plugins: [
            new HtmlWepackPlugin({
                template: './index.html',
                filename: 'index.html'
            }),
            new MiniCssExtractPlugin({
                filename: 'style.css',
                chunkFilename: 'style.css'
            }),
            new VueLoaderPlugin()
        ],
        devServer: {
            contentBase: path.join(__dirname, 'build'),
            port: 8082,
            open: 'Google Chrome', // 'google-chrome' on Linux and 'chrome' on Windows
        }
    }
}