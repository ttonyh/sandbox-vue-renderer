const _ = require( 'lodash' ),
      webpack = require( 'webpack' );
      


const wpConfig = require( './config/wp-main' );

// console.info( wpConfig );

webpack( wpConfig, function() {
    
    
    console.info( arguments );
});




