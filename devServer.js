/*eslint no-console: 0*/
const webpack = require('webpack');
const WebpackDevServer = require('webpack-dev-server');
const config = require('./webpack.config.dev');
const pkg = require('./package.json');

const port = pkg.host || 3000;
const host = pkg.port || 'localhost';

new WebpackDevServer(webpack(config), {
    publicPath: config.output.publicPath,
    hot: true,
    historyApiFallback: true,
    stats: {
        colors: true,
        chunks: false,
        'errors-only': true
    }
}).listen(port, host, function (err) {
    if (err) {
        console.log(err);
    }

    console.log(`Listening at http://${host}:${port}/`);
});