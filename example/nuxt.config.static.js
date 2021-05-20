const path = require('path')
const baseConfig = require('./nuxt.config')

const buildDir = path.resolve(__dirname, '.nuxtStatic')

module.exports = {
	...baseConfig,
	generate: {
		dir: `${buildDir}/_static`
	},
	buildDir,
	target: 'static'
}
