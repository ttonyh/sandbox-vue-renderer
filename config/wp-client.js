const _ = require( 'lodash' ),
      path = require( 'path' ),
      webpack = require( 'webpack' ),
      wpMerge = require( 'webpack-merge' ),
      baseObj = require( './wp-base' ),
      VueSSRClientPlugin = require( 'vue-server-renderer/client-plugin' );
      

module.exports = wpMerge( baseObj, {
    target: 'web',
    entry: {
        funnel: path.resolve( './src' )
    },
    output: {
        // filename: 'client-bundle-[name].js',
        filename: 'client-bundle.js',
        libraryTarget: 'umd'
    },
    
        
    optimization: {
        splitChunks: {
            chunks: 'all'
        }
    },
    
    // externals: {
    //     lodash: '_',
    //     eventEmitter: 'EventEmitter',
    //     axios: 'axios',
    //     dropzone: 'Dropzone',
    //     kindergarten: 'Kindergarten',
    //     vue: 'Vue',
    //     'vue-axios': 'VueAxios',
    //     vuex: 'Vuex',
    //     'vue-router': 'VueRouter',
    //     'vue-i18n': 'VueI18n',
    //     'vee-validate': 'VeeValidate',
    //     vuetify: 'Vuetify',
    //     sortablejs: 'Sortable',
    //     JSData: 'JSData',
    //     JSDataHttp: 'JSDataHttp',
    //     md5: 'md5',
    //     libphonenumber: 'libphonenumber',
    //     plotly: 'Plotly',
    //     fpop: 'FPOP'
    // },
    
    
    
    
    plugins: [
        new webpack.DefinePlugin( {
            'process.env.VUE_ENV': '"client"'
        }),
        new VueSSRClientPlugin()
    ]
});
