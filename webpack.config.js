const HtmlWebPackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const { CleanWebpackPlugin} = require("clean-webpack-plugin");
const webpack = require("webpack");
module.exports = {
  mode:"development",
  entry:{
    // vendor:['react','react-dom'],
    index:"./src/js/index.js",
  },
  output:{
    filename:"./index.js",
  },
  resolve:{
    extensions:['.js','.jsx','.css']
  },
  module:{
    rules:[
      {
        test:/\.html$/,
        use:[
          {
            loader:'html-loader'
          }
        ]
      },
      {
        test:/\.(js|jsx)$/,
        use:{
          loader:"babel-loader",
          options:{
            presets:['@babel/preset-env','@babel/preset-react']
          },
        },
        exclude:/node_modules/
      },
      {
        test: /\.(css|less)$/,
        use:[
          {
            loader: MiniCssExtractPlugin.loader,
            options:{
              minimize:true,
              hmr:process.env.NODE_ENV==="development",
            }
          },
          // 'style-loader',
          'css-loader',
          'less-loader'
        ]
      },
      {
        test:/\.png$/,
        loader:"url-loader?limit=1",
      },
      {
        test:/\.jpg$/,
        loader:"file-loader",
      }
    ]
  },
  plugins:[
    new HtmlWebPackPlugin({
      template:"./src/index.html",
      filename:"./index.html"
    }),
    new MiniCssExtractPlugin({
      filename:'[name].css',
      chunkFilename:"[id].css"
    }),
    new CleanWebpackPlugin(),
    // new webpack.optimize.SplitChunksPlugin({
    //   cacheGroups:{
    //     // common:{
    //     //   chunks:'initial',
    //     //   minSize:0,
    //     //   minChunks:2,
    //     // },
    //     vendor:{
    //       priority:1,
    //       test:/node_modules/,
    //       chunks:'initial',
    //       minSize:0,
    //       minChunks:2,
    //       name:['react','react-dome'],
    //       enforce:true
    //     }
    //   }
    // })
  ]
}