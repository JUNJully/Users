const path = require('path');
const HtmlWebPackPlugin = require('html-webpack-plugin');

module.exports = {   
    entry: ["babel-polyfill","./src/index.js"],
    output: {
        path: path.resolve(__dirname, 'build'),
        filename: 'bundle.js',
        publicPath: '/'
    },
    resolve: {
        modules: [path.join(__dirname, 'src'), 'node_modules'],
        alias: {
            react: path.join(__dirname, 'node_modules', 'react'),
      }
    },
    module: {
        rules: [
            {
                test: /\.(js$|jsx)/,
                exclude: /node_modules/,
                use: 
                    {
                    loader: 'babel-loader', 
                    options:{
                        presets:["@babel/preset-env", "@babel/preset-react"]    // используемые плагины
                    }
                },
            },
            {
                test: /\.css$/,
                use: [
                    {
                        loader: 'style-loader',
                    },
                    {
                        loader: 'css-loader',
                    },
                ],
            },
            {
                test: /\.js$/,
                enforce: "pre",
                use: ["source-map-loader"],
            },
        ],
    },
    plugins: [
        new HtmlWebPackPlugin({
            template: './src/index.html',
        }),
        
    ],
    devServer: {
           historyApiFallback: true
          },
    performance: {
            hints: false,
            maxEntrypointSize: 512000,
            maxAssetSize: 512000
        }      
}
