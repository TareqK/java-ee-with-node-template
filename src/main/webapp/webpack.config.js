var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var CopyWebpackPlugin = require('copy-webpack-plugin');
module.exports = (env) => {
    return{
        mode: env.production ? 'production' : 'development',
        entry: './src/app.js',
        output: {
            filename: 'app.js'
        },
        plugins: [new HtmlWebpackPlugin({
                title: 'Hello World'
            }),
            new CopyWebpackPlugin([
                {from: './src/WEB-INF', to: 'WEB-INF'},
                {from: './src/META-INF', to: 'META-INF'}
            ])],
        optimization: {
            minimize: env.production
        },
        watchOptions: {
            aggregateTimeout: 50,
            poll: 100
        },
        module: {
            rules: [
                {
                    test: /\.css$/,
                    use: ['style-loader', 'css-loader']
                }
            ]
        }
    };
};

