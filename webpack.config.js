var path = require('path');
var ExtractTextPlugin = require("extract-text-webpack-plugin");
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: {
    'app': ['./src/index.js'],
    'main': ['./sass/main.scss'],
    'plugins': ['./src/plugins.js'] 
  },
  output: {
    filename: 'js/[name].js',
    path: path.resolve(__dirname, 'dist'),
    publicPath: "/"
  },
  devtool: "sourcemap",
  resolve: {
    alias: {
      modernizr$: path.resolve(__dirname, ".modernizrrc")
    },
    modules: [
      "src",
      "sass",
      "resources",
      "node_modules"
    ],
    extensions: [".json", ".js"]
  },
  module: {
    rules: [
      {
        test: /\.modernizrrc.js$/,
        use: [ 'modernizr-loader' ]
      },
      {
        test: /\.modernizrrc(\.json)?$/,
        use: [ 'modernizr-loader', 'json-loader' ]
      },
      { 
        test: /\.jsx?$/, 
        loader: 'babel-loader', 
        exclude: /node_modules/,
      },
      { 
        test: /\.pug$/, 
		loaders: [ 'html-loader', 'pug-html-loader' ]
      },
	  {
        test: /\.s(c|a)ss$/,
        use: ExtractTextPlugin.extract({
          fallback: "style-loader",
          use: [ "css-loader", "sass-loader" ]
        })
      },
	  {
        test: /\.css$/,
        use: ExtractTextPlugin.extract({
          fallback: "style-loader",
          use: "css-loader"
        })
      },
	  {
        test: /\.(ico|gif|png|jpg|jpeg|svg|webp)$/,
        loaders: ["url-loader?context=public&name=/media/[name].[hash].[ext]"],
        exclude: /node_modules/
      },
      {
        test: /\.woff(\?v=\d+\.\d+\.\d+)?$/,
        loader: "url-loader?limit=10000&mimetype=application/font-woff&name=fonts/[hash].[ext]"
      },
      {
        test: /\.woff2(\?v=\d+\.\d+\.\d+)?$/,
        loader: "url-loader?limit=10000&mimetype=application/font-woff&name=fonts/[hash].[ext]"
      },
      {
        test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,
        loader: "url-loader?limit=10000&mimetype=application/octet-stream&name=fonts/[hash].[ext]"
      },
      {
        test: /\.eot(\?v=\d+\.\d+\.\d+)?$/,
        loader: "file-loader&name=fonts/[hash].[ext]"
      },
      {
        test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
        loader: "url-loader?limit=10000&mimetype=image/svg+xml&name=fonts/[hash].[ext]"
      },
    ]
  },
  devServer: {
    contentBase: path.resolve(__dirname, "dist"),
    historyApiFallback: true,
    headers: {
      'Access-Control-Allow-Origin': '*'
    }
  },
  plugins: [
    new HtmlWebpackPlugin({
		title: 'Bildr.io',
		test: "Hello World",
		options: {
			pretty: true,
			test: "Hello World",
			self: true
          // options to pass to the compiler same as: https://pugjs.org/api/reference.html
        },
		hash: true,
		template: './views/index.pug',
		filename: 'index.html',
	}),
	new ExtractTextPlugin('css/[name].css')
  ]
};
