var webpack = require('webpack');
var HTMLWebpackPlugin = require('html-webpack-plugin');
var HTMLWebpackPluginConfig = new HTMLWebpackPlugin({
            filename: __dirname + "./app/index.html",
            template: "index.html",
            inject: "body",
        });

module.exports = {
     entry: __dirname + '/app/index.js', //入口文件
     output:{
          //node.js中__dirname变量获取当前模块文件所在目录的完整绝对路径 
          path:__dirname + '/build', //输出位置
          filename:'transformed.js' //输入文件
     },
     module:{
          loaders:[
               {
                   test:/\.js$/,//支持正则
                   exclude: /node_modules/,
                   loader:['babel-loader']
               }
          ]
     },
//其他解决方案配置
    resolve: {
        extensions: ['.js', '.json', '.css', '.scss']//添加在此的后缀所对应的文件可以省略后缀
    },
     //插件
     plugins:[HTMLWebpackPluginConfig]
}