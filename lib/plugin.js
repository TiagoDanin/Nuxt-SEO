const Vue = require('vue')
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
		if (ctx.route && ctx.route.path) {
			ctx.app.head.link = nuxtSeo.createCanonical(options, ctx.route.path)
		}

		if (Vue.prototype && Vue.prototype.$meta) { // Vue-meta is enabled
			if (Vue.prototype.$nuxt && Vue.prototype.$nuxt.$options && Vue.prototype.$nuxt.$options.head) {
				Vue.prototype.$nuxt.$options.head = ctx.app.head
			}
		}
		deb('HEAD:', ctx.app.head)
	}
	ctx.seo = create
	inject('seo', create)
}
