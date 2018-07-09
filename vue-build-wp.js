const _ = require( 'lodash' ),
      webpack = require( 'webpack' );
      


const wpServerConfig = require( './config/wp-server' );

webpack( wpServerConfig, function() {
    console.info( 'Server DONE...' );
});



const wpClientConfig = require( './config/wp-client' );

webpack( wpClientConfig, function() {
    console.info( 'Client DONE...' );
});




