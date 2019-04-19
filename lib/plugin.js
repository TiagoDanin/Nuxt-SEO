export default function (ctx, inject) {
	const nuxtSeo = <%= serialize(options.func) %>
	const moduleOptions = <%= serialize(options.moduleOptions) %>
	function create (options = {}) {
		options = {
			...moduleOptions,
			...options
		}
		ctx.app.head.title = options.title
		const meta = nuxtSeo.create(options)
		ctx.app.head.meta = [
			...ctx.app.head.meta,
			...meta
		]
	}
	ctx.seo = create
	inject('seo', create)
}
