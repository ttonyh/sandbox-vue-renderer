const _ = require( 'lodash' ),
      AWS = require( 'aws-sdk' ),
      s3 = require( 's3' ),
      path = require( 'path' );
      

const funnelId = _.nth( process.argv, 2 );
if ( !funnelId ) {
    throw Error( 'Funnel ID arg is missing...' );
}

console.info( 'FUNNEL ID: ', funnelId );

const credentials = new AWS.SharedIniFileCredentials( { profile: 'fpop' } );
AWS.config.credentials = credentials;


const s3Client = new AWS.S3( { apiVersion: '2006-03-01' } ),
      client = s3.createClient( {
          s3Client: s3Client
      }),
      srcDir = './dist',
      bucket = 'funnel-resources',
      adapterType = 'legacy',
      deployment = 'development',
      rootPath = `${deployment}/${adapterType}`;



function uploadDist() {
    return new Promise( function( resolve, reject ) {  
        const filepath = path.join( rootPath, funnelId ),
              uploader = client.uploadDir( {
                  localDir: srcDir,
                  s3Params: {
                      Bucket: bucket,
                      Prefix: filepath
                  },
                  getS3Params: ( localFile, stat, cb ) => {
                      const params = {
                          Metadata: {
                              funnelId,
                              adapterType,
                              deployment,
                              filepath,
                              filename: stat.s3Path
                          }
                      };
                  
                      cb( null, params );
                  }
              });
                    
        uploader.on( 'fileUploadStart', function( f, k ) {
            console.log( "FILE START.. ", f );
        });

        uploader.on( 'fileUploadEnd', function( f, k ) {
            console.log( "FILE DONE: ", f );
        });

        uploader.on( 'end', resolve );
        uploader.on( 'error', reject );
    });
};


uploadDist()
    .then( () => {
        console.info( 'DONE...' );
    })
    .catch( ( err ) => {
        console.info( 'ERROR: ', err );
    });
