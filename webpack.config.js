const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ErrorOverlayPlugin = require('error-overlay-webpack-plugin');

module.exports = {
	devtool: "devtool: 'source-map'",
	entry: ["babel-polyfill", "./src/index.js"],
	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: 'bundle.js',
		publicPath: '/',
		chunkFilename: '[name].chunk.js',
	},

	module: {
		rules: [

			{
				test: /\.(js|jsx|mjs)$/,
				exclude: /node_modules/,
                include: path.resolve(__dirname, './src'),
				use: {
					loader: "babel-loader",
					options: {
						presets: ['@babel/react', '@babel/env']
					}
				}
			},

			{
				test: /\.css$/,
				use: [
					'style-loader',
					{
						loader: 'css-loader',
						options: {
							options: {
								modules: true,
								camelCase: 'only',
								importLoaders: 2,
								localIdentName: '[local]'
							},
						}
					}
				]
			},
			{
				test: /\.less$/,
				use: [
					'style-loader',
					{
						loader: 'css-loader',
						options: {
							modules: true,
							camelCase: 'only',
							importLoaders: 2,
							localIdentName: '[local]--[hash:base64:5]'
						},
					},
					'less-loader'
				]
			}
		]
	},
	optimization: {
		splitChunks: {
			name: false,
			cacheGroups: {
				vendors: {
					name: 'vendors',
					test: /[\\/]node_modules[\\/]/,
					chunks: 'all',
					minChunks: 1,
					priority: -10,
				},
				default: {
					minChunks: 2,
					priority: -20,
					reuseExistingChunk: true,
				},
			},
		},
	},
	devServer: {
		historyApiFallback: true,
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: 'public/index.html',
			minify   : {
				html5                          : true,
				collapseWhitespace             : true,
				minifyCSS                      : true,
				minifyJS                       : true,
				minifyURLs                     : false,
				removeAttributeQuotes          : true,
				removeComments                 : true,
				removeEmptyAttributes          : true,
				removeOptionalTags             : true,
				removeRedundantAttributes      : true,
				removeScriptTypeAttributes     : true,
				removeStyleLinkTypeAttributese : true,
				useShortDoctype                : true
			}
		}),
		new ErrorOverlayPlugin()
	]
};
