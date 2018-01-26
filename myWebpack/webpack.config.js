const path = require("path");
const devServer = require("webpack-dev-server");
const HtmlPlugin = require("html-webpack-plugin");
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const UglifyJsPlugin = require("uglifyjs-webpack-plugin");
module.exports = {
    //入口文件的配置项
    entry:{
        index:"./src/index.js"
    },
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
                use:["style-loader","css-loader"]
                // use:ExtractTextPlugin.extract({
                //     fallback:"style-loader",
                //     use:"css-loader"
                // })
            },{
                test:/\.(png|jpg|gif)/,
                use:[{
                    loader:"url-loader",
                    options:{
                        limit:500,
                        outputPath:"images/"
                    }
                }]
            },{
                test:/\.(htm|html)$/i,
                loader:"html-withimg-loader",
            },{
                test:/\.scss/,
                use:[
                    {
                        loader:"style-loader"
                    },
                    {
                        loader:"css-loader"
                    },
                    {
                        loader:"sass-loader"
                    }
                ]
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
            chunks:["index"]
        }),
        new ExtractTextPlugin("css/index.css"),
        new UglifyJsPlugin()
    ],
    devServer:{
        contentBase:path.resolve(__dirname,"dist"),
        host:"localhost",
        port:"8081"
    }
}