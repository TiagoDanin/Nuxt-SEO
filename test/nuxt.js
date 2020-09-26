const test = require('ava')
const {Nuxt, Builder} = require('nuxt')
const got = require('got')
const config = require('../example/nuxt.config')

const url = path => `http://localhost:4000${path}`
const get = async path => {
	const {body} = await got(url(path))
	return body
}

let nuxt = null

test.before('Init Nuxt.js', async () => {
	config.dev = false
	config.seo.baseUrl = 'http://localhost:4000'
	nuxt = new Nuxt(config)
	await new Builder(nuxt).build()
	nuxt.listen(4000, 'localhost')
})

test.after('Closing server', () => {
	nuxt.close()
})

test('Route / and render HTML', async t => {
	const html = await get('/')

	t.true(html.includes('<title>Home Page</title>'))
	t.true(html.includes('<meta data-n-head="ssr" charset="utf-8"'))
	t.true(html.includes('<meta data-n-head="ssr" lang="en">'))
	t.true(html.includes('<meta data-n-head="ssr" language="English">'))
	t.true(html.includes('<meta data-n-head="ssr" data-hid="name" key="name" property="name" name="name" content="App name">'))
	t.true(html.includes('<meta data-n-head="ssr" data-hid="description" key="description" property="description" name="description" content="Example app with Nuxt Seo">'))
	t.true(html.includes('<link data-n-head="ssr" rel="canonical" href="http://localhost:4000/">'))
})

test('Route /news and render HTML', async t => {
	const html = await get('/news')
	t.true(html.includes('<title>Nuxt is the best</title>'))
	t.true(html.includes('<meta data-n-head="ssr" charset="utf-8">'))
	t.true(html.includes('<meta data-n-head="ssr" lang="en">'))
	t.true(html.includes('<meta data-n-head="ssr" language="English">'))
	t.true(html.includes('<meta data-n-head="ssr" data-hid="name" key="name" property="name" name="name" content="App name">'))
	t.true(html.includes('<meta data-n-head="ssr" data-hid="description" key="description" property="description" name="description" content="Hello World page in blog">'))
	t.true(html.includes('<meta data-n-head="ssr" data-hid="og:site_name" key="og:site_name" property="og:site_name" name="og:site_name" content="App name">'))
	t.true(html.includes('<meta data-n-head="ssr" data-hid="og:title" key="og:title" property="og:title" name="og:title" content="openGraph title">'))
	t.true(html.includes('<meta data-n-head="ssr" data-hid="og:description" key="og:description" property="og:description" name="og:description" content="Hello World page in blog">'))
	t.true(html.includes('<meta data-n-head="ssr" data-hid="og:locale" key="og:locale" property="og:locale" name="og:locale" content="en">'))
	t.true(html.includes('<link data-n-head="ssr" rel="canonical" href="http://localhost:4000/news/">'))
})

test('Route /news?query=test and render HTML', async t => {
	const html = await get('/news?query=test')
	t.true(html.includes('<link data-n-head="ssr" rel="canonical" href="http://localhost:4000/news/">'))
})
