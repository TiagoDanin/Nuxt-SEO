const debug = require('debug')
const deb = debug('nuxt:seo:debug')

const nuxtSeo = <%= serialize(options.func) %>
const moduleOptions = <%= serialize(options.moduleOptions) %>
const template =  <%= serialize(options.template) %>

export default function (ctx, inject) {
	function create (options = {}) {
		options = {
			...moduleOptions,
			...options
		}
		ctx.app.head.title = nuxtSeo.createTitle(options)
		ctx.app.head.meta = nuxtSeo.createMeta(options, ctx.app.head.meta, template)
		deb('HEAD:', ctx.app.head)
	}
	ctx.seo = create
	inject('seo', create)
}
