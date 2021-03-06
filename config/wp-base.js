const _ = require( 'lodash' ),
      path = require( 'path' ),
      webpack = require( 'webpack' ),
      { VueLoaderPlugin } = require( 'vue-loader' ),
      MiniCssExtractPlugin = require( 'mini-css-extract-plugin' ),
      FriendlyErrorsPlugin = require( 'friendly-errors-webpack-plugin' ),
      CleanWebpackPlugin = require( 'clean-webpack-plugin' );


const isProd = false,
      distOutput = './dist',
      distFullPath = path.resolve( distOutput ),
      mode = isProd ? 'production' : 'development';


const baseConfig = {
    
    mode,
    
    devtool: isProd ? false : '#cheap-module-source-map',
        
    output: {
        path: distFullPath,
        publicPath: '/'
    },
    
    
    // optimization: {
    //     splitChunks: {
    //         chunks: 'all'
    //     }
    // },
    
    
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
        new CleanWebpackPlugin( [ './dist/*.*' ], { watch: true, beforeEmit: true,  verbose: true, dry: false } ),
        
        new FriendlyErrorsPlugin(),
            
        new VueLoaderPlugin(),
        new MiniCssExtractPlugin( {
            filename: '[name].css'
        })
        
        // new webpack.BannerPlugin( { banner: `mode=${mode}` } )
    ]
};

// DEBUG:
// console.info( 'CONFIG: \n' );
// console.info( JSON.stringify( baseConfig, null, 2 ) );


module.exports = baseConfig;
