module.exports = {
	entry: "./src/entry.js",
	output: {
		path: __dirname,
		filename: "bundle.js"
	},
	devtool: "source-map",
	module: {
		loaders: [
			{			
				test: /\.scss$/,
				loaders: ["style", "css?sourceMap", "sass?sourceMap"]
			},
			{
				test: /\.js$/,
				exclude: /(node_modules|bower_components)/,
				loader: 'babel', // 'babel-loader' is also a legal name to reference
				query: {
				  presets: ['es2015']
				}
			}
		]
	}
};
