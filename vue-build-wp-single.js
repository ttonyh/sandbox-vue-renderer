const _ = require( 'lodash' ),
      path = require( 'path' ),
      // webpack = require( 'webpack' ),
      // Worker = require( 'jest-worker' ).default;
      // genWpConfig = require( './config/wp-gen-config' );
      threads = require( 'threads' ),
      spawn = threads.spawn;
      

const rootPath = '/private/var/folders/bp/ky0vbhws0vqf6dysdn1nqk240000gn/T/funnel-generator-3074-A35Z6e/'
      entryPath = path.join( rootPath, './src' ),
      outputPath = path.join( rootPath, './dist' ),
      doBuild = true,
      baseParams = {
          doBuild,
          entryPath,
          outputPath
      };
      

const configs = [
    {
        mode: 'development',
        type: 'client'
    },
    {
        mode: 'development',
        type: 'server'
    },
    {
        mode: 'production',
        type: 'client'
    },
    {
        mode: 'production',
        type: 'server'
    }
];




/*
const workerConfig = {
          exposedMethods: [ 'buildWp' ]
      },
      wpGenFile = require.resolve( './config/wp-gen-config' );


console.info( 'wpGenFile: ', wpGenFile );
// console.info( 'Worker: ', Worker );

configs.forEach( ( cfg ) => {
    const worker = new Worker( wpGenFile, workerConfig );
    
    worker.buildWp( _.merge( cfg, baseParams ) )
        .then( worker.end )
        .catch( worker.end );
});

*/



const wpGenFile = path.resolve( __dirname, './config/wp-gen-config.js' );

// console.info( wpGenFile );
// console.info( __dirname );
// process.exit();

console.info( 'HERE... 1' );
const thread = spawn( wpGenFile );
console.info( 'HERE... 2' );


console.info( "thread: ", thread );

configs.forEach( ( cfg ) => {
    _.merge( cfg, baseParams );
    
    thread
        .send( cfg )
        .on( 'message', function( response ) {
            console.log( "MESSAGE: ", response );
            thread.kill();
        })
        .on( 'error', function( error ) {
            console.error( 'Worker errored:', error );
        })
        .on( 'exit', function() {
            console.log( 'Worker has been terminated.' );
        });
});


// webpack( genWpConfig( configs[ 0 ] ), function() {
//     console.info( 'WP DONE...' );
// });





