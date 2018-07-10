const Vue = require( 'vue' );
const compiler = require( 'vue-template-compiler' );



const options = {};



const template = `<div><p v-show="false">This is hidden</p><p>This is a VUE Template</p></div>`;







console.info( 'compile' );
console.info( compiler.compile( template, options ) );
console.info( '==================================================' );
console.info( 'compileToFunctions' );
console.info( compiler.compileToFunctions( template ) );
console.info( '==================================================' );
console.info( 'ssrCompile' );
console.info( compiler.ssrCompile( template, options ) );
console.info( '==================================================' );
console.info( 'ssrCompileToFunctions' );
console.info( compiler.ssrCompileToFunctions( template, options ) );


