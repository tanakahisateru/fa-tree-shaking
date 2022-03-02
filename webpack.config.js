const path = require('path');

module.exports = (env, argv) => {
    return {
        mode: argv.mode,
        entry: {
            'index': './src/index.js',
        },
        output: {
            path: path.resolve(__dirname, 'public/dist'),
            publicPath: 'auto',
            filename: '[name].js',
            clean: true,
        },
        devtool: argv.mode === 'production' ? 'source-map' : 'eval',
        module: {
            rules: [
                {
                    test: /\.jsx?$/i,
                    exclude: /node_modules/,
                    use: [
                        'babel-loader',
                    ],
                },
            ],
        },
        resolve: {
            extensions: ["*", ".js", ".jsx", ".json"],
        },
        devServer: {
            static: "public",
            // open: true,
        },
    }
}
