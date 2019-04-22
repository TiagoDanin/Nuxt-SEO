const path = require('path')
const debug = require('debug')
const log = debug('nuxt:seo:log')
const deb = debug('nuxt:seo:debug')

const defaults = {
	charset: 'utf-8',
	lang: 'en',
	language: 'English',
	templateTitle: '%title%',
	title: 'Title',
	name: false,
	description: false
}

const allMetas = {
	charset: {content: false},
	lang: {content: false},
	language: {content: false},
	copyright: {content: true},
	name: {content: true},
	title: {content: true},
	subtitle: {content: true},
	author: {content: true},
	replyTo: {id: 'reply-to', content: true},
	description: {content: true},
	keywords: {content: true},
	url: {content: true},
	noindex: {id: 'robots', content: true},
	openGraph: {
		id: 'og',
		name: {id: 'site_name', default: 'name', content: true},
		title: {default: 'title', content: true},
		description: {default: 'description', content: true},
		locale: {default: 'lang', content: true},
		url: {default: 'url', content: true},
		type: {content: true},
		profile: {
			id: 'profile',
			firstName: {fullId: 'profile:first_name', content: true},
			lastName: {fullId: 'profile:last_name', content: true},
			username: {fullId: 'profile:username', content: true},
			gender: {fullId: 'profile:gender', content: true}
		},
		article: {
			publishedTime: {fullId: 'article:published_time', content: true},
			modifiedTime: {fullId: 'article:modified_time', content: true},
			expirationTime: {fullId: 'article:expiration_time', content: true},
			author: {fullId: 'article:author', content: true, multi: true},
			section: {fullId: 'article:section', content: true},
			tag: {fullId: 'article:tag', content: true}
		},
		image: {
			id: 'image',
			content: true,
			multi: true,
			url: {fullId: 'og:image', content: true},
			width: {content: true},
			height: {content: true},
			alt: {content: true}
		},
		price: {
			id: 'price',
			currency: {content: true},
			amount: {content: true}
		}
	},
	facebook: {
		id: 'fb',
		appId: {id: 'app_id', content: true},
		pageId: {id: 'page_id', content: true}
	},
	twitter: {
		id: 'twitter',
		title: {default: 'title', content: true},
		description: {default: 'description', content: true},
		card: {content: true},
		type: {id: 'card', content: true},
		site: {content: true},
		creator: {content: true}
	}
}
allMetas.openGraph.images = allMetas.openGraph.image
allMetas.openGraph.article.authors = allMetas.openGraph.article.author
allMetas.og = allMetas.openGraph
allMetas.fb = allMetas.facebook

const createTitle = (options = {}) => {
	return options.templateTitle.replace(/%title%/g, options.title).replace(/%name%/g, options.name)
}

const createMeta = (options = {}, inputMeta = [], template = {}) => {
	const outputMeta = []
	const getMetaKey = (input) => {
		const keys = Object.keys(input)
		if (input.hid) {
			return input.hid
		} else if (input.key) {
			return input.key
		} else if (input.property) {
			return input.property
		} else if (input.name) {
			return input.name
		}
		return keys[0] || ''
	}
	const findAndRemove = (id) => {
		inputMeta = inputMeta.filter((meta) => {
			return getMetaKey(meta) != id
		})
	}
	const generate = (metas, opts, id = '', index=false) => {
		metas = {...metas}
		Object.keys(metas).map((k) => {
			const meta = {...metas[k]}
			if (meta.fullId) {
				meta.id = meta.fullId
			} else if (!meta.id) {
				meta.id = id + k
			} else {
				meta.id = id + meta.id
			}

			if (typeof opts == 'string' && k == 'id') {
				meta.value = opts
				meta.id = id
				meta.content = id
			} else if (opts[k]) {
				meta.value = opts[k]
			} else if (meta.default && options[meta.default]) {
				meta.value = options[meta.default]
			} else {
				return
			}

			if (meta.value && meta.multi && Array.isArray(meta.value)) {
				meta.value.forEach((value, index) => {
					let id = ''
					if (meta.fullId) {
						id = meta.fullId
					} else if (typeof value == 'string') {
						id = meta.id
					} else {
						id = `${meta.id}:`
					}
					meta.multi = false
					return generate(meta, value, id, index)
				})
			} else if (typeof meta.value == 'object') {
				return generate(meta, meta.value, meta.id+':')
			} else if (meta.content) {
				findAndRemove(meta.id)

				if (Array.isArray(meta.value)) {
					meta.value = meta.value.join(',')
				}

				meta.value = meta.value.toString()
				if (!meta.value || meta.value.length <= 0) {
					return
				}

				outputMeta.push({
					hid: meta.id,
					key: typeof index == 'number' ? `${meta.id}:0${index}` : meta.id,
					property: meta.id,
					name: meta.id,
					content: meta.value
				})
			} else if (meta.id) {
				findAndRemove(meta.id)
				outputMeta.push({
					[meta.id]: meta.value
				})
			}
		})
	}
	generate(template, options)
	return [...inputMeta, ...outputMeta]
}

module.exports = function (moduleOptions) {
	if (!moduleOptions.meta) {
		moduleOptions.meta = {}
	}
	this.nuxt.hook('build:before', () => {
		const template = {
			...allMetas,
			...this.options.meta,
			...moduleOptions.meta
		}
		delete moduleOptions.meta

		const options = {
			...defaults,
			...this.options.seo,
			...moduleOptions
		}

		if (this.options.head.title) {
			options.title = this.options.head.title
		}

		this.options.title = createTitle(options)
		this.options.head.meta = createMeta(options, this.options.head.meta, template)

		const pluginOptions = {
			moduleOptions: options,
			template: template,
			func: {
				createMeta,
				createTitle
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
module.exports.defaults = defaults
module.exports.createTitle = createTitle
module.exports.createMeta = createMeta
module.exports.template = allMetas
