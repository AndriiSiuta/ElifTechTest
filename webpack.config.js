'use strict';

const path = require('path');

function resolve(part) {
    return path.join(__dirname, '..', part);
}

module.exports = {
    entry: "./js/main.js",
    output: {
        path: __dirname,
        filename: "bundle.js"
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: "babel-loader",
                options: {
                  babelrc: true,
                },
                include: [resolve('js')]
            }
        ]
    },
    resolve: {
        alias: {
            '@': resolve('js')
        }
    }
};
