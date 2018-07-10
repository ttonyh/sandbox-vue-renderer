const Vue = require( 'vue' );
const compiler = require( 'vue-template-compiler' );



const options = {};



const template = `<div><p v-show="false">This is hidden</p><p>This is a VUE Template</p></div>`;


const compiled = compiler.ssrCompile( template, options );



console.info( JSON.stringify( compiled, null, 2 ) );