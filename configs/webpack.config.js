const path = require('path');
const webpackMerge = require('webpack-merge');

const getModeConfig = (env) => require(`./webpack.config.${env}`)(env);

module.exports = ({mode}) => {
    const env = mode.toLowerCase();
    return webpackMerge(
        {
            entry: [
                './src/index.js',
                require.resolve('./polyfills')
            ],
            output: {
                path: path.resolve(__dirname, 'build'),
                publicPath: "/",
                filename: 'bundle.js'
            },
            module: {
                rules: [
                    {
                        test: /\.(js|jsx)$/,
                        exclude: /node_modules/,
                        use: 'babel-loader'
                    },
                    {
                        exclude: [/\.(js|jsx)$/, /\.html$/, /\.json$/, /\.scss$/, /\.css$/],
                        use: [{
                            loader: 'url-loader',
                            options: {
                                limit: 10000,
                                name: 'assets/app.[ext]',
                                publicPath: '../../'
                            }
                        }]
                    }
                ]
            },
            resolve: {
              alias: {
                "stylesheets-root": '../src/stylesheets'
              },
              extensions: ['.js', '.jsx']
            }
        },
        getModeConfig(env)
    );
};
