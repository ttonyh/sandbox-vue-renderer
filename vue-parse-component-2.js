const cmpCompiler = require( '@vue/component-compiler' );
      util = require( 'util' ),
      fs = require( 'fs' ),
      readFile = util.promisify( fs.readFile );


const optsCmp = {
          template: {
              isProduction: true,
              optimizeSSR: true
          }
      };




const compiler = cmpCompiler.createDefaultCompiler();


console.info( compiler.compileToDescriptor( './test-1.vue' ) );
// console.info( compiler.compileToDescriptor( './test-1.vue' ) );



/*
readFile( './test-1.vue' ).then( function( f ) {
    const file = f.toString();

    const compiler = cmpCompiler.createDefaultCompiler();
    
    console.info( compiler );
    
    // const component = cmpCompiler.createCompiler( file, optsCmp );
    //
    // console.info( "COMPILED OBJ: \n" );
    // console.info( JSON.stringify( component, null, 2 ) );
    

}).catch( function( err ) {
    console.info( "ERROR: ", err );
});
*/





