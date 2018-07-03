const _ = require( 'lodash' ),
      path = require( 'path' ),
      { VueLoaderPlugin } = require( 'vue-loader' ),
      MiniCssExtractPlugin = require( 'mini-css-extract-plugin' ),
      UglifyJsPlugin = require( 'uglifyjs-webpack-plugin' ),
      CompressionPlugin = require( 'compression-webpack-plugin' );


const isProd = true;
const doCompress = true;


const baseConfig = {
    
    mode: isProd ? 'production' : 'development',
    
    devtool: isProd ? false : '#cheap-module-source-map',
    
    output: {
        path: path.resolve( './dist' ),
        publicPath: '/'
    },
    
    resolve: {
        mainFiles: [ 'index', 'index.src' ],
        extensions: [ '.src.js', '.js', '.vue', '.json', '.scss', '.svg' ],
        alias: {

        }
    },

    entry: [
        path.resolve( './src' )
    ],

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
                    presets: [
                        'es2015',
                        'stage-2'
                    ],
                    plugins: [
                        'transform-object-rest-spread',
                        'syntax-dynamic-import'
                    ],
                    ignore: [
                        'node_modules'
                    ]
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
        // new CleanWebpackPlugin( [
        //     pathOutput
        // ]),
        new VueLoaderPlugin(),
        new MiniCssExtractPlugin( {
            filename: '[name].css'
        })
    ]
};


if ( doCompress ) {

    baseConfig.optimization = {
        minimizer: [
            new UglifyJsPlugin( {
                sourceMap: true,
                uglifyOptions: {
                    compress: {
                        inline: false
                    }
                }
            })
        ]
    };
    
    baseConfig.plugins.push( new CompressionPlugin() );
}



console.info( 'CONFIG: \n' );
console.info( JSON.stringify( baseConfig, null, 2 ) );


module.exports = baseConfig;
