const _ = require( 'lodash' ),
      path = require( 'path' ),
      Pronto = require( 'vue-pronto' );
      
      
      
      
      
      

const prontoOpts = {
    rootPath: path.resolve( './' )
};



const renderer = new Pronto( prontoOpts );



const data = {

};


const vueOptions = {

};

const file = './src/index.vue';





console.info( renderer.BuildComponent );






/*
renderer.RenderToString( file, data, vueOptions )
    .then( function() {
    
        console.info( "DONE!!" );
        console.info( arguments );
    }).
    catch( function( err ) {
        console.info( "ERROR: " );
        console.info( err );
    });
*/
