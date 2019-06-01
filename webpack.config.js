const HtmlWebPackPlugin = require("html-webpack-plugin");
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
        // loader:'babel-loader',
        // options:{
        //   presets:['@babel/preset-env','@babel/preset-react']
        // },

        use:{
          loader:"babel-loader",
          options:{
            presets:['@babel/preset-env','@babel/preset-react']
          },
        },
        exclude:/node_modules/
      },
      {
        test: /\.css$/,
        loader: "style-loader!css-loader"
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
    })
  ]
}