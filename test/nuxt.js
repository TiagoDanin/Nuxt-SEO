const test = require('ava')
const {Nuxt, Builder, Generator} = require('nuxt')
const fsPromises = require('fs').promises
const got = require('got')
const config = require('../example/nuxt.config')
const configStatic = require('../example/nuxt.config.static')

const url = path => `http://localhost:4000${path}`
const get = async path => {
	const {body} = await got(url(path))
	return body
}

const staticPath = path => `${configStatic.generate.dir}${path}index.html`
const getStatic = async path => {
	return fsPromises.readFile(staticPath(path), {encoding: 'utf8'})
}

let nuxt = null

test.before('Init Nuxt.js', async () => {
	// Init SSR
	config.dev = false
	config.seo.baseUrl = 'http://localhost:4000'
	nuxt = new Nuxt(config)
	await new Builder(nuxt).build()
	await nuxt.listen(4000, 'localhost')

	// Build STATIC
	configStatic.dev = false
	const nuxtStatic = new Nuxt(configStatic)
	const builder = await new Builder(nuxtStatic)
	const generator = await new Generator(nuxtStatic, builder)
	await nuxtStatic.listen(4001, 'localhost')
	const {errors} = await generator.generate({build: false})
	if (errors.length > 0) {
		throw new Error('Error generating pages, exiting with non-zero code')
	}

	await nuxtStatic.close()
})

test.after('Closing server', () => {
	nuxt.close()
})

test('Static route /', async t => {
	const html = await getStatic('/')
	t.true(html.includes('<title>Home Page</title>'))
	t.true(html.match('<meta data-n-head="ssr" data-hid="charset" charset="utf-8">').length === 1)
})

test('Static route /news', async t => {
	const html = await getStatic('/news/')
	t.true(html.includes('<title>Nuxt is the best</title>'))
	t.true(html.match('<meta data-n-head="ssr" data-hid="charset" charset="utf-8">').length === 1)
})

test('Route / and render HTML', async t => {
	const html = await get('/')

	t.true(html.includes('<title>Home Page</title>'))
	t.true(html.match('<meta data-n-head="ssr" data-hid="charset" charset="utf-8">').length === 1)
	t.true(html.includes('<meta data-n-head="ssr" data-hid="charset" charset="utf-8"'))
	t.true(html.includes('<meta data-n-head="ssr" data-hid="lang" lang="en">'))
	t.true(html.includes('<meta data-n-head="ssr" data-hid="language" language="English">'))
	t.true(html.includes('<meta data-n-head="ssr" data-hid="name" key="name" property="name" name="name" content="App name">'))
	t.true(html.includes('<meta data-n-head="ssr" data-hid="description" key="description" property="description" name="description" content="Example app with Nuxt Seo">'))
	t.true(html.includes('<link data-n-head="ssr" rel="canonical" href="http://localhost:4000/">'))
})

test('Route /news and render HTML', async t => {
	await get('/news')
	await get('/')
	const html = await get('/news')
	t.true(html.includes('<title>Nuxt is the best</title>'))
	t.true(html.match('<meta data-n-head="ssr" data-hid="charset" charset="utf-8">').length === 1)
	t.true(html.includes('<meta data-n-head="ssr" data-hid="lang" lang="en">'))
	t.true(html.includes('<meta data-n-head="ssr" data-hid="language" language="English">'))
	t.true(html.includes('<meta data-n-head="ssr" data-hid="name" key="name" property="name" name="name" content="App name">'))
	t.true(html.includes('<meta data-n-head="ssr" data-hid="description" key="description" property="description" name="description" content="Hello World page in blog">'))
	t.true(html.includes('<meta data-n-head="ssr" data-hid="og:site_name" key="og:site_name" property="og:site_name" name="og:site_name" content="App name">'))
	t.true(html.includes('<meta data-n-head="ssr" data-hid="og:title" key="og:title" property="og:title" name="og:title" content="openGraph title">'))
	t.true(html.includes('<meta data-n-head="ssr" data-hid="og:description" key="og:description" property="og:description" name="og:description" content="Hello World page in blog">'))
	t.true(html.includes('<meta data-n-head="ssr" data-hid="og:locale" key="og:locale" property="og:locale" name="og:locale" content="en">'))
	t.true(html.includes('<link data-n-head="ssr" rel="canonical" href="http://localhost:4000/news">'))
})

test('Route /news?query=test and render canonical', async t => {
	const html = await get('/news?query=test')
	t.true(html.includes('<link data-n-head="ssr" rel="canonical" href="http://localhost:4000/news">'))
})

test('Route /news?query=test and render canonical with trailing slash', async t => {
	const html = await get('/login?query=test')
	t.true(html.includes('<link data-n-head="ssr" rel="canonical" href="http://localhost:4000/login/">'))
})
