const path = require('path')

const defaults = {
	charset: 'utf-8',
	title: 'TITLE', //Rec: Replace 'and' ~> '&' & 'or' ~> '/'
	lang: 'en',
	language: 'English',
	image: '',
	description: '', //Rec: 160max
	keywords: [],
	type: '', //http://ogp.me/#types
	name: '',
	url: process.browser
}

const toString = (value) => {
	if (Array.isArray(value)) {
		return value.join(', ')
	}
	return value
}

const create = (options) => {
	const meta = []
	//Basic HTML Meta
	meta.push({ lang: options.lang })
	meta.push({ language: options.language })
	meta.push({
		name: 'description',
		content: options.description
	})
	meta.push({
		name: 'keywords',
		content: toString(options.keywords)
	})
	meta.push({
		name: 'author',
		content: toString(options.author)
	})

	//Basic The Open Graph protocol
	meta.push({
		name: 'og:title',
		content: options.title
	})
	meta.push({
		name: 'og:type',
		content: options.type
	})
	meta.push({
		name: 'og:url',
		content: options.url
	})
	meta.push({
		name: 'og:image',
		content: options.image
	})
	meta.push({
		name: 'or:site_name',
		content: options.name
	})
	meta.push({
		name: 'or:description',
		content: options.description
	})

	//Basic Twitter Meta
	meta.push({
		name: 'twitter:title',
		content: options.title
	})
	meta.push({
		name: 'twitter:url',
		content: options.url
	})

	return meta
}

module.exports = function (moduleOptions) {
	this.nuxt.hook('build:before', () => {
		const options = {
			...defaults,
			...this.options.seo,
			...moduleOptions
		}

		const allMetas = this.options.head.meta.map((meta) => {
			const keys = Object.keys(meta)
			if (meta.hid) {
				return meta.hid
			} else if (meta.name) {
				return meta.name
			}
			return keys[0]
		}).filter(k => k) //remove false, undefined & null

		if (this.options.head.title) {
			options.title = this.options.head.title
		} else {
			this.options.head.title = options.title
		}

		const meta = create(options)
		this.options.head.meta = [
			...this.options.head.meta,
			...meta
		]

		const pluginOptions = {
			moduleOptions: options,
			func: {
				create
			}
		}

		this.addPlugin({
			src: path.resolve(__dirname, 'plugin.js'),
			fileName: 'Nuxt-Seo.js',
			options: pluginOptions
		})

		//property, hid
		console.log('1..', this.options.head)
	})
}

module.exports.meta = require('../package.json')
