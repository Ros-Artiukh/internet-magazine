const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const devMode = process.env.NODE_ENV !== 'production';

module.exports = {
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, '/dist'),
        filename: 'index_bundle.js',
        publicPath: '/'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader'
                }
            },
            
            {
                test: /\.scss$/,
                use: [
                    devMode ? 'style-loader' : MiniCssExtractPlugin.loader,
                    {
                      loader: 'css-loader'
                    },
                    {
                      loader: 'sass-loader'
                    }
                  ]
              },
            {
                test: /\.css$/,
                use: [
                    devMode ? 'style-loader' : MiniCssExtractPlugin.loader,
                    MiniCssExtractPlugin.loader,
                    "css-loader"
                ]
              }
        ]
    },
    devServer: {
      historyApiFallback: true,
    },
    
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html'    
        }),
        new MiniCssExtractPlugin({
            filename: "[name].css",
            chunkFilename: "[id].css"
        })
    ]
}