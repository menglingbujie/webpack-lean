module.exports = {
  mode:"development",
  entry:"./src/js/index.js",
  output:{
    filename:"./index.js",
  },
  resolve:{
    extensions:['.js','.jsx','.css']
  },
  module:{
    rules:[
      {
        test:/\.js|jsx$/,
        loader:['babel-loader']
      },
      {
        test: /\.css$/,
        loader: "style!css"
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
  }
}