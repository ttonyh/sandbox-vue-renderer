const _ = require( 'lodash' ),
      path = require( 'path' ),
      Pronto = require( 'vue-pronto' );
      
      
      
      
      
      

const prontoOpts = {
    rootPath: path.resolve( './' )
};



const renderer = new Pronto( prontoOpts );



const data = {
    bar: true,
    fakehtml: '<p class="red">FAKEHTML</p>'
};

const templateLiteral = `<!DOCTYPE html>\n<html lang="en">\n<head>\n<title>{{title}}</title>\n<style>{{css}}</style>\n</head>\n<body>\n<h1>FOOOOO</h1>\n<!--vue-ssr-outlet-->\n</body>\n</html>`;

const vueOptions = {
    title: "Test",
    // template: templateLiteral
    template: ''
};

const file = './src/index.vue';

renderer.RenderToString( file, data, vueOptions )
    .then( function() {
    
        console.info( "DONE!!" );
        console.info( arguments );
    }).
    catch( function( err ) {
        console.info( "ERROR: " );
        console.info( err );
    });


