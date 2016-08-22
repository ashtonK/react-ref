'use strict';

const webpack = require('webpack');
const merge = require('webpack-merge');
const webpackCommon = require('./webpack-common.config');
const seedConfig = Object.assign({}, require('./seed-config.defaults'), require('../package.json').seedConfig);


module.exports = merge(webpackCommon, {
    devtool: 'none',

    devServer: {
        port: seedConfig.port,
        inline: true,
        hot: true,
        historyApiFallback: true,
        stats: 'minimal'
    },

    plugins: [
        new webpack.optimize.OccurrenceOrderPlugin(),
        new webpack.optimize.AggressiveMergingPlugin(),
        new webpack.optimize.DedupePlugin(),
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                unused: true,
                dead_code: true,
                warnings: false,
                screw_ie8: true
            }
        }),
        new webpack.NoErrorsPlugin(),
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify('production'),
            '__DEV__': false
        }),
        new webpack.optimize.CommonsChunkPlugin({
            minChunks: 2,
            name: 'vendor'
        })
    ]
});
