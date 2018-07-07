const _ = require( 'lodash' ),
      path = require( 'path' ),
      webpack = require( 'webpack' ),
      wpMerge = require( 'webpack-merge' ),
      baseObj = require( './wp-base' ),
      VueSSRClientPlugin = require( 'vue-server-renderer/client-plugin' );
      

module.exports = wpMerge( baseObj, {
    entry: path.resolve( './src' ),
    output: {
        filename: 'client-bundle.js'
    },
    plugins: [
        new webpack.DefinePlugin( {
            'process.env.VUE_ENV': '"client"'
        }),
        new VueSSRClientPlugin()
    ]
});
