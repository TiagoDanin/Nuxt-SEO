const test = require('ava')
const { Nuxt, Builder } = require('nuxt')
const config = require('../example/nuxt.config')

let nuxt = null

test.before('Init Nuxt.js', async t => {
	config.dev = false
	config.mode = 'universal'
	nuxt = new Nuxt(config)
	await new Builder(nuxt).build()
	nuxt.listen(4000, 'localhost')
})

test('Route / and render HTML', async t => {
	let context = {}
	const { html } = await nuxt.renderRoute('/', context)
	t.true(html.includes(`<h1>Hello World</h1>`))
	t.true(html.includes(`<title data-n-head="true">Home Page</title>`))
	t.true(html.includes(`<meta data-n-head="true" lang="en">`))
	t.true(html.includes(`<meta data-n-head="true" language="English">`))
	t.true(html.includes(`<meta data-n-head="true" name="description" content="Hello World Page" property="description" data-hid="description">`))
	t.true(html.includes(`<meta data-n-head="true" name="og:title" content="Home Page" property="og:title" data-hid="og:title">`))
	t.true(html.includes(`<meta data-n-head="true" name="og:site_name" content="App name" property="og:site_name" data-hid="og:site_name">`))
	t.true(html.includes(`<meta data-n-head="true" name="og:description" content="Hello World Page" property="og:description" data-hid="og:description">`))
	t.true(html.includes(`<meta data-n-head="true" name="twitter:title" content="Home Page" property="twitter:title" data-hid="twitter:title">`))
})

test.after('Closing server', t => {
	nuxt.close()
})
