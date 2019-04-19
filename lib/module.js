const path = require('path')
const debug = require('debug')
const log = debug('nuxt:seo:log')
const deb = debug('nuxt:seo:debug')

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
	url: ''
}

const create = (options, inputMeta) => {
	const arrayToString = (value) => {
		if (value && value.length > 0) {
			if (Array.isArray(value)) {
				return value.join(', ')
			}
			return value
		}
		return false
	}

	const getMetaKey = (input) => {
		const keys = Object.keys(input)
		if (input.hid) {
			return input.hid
		} else if (input.name) {
			return input.name
		}
		return keys[0]
	}

	let meta = []
	//Basic HTML Meta
	meta.push({ lang: options.lang })
	meta.push({ language: options.language })
	meta.push({
		name: 'description',
		content: options.description
	})
	meta.push({
		name: 'keywords',
		content: arrayToString(options.keywords)
	})
	meta.push({
		name: 'author',
		content: arrayToString(options.author)
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
		name: 'og:site_name',
		content: options.name
	})
	meta.push({
		name: 'og:description',
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

	meta = meta.filter((m) => {
		if (typeof m.lang != 'undefined') {
			return m.lang
		} else if (typeof m.language != 'undefined') {
			return m.language
		} else if (typeof m.content == 'string') {
			return m.content != ''
		} else if (typeof m.content == 'undefined') {
			return true
		}
		return m.content
	})

	meta = meta.map((m) => {
		if (typeof m.content == 'string') {
			m.property = m.name
			m.hid = m.name
		}
		return m
	})

	const metaKeys = meta.map((m) => {
		return getMetaKey(m)
	}).filter(k => k) //remove false, undefined & null
	const inputWithoutDup = inputMeta.filter((m) => {
		return !metaKeys.includes(getMetaKey(m)) //Replace HTM Meta -> Nuxt Seo Meta
	})

	return [
		...meta,
		...inputWithoutDup
	]
}

module.exports = function (moduleOptions) {
	this.nuxt.hook('build:before', () => {
		const options = {
			...defaults,
			...this.options.seo,
			...moduleOptions
		}

		if (this.options.head.title) {
			options.title = this.options.head.title
		} else {
			this.options.head.title = options.title
		}
		this.options.head.meta = create(options, this.options.head.meta)

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
		deb('HEAD:', this.options.head)
		log('LOAD NUXT SEO')
	})
}

module.exports.meta = require('../package.json')
