const compiler = require( 'vue-template-compiler' ),
      util = require( 'util' ),
      fs = require( 'fs' ),
      readFile = util.promisify( fs.readFile );


const options = {};

readFile( './test-1.vue' ).then( function( f ) {
    const file = f.toString();
    const output = compiler.parseComponent( file, options );
    
    console.info( JSON.stringify( output, null, 2 ) );
}).catch( function( err ) {
    console.info( "ERROR: ", err );
});




