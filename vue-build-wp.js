const _ = require( 'lodash' ),
      webpack = require( 'webpack' );
      


const wpServerConfig = require( './config/wp-server' );
const wpClientConfig = require( './config/wp-client' );



webpack( wpServerConfig, function() {
    console.info( 'Server DONE...' );
});



webpack( wpClientConfig, function() {
    console.info( 'Client DONE...' );
});




