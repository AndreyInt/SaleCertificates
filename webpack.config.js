const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const mode = process.env.MODE || 'development';
const isDev = mode === 'development';

const plugins = [
    new MiniCssExtractPlugin({
        filename: '[name].[contenthash:6].css',
        chunkFilename: '[name].[contenthash:6].css'
    }),
    new webpack.ProgressPlugin(),
    new HTMLWebpackPlugin({
        template: path.resolve(__dirname, 'public', 'index.html'),
    }),
];

const jsxLoader = {
    test: /\.(js|jsx)$/,
    exclude: /node_modules/,
    use: ['babel-loader'],
}

const styleLoader = {
    test: /\.css$/i,
    exclude: /node_modules/,
    use: [
        (isDev ? 'style-loader' : MiniCssExtractPlugin.loader),
        {
            loader: 'css-loader',
            options: {
                modules: {
                    auto: true,
                    localIdentName: isDev ? '[path][name]__[local]' : '[hash:base64:8]',
                },
            }
        },
    ],
}

const fileLoader = {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: 'asset/resource'
};

module.exports = {
    mode: mode,
    entry: path.resolve(__dirname, `src`, `index.js`),
    output: {
        filename: '[name].[contenthash:6].js',
        chunkFilename: '[name].[contenthash:6].chunk.js',
        assetModuleFilename: "assets/[contenthash:6][ext]",
        path: path.resolve(__dirname, 'build'),
        clean: true,
    },
    plugins: plugins,
    devServer: {
        port: 3000,
        hot: true,
        open: true,
        historyApiFallback: true,
    },
    module: {
        rules: [
            jsxLoader,
            styleLoader,
            fileLoader,
        ]
    },
    resolve: {
        extensions: ['.jsx', '.js', '.css']
    },
    devtool: 'inline-source-map',
}