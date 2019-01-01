const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = (env) => {
    return {
        mode: env,
        devtool: 'source-map',
        plugins: [
            new HtmlWebpackPlugin({
                template: './index.html'
            }),
            new MiniCssExtractPlugin({
                filename: 'css/app.css'
            }),
            new webpack.DefinePlugin({
                'process.env.NODE_ENV': JSON.stringify(env)
            })
        ],
        module: {
            rules: [
                {
                    test: /\.(scss|css)$/,
                    use: [
                        {
                            loader: MiniCssExtractPlugin.loader
                        },
                        {
                            loader: "css-loader",
                            options: {
                                sourceMap: true
                            }
                        },
                        {
                            loader: "postcss-loader",
                            options: {
                                sourceMap: true,
                                plugins: () => [require('autoprefixer')]
                            }
                        },
                        {
                            loader: "sass-loader",
                            options: {
                                sourceMap: true
                            }
                        },
                    ]
                }
            ]
        }       
    }
};
