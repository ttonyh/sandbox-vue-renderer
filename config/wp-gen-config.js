const _ = require( 'lodash' ),
      path = require( 'path' ),
      webpack = require( 'webpack' ),
      { VueLoaderPlugin } = require( 'vue-loader' ),
      MiniCssExtractPlugin = require( 'mini-css-extract-plugin' ),
      FriendlyErrorsPlugin = require( 'friendly-errors-webpack-plugin' ),
      wpMerge = require( 'webpack-merge' );


const buildWp = ( config ) => {
          return new Promise( function( resolve, reject ) {
              webpack( config, function( err, stats ) {
                  if ( err ) {
                      return reject( err );
                  }
                  
                  return resolve();
              });
          });
      };



module.exports = function BuildWp( opts = {}, done ) {
    const { mode, type, entryPath, outputPath, doBuild } = opts,
          entryAbsDir = path.resolve( entryPath ) || process.cwd(),
          outputAbsDir = path.resolve( outputPath ) || process.cwd(),
          isProd = mode === 'production';
    
    
    const baseConfig = {
        mode,
        devtool: isProd ? false : '#cheap-module-source-map',
        output: {
            path: outputAbsDir,
            publicPath: '/'
        },
        resolve: {
            mainFiles: [ 'index', 'index.src' ],
            extensions: [ '.src.js', '.js', '.vue', '.json', '.scss', '.svg' ],
            alias: {
                'vue$': 'vue/dist/vue.esm.js',
            }
        },
        module: {
            rules: [
                {
                    test: /\.vue$/,
                    loader: 'vue-loader',
                    exclude: /node_modules/,
                    options: {
                        compilerOptions: {
                            preserveWhitespace: true
                        }
                    }
                },
                {
                    test: /\.js$/,
                    loader: 'babel-loader',
                    exclude: /node_modules/,
                    options: {
                        plugins: [
                            'transform-object-rest-spread',
                            'syntax-dynamic-import'
                        ],
                        ignore: [
                            'node_modules'
                        ],
                        cacheDirectory: true
                    }
                },
                {
                    test: /\.css$/,
                    use: [
                        ( !isProd ) ? 'vue-style-loader' : MiniCssExtractPlugin.loader,
                        {
                            loader: 'css-loader',
                            options: {
                                minimize: isProd,
                                sourceMap: isProd
                            }
                        }
                    ]
                },
                {
                    test: /\.less$/,
                    use: [
                        ( !isProd ) ? 'vue-style-loader' : MiniCssExtractPlugin.loader,
                        {
                            loader: 'css-loader',
                            options: {
                                minimize: isProd,
                                sourceMap: isProd
                            }
                        },
                        {
                            loader: 'postcss-loader',
                            options: {
                                config: {
                                    path: 'index.css'
                                }
                            }
                        },
                        {
                            loader: 'less-loader'
                        }
                    ]
                },
                {
                    test: /\.scss$/,
                    use: [
                        ( !isProd ) ? 'vue-style-loader' : MiniCssExtractPlugin.loader,
                        {
                            loader: 'css-loader',
                            options: {
                                minimize: isProd,
                                sourceMap: isProd
                            }
                        },
                        {
                            loader: 'postcss-loader',
                            options: {
                                config: {
                                    path: 'index.css'
                                }
                            }
                        },
                        {
                            loader: 'sass-loader'
                        }
                    ]
                }
            ]
        },
        performance: {
            maxEntrypointSize: 300000,
            hints: isProd ? 'warning' : false
        },
        plugins: [
            new FriendlyErrorsPlugin(),
            new VueLoaderPlugin(),
            new MiniCssExtractPlugin( {
                filename: '[name].css'
            })        
            // new webpack.BannerPlugin( { banner: `mode=${mode}` } )
        ]
    };
    
    const genConfigClient = function() {
        const VueSSRClientPlugin = require( 'vue-server-renderer/client-plugin' );
        
        return wpMerge( baseConfig, {
            target: 'web',
            entry: {
                funnel: entryAbsDir
            },
            output: {
                // filename: 'client-bundle-[name].js',
                filename: `client-bundle-${mode}.js`,
                library: 'DynamicFunnel',
                libraryTarget: 'umd'
            },
            plugins: [
                new webpack.DefinePlugin( {
                    'process.env.VUE_ENV': '"client"'
                }),
                new VueSSRClientPlugin()
            ]
        });
    };
    
    const genConfigServer = function() {
        const nodeExternals = require( 'webpack-node-externals' ),
              VueSSRServerPlugin = require( 'vue-server-renderer/server-plugin' );
              
        return wpMerge( baseConfig, {
            target: 'node',
            entry: entryAbsDir,
            output: {
                filename: `server-bundle-${mode}.js`,
                library: 'DynamicFunnel',
                libraryTarget: 'commonjs2'
            },
            externals: nodeExternals( {
                whitelist: /\.css$/
            }),
            plugins: [
                new webpack.DefinePlugin( {
                    'process.env.VUE_ENV': '"server"'
                })
                // new VueSSRServerPlugin()
            ]
        });
    };
    
    
    
    const finalConfig = ( type === 'client' ) ? genConfigClient() : genConfigServer();
    
    // DEBUG:
    // console.info( 'CONFIG: \n' );
    // console.info( JSON.stringify( finalConfig, null, 2 ) );
    
    if ( !doBuild ) {
        return finalConfig;        
    } else {
        // if ( done && _.isFunction( done.transfer ) ) {
        //     done.transfer( { done: true } );
        // }
        
        return buildWp( finalConfig );
    }
};

