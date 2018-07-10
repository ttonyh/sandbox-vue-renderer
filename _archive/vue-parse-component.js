const cmpCompiler = require( '@vue/component-compiler' );
const compiler = require( 'vue-template-compiler' ),
      util = require( 'util' ),
      fs = require( 'fs' ),
      readFile = util.promisify( fs.readFile );


const optsCompiler = {
    
      },
      optsCmp = {
          template: {
              isProduction: true,
              optimizeSSR: true
          }
      };

readFile( './test-1.vue' ).then( function( f ) {
    const file = f.toString();
    const compiledObj = compiler.parseComponent( file, optsCompiler );
    

    console.info( 'compiledObj: \n' );
    console.info( JSON.stringify( compiledObj, null, 2 ) );

    console.info( '\n\n\n' );    
    
    const component = cmpCompiler.createCompiler( compiledObj, optsCmp );

    console.info( "COMPILED OBJ: \n" );
    console.info( JSON.stringify( component, null, 2 ) );
    

}).catch( function( err ) {
    console.info( "ERROR: ", err );
});






