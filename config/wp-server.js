const _ = require( 'lodash' ),
      path = require( 'path' ),
      webpack = require( 'webpack' ),
      wpMerge = require( 'webpack-merge' ),
      baseObj = require( './wp-base' ),
      nodeExternals = require( 'webpack-node-externals' ),
      VueSSRServerPlugin = require( 'vue-server-renderer/server-plugin' );


module.exports = wpMerge( baseObj, {
    target: 'node',
    entry: path.resolve( './src' ),
    output: {
        filename: 'server-bundle.js',
        libraryTarget: 'commonjs2'
    },
    externals: nodeExternals( {
        whitelist: /\.css$/
    }),
    plugins: [
        new webpack.DefinePlugin( {
            'process.env.VUE_ENV': '"server"'
        }),
        new VueSSRServerPlugin()
    ]
});
