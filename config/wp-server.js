const _ = require( 'lodash' ),
      path = require( 'path' ),
      webpack = require( 'webpack' ),
      wpMerge = require( 'webpack-merge' ),
      baseObj = require( './wp-base' ),
      VueSSRServerPlugin = require( 'vue-server-renderer/server-plugin' );




module.exports = wpMerge( baseObj, {
    target: 'node',
    output: {
        filename: 'server-bundle.js',
        libraryTarget: 'commonjs2'
    },
    plugins: [
        new webpack.DefinePlugin( {
            'process.env.VUE_ENV': '"server"'
        }),
        new VueSSRServerPlugin()
    ]
});
