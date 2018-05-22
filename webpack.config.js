const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CleanWebpackPlugin = require('clean-webpack-plugin')
const webpack = require('webpack')
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const VueLoaderPlugin = require('vue-loader/lib/plugin')

module.exports = {
    mode: 'development',
    devtool: 'inline-source-map',

    entry: {
        polyfills: './deploy/polyfills.js',
        main: './src/main.js'
    },
    devServer: {
        contentBase: './dist',
        host:'localhost',
        port:8090,
        hot: true,
        open:true
    },
    module: {
        rules: [
            {  
                test: /\.js$/,  
                exclude: /(node_modules|bower_components)/,  
                use: {  
                    loader: 'babel-loader',  
                    options:{ cacheDirectory:true }     //缓存
                }  
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            },
            {
                test: /\.(png|jpg|gif)$/, 
                use: [{ loader: 'url-loader',options: { limit: 8192 } }] 
            },
            {
                test: /\.s?[ac]ss$/,
                use: [
                    process.env.NODE_ENV !== 'production' ? 'style-loader' : MiniCssExtractPlugin.loader,
                    "css-loader",
                    "sass-loader"
                ]
            },
            {
                test: /\.vue$/,
                use: 'vue-loader'
            }
        ]      
    },
    plugins: [
        new CleanWebpackPlugin(['dist']),
        new HtmlWebpackPlugin({
            minify:{
                collapseWhitespace:true //折叠空白区域 也就是压缩代码
            },
            hash:true,
            title: 'Custom template',
            template: 'index.html'
        }),
        new webpack.NamedModulesPlugin(),
        new webpack.HotModuleReplacementPlugin(),
        new MiniCssExtractPlugin({
            filename: "[name].css",
            chunkFilename: "[id].css"
        }),
        new VueLoaderPlugin()
    ],

    //output为输出 path代表路径 filename代表文件名称
    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, 'dist')
    }
}