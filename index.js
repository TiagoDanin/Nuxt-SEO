const defaults = {
	title: 'TITLE',
	lang: 'en',
	description: '',
	keywords: [],
	author: '',
	copyright: '',
	image: ''

}

module.exports = function (moduleOptions) {
	this.nuxt.hook('build:before', () => {
		const options = {
			...defaults,
			...this.options.seo,
			...moduleOptions
		}

		const baseUrl = this.options.router.base
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

		if (!allMetas.includes('lang')) {
			this.options.head.meta.push({
				lang: options.lang
			})
		}

		if (!allMetas.includes('description')) {
			this.options.head.meta.push({
				hid: 'description',
				name: 'description',
				content: options.description
			})
		}

		if (!allMetas.includes('description')) {
			let keywords = options.keywords
			if (Array.isArray(keywords)) {
				keywords = keywords.join(', ')
			}
			this.options.head.meta.push({
				hid: 'keywords',
				name: 'keywords',
				content: keywords
			})
		}

		if (!allMetas.includes('author')) {
			this.options.head.meta.push({
				hid: 'author',
				name: 'author',
				content: options.author
			})
		}

		console.log(this.options)
		console.log('----\n----\n')
		console.log(this.options.head)
	})
}

//module.exports.meta = require('package.json')
