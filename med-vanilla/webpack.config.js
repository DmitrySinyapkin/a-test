const path = require('path')

module.exports = {
    entry: [
        './src/js/index.js'
    ],
    output: {
        filename: './js/bundle.js'
    },
    devtool: 'source-map',
    module: {
        rules: [
            {
                test: /\.js$/,
                include: path.resolve(__dirname, 'src/js'),
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: 'env'
                    }
                }
            },
            {
                test: /\.(sass|scss)$/,
                include: path.resolve(__dirname, 'src/scss'),
                use: [
                    {
                        loader: 'css-loader',
                        options: {
                            sourceMap: true,
                            minimize: true,
                            url: false
                        }
                    },
                    {
                        loader: 'sass-loader',
                        options: {
                            sourceMap: true 
                        }
                    }
                ]
            }
        ]
    },
    plugins: [

    ]
}
