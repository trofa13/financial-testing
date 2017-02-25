var ExtractTextPlugin = require('extract-text-webpack-plugin');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var path = require('path');

module.exports = {
    context: __dirname + '/src',
    entry: {
        main: './js/main.js'
    },
    output: {
        path: path.resolve(__dirname, 'dev'),
        filename: "js/[name].js"
    },
    devtool: "eval-source-map",
    module:{
        loaders: [
            {
                test: /\.js$/,
                exclude: /(node_modules|bower_components)/,
                loader: 'babel-loader'
            },
            {
                test: /\.css$/,
                loader: ExtractTextPlugin.extract({ 
                    fallback: 'style-loader', 
                    use: 'css-loader', 
                    publicPath: '../' 
                })
            },
            {
                test: /\.(jpe?g|png|gif|svg)$/,
                loader: "file-loader?name=[path][name].[ext]"
            },
            {
                test: /\.(eot|svg|ttf|woff|woff2)$/,
                loader: 'file-loader?name=fonts/[name].[ext]'
            },
            {
                test: /\.html$/,
                loader: "html-loader"
            }
        ]
    },
    plugins: [
        new ExtractTextPlugin("css/[name].css"),
        new HtmlWebpackPlugin({
            template: "index.html",
            title: 'Poop'
        }),
    ]
}