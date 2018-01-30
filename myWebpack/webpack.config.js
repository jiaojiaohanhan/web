const path = require("path");
const devServer = require("webpack-dev-server");
const HtmlPlugin = require("html-webpack-plugin");
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const UglifyJsPlugin = require("uglifyjs-webpack-plugin");
const glob = require("glob");
const PurifyCSSPlugin = require("purifycss-webpack");
const webpack = require("webpack");
const entry = require("./webpack_config/entry_webpack.js");
const CopyWebpackPlugin = require("copy-webpack-plugin");
module.exports = {
    //入口文件的配置项
    entry:entry,
    //出口文件的配置项
    output:{
        path:path.resolve(__dirname,"dist"),
        filename:"[name].js",
        publicPath:"http://localhost:8081/"
    },
    //模块
    module:{
        rules:[
            {
                test:/\.css$/,
                // use:["style-loader","css-loader"]
                use:ExtractTextPlugin.extract({
                    fallback:"style-loader",
                    use:[{
                        loader:"css-loader",
                        options:{importLoaders:1}
                    },"postcss-loader"]
                })
            },{
                test:/\.(png|jpg|jpeg|gif)/,
                use:[{
                    loader:"url-loader",
                    options:{
                        limit:500,
                        outputPath:"./images/"
                    }
                }]
            },{
                test:/\.(htm|html)$/i,
                loader:"html-withimg-loader",
            },{
                test:/\.scss/,
                // use:[
                //     {
                //         loader:"style-loader"
                //     },
                //     {
                //         loader:"css-loader"
                //     },
                //     {
                //         loader:"sass-loader"
                //     }
                // ]
                use: ExtractTextPlugin.extract({
                    use:[{
                        loader:"css-loader"
                    },{
                        loader:"sass-loader"
                    }],
                    fallback:"style-loader"
                })
            },{
                test:/\.(jsx|js)$/,
                use:{
                    loader:"babel-loader",
                    options:{
                        presets:[
                            "env","react"
                        ]
                    }
                },
                exclude:/node_modules/
            }
        ]
    },
    plugins:[
        new HtmlPlugin({
            minify:{
                removeAttributeQuotes:true
            },
            hash:true,
            template:"./src/index.html",
            chunks:["index","index2"]
        }),
        new ExtractTextPlugin("css/index.css"),
        // new UglifyJsPlugin(),
        new PurifyCSSPlugin({
            paths:glob.sync(path.join(__dirname,"src/*.html"))
        }),
        new webpack.BannerPlugin("JH"),
        new webpack.ProvidePlugin({
            $:"jquery"
        }),
        new webpack.optimize.CommonsChunkPlugin({
            //name入口文件中的名字
            name:["jquery","vue","index","index2"],
            //把文件打包到哪里，是一个路径
            filename:"assets/js/[name].js",
            //最小打包的文件模块数，这里直接写2就好
            minChunks:2
        }),
        new CopyWebpackPlugin([{
            from:__dirname+"/src/public/",
            to:"./public"
        }]),
        // new CopyPlugin([{
        //     from:"./src/public/",
        //     to:"./public"
        // }])
    ],
    devServer:{
        contentBase:path.resolve(__dirname,"dist"),
        host:"localhost",
        port:"8081"
    },
    watchOptions:{
        //检测修改的时间，以毫秒为单位
        poll:1000,
        //防止重复保存而发生重复编译错误。这里设置的500是半秒内重复保存，不进行打包操作
        aggregeateTimeout:500,
        //不监听的目录
        ignored:/node_modules/
    }
}