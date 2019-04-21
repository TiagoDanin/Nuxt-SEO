const test = require('ava')
const { Nuxt, Builder } = require('nuxt')
const config = require('../example/nuxt.config')

let nuxt = null

test.before('Init Nuxt.js', async t => {
	config.dev = true
	config.mode = 'universal'
	nuxt = new Nuxt(config)
	await new Builder(nuxt).build()
	nuxt.listen(4000, 'localhost')
})

test('Route / and render HTML', async t => {
	let context = {}
	const { html } = await nuxt.renderRoute('/', context)

	t.true(html.includes(`<title data-n-head="true">Home Page</title>`))
	t.true(html.includes(`<meta data-n-head="true" charset="utf-8"`))
	t.true(html.includes(`<meta data-n-head="true" lang="en">`))
	t.true(html.includes(`<meta data-n-head="true" language="English">`))
	t.true(html.includes(`<meta data-n-head="true" data-hid="name" key="name" property="name" name="name" content="App name">`))
	t.true(html.includes(`<meta data-n-head="true" data-hid="title" key="title" property="title" name="title" content="Home Page">`))
	t.true(html.includes(`<meta data-n-head="true" data-hid="description" key="description" property="description" name="description" content="Hello World Page">`))
})

test('Route /post and render HTML', async t => {
	let context = {}
	const { html } = await nuxt.renderRoute('/post', context)
	t.true(html.includes(`<title data-n-head="true">Hello</title>`))
	t.true(html.includes(`<meta data-n-head="true" charset="utf-8">`))
	t.true(html.includes(`<meta data-n-head="true" lang="en">`))
	t.true(html.includes(`<meta data-n-head="true" language="English">`))
	t.true(html.includes(`<meta data-n-head="true" data-hid="name" key="name" property="name" name="name" content="App name">`))
	t.true(html.includes(`<meta data-n-head="true" data-hid="title" key="title" property="title" name="title" content="Hello">`))
	t.true(html.includes(`<meta data-n-head="true" data-hid="description" key="description" property="description" name="description" content="Hello World page in blog">`))
	t.true(html.includes(`<meta data-n-head="true" data-hid="og:site_name" key="og:site_name" property="og:site_name" name="og:site_name" content="App name">`))
	t.true(html.includes(`<meta data-n-head="true" data-hid="og:title" key="og:title" property="og:title" name="og:title" content="openGraph title">`))
	t.true(html.includes(`<meta data-n-head="true" data-hid="og:description" key="og:description" property="og:description" name="og:description" content="Hello World page in blog">`))
	t.true(html.includes(`<meta data-n-head="true" data-hid="og:locale" key="og:locale" property="og:locale" name="og:locale" content="en">`))
})

test.after('Closing server', t => {
	nuxt.close()
})
