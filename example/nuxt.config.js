const path = require('path')

module.exports = {
	rootDir: path.resolve(__dirname, '..'),
	buildDir: path.resolve(__dirname, '.nuxt'),
	srcDir: __dirname,
	render: {
		resourceHints: false
	},
	modules: [
		require('../lib/module')
	]
}
