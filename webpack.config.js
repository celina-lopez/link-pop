var path = require('path');

module.exports = {
    mode: 'production',
    entry: './src/LinkPop.js',
    output: {
        path: path.resolve('lib'),
        filename: 'LinkPop.js',
        libraryTarget: 'commonjs2'
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                exclude: /(node_modules)/,
                use: 'babel-loader'
            }
        ]
    }
}
