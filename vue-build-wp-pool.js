const _ = require( 'lodash' ),
      path = require( 'path' ),
      // webpack = require( 'webpack' ),
      // Worker = require( 'jest-worker' ).default;
      // genWpConfig = require( './config/wp-gen-config' );
      threads = require( 'threads' ),
      Pool = threads.Pool;
      pool = new Pool();



const rootPath = '/private/var/folders/bp/ky0vbhws0vqf6dysdn1nqk240000gn/T/funnel-generator-3074-5EK4fZ/'
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


const wpGenFile = path.resolve( __dirname, './config/wp-gen-config.js' );




pool
    .on( 'finished', function() {
        console.log( 'Everything done, shutting down the thread pool.' );
        pool.killAll();
    });

configs.forEach( ( cfg ) => {
    _.merge( cfg, baseParams );
    
    pool
        .run( wpGenFile )
        .send( cfg )
        .on( 'done', function( response ) {
            console.log( "DONE! " );
            // console.info( this.__proto__ );
            console.info( '\n\n\n' );
            console.info( 'THIS: ' );
            console.info( this.__proto__ );
            this.destroy();
        })
        .on( 'message', function( response ) {
            console.log( "MESSAGE: ", response );
            this.kill();
        })
        .on( 'error', function( error ) {
            console.error( 'Worker errored:', error );
        })
        .on( 'exit', function() {
            console.log( 'Worker has been terminated.' );
        });
        // .on( 'message', function( response ) {
        //     console.log( "MESSAGE: ", response );
        //     thread.kill();
        // })
        // .on( 'error', function( error ) {
        //     console.error( 'Worker errored:', error );
        // })
        // .on( 'exit', function() {
        //     console.log( 'Worker has been terminated.' );
        // });
});


// webpack( genWpConfig( configs[ 0 ] ), function() {
//     console.info( 'WP DONE...' );
// });





