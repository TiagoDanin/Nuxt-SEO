const debug = require('debug')
const deb = debug('nuxt:seo:debug')

const nuxtSeo = <%= serialize(options.func) %>
const moduleOptions = <%= serialize(options.moduleOptions) %>

export default function (ctx, inject) {
	function create (options = {}) {
		options = {
			...moduleOptions,
			...options
		}
		ctx.app.head.title = options.title
		ctx.app.head.meta = nuxtSeo.create(options, ctx.app.head.meta)
		deb('HEAD:', ctx.app.head)
	}
	ctx.seo = create
	inject('seo', create)
}
