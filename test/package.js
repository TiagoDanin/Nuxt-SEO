const test = require('ava')
const nuxtSeo = require('../lib/module')

test('createTitle with two title', async t => {
	const title = nuxtSeo.createTitle({
		title: 'test',
		templateTitle: '%title% - %title%'
	})

	t.true(title == 'test - test')
})

test('createTitle with name + title', async t => {
	const title = nuxtSeo.createTitle({
		title: 'test',
		name: 'app',
		templateTitle: '%name% - %title%'
	})

	t.true(title == 'app - test')
})

test('createMeta with all meta basic', async t => {
	const options = {...nuxtSeo.defaults}
	options.charset = 'utf-8'
	options.lang = 'en'
	options.language = 'English'
	options.copyright = 'TiagoDanin'
	options.name = 'TiagoDanin WebSite'
	options.title = 'Home Page'
	options.subtitle = 'About page'
	options.author = ['Tiago Danin', 'TiagoDanin@outlook.com']
	options.replyTo = 'TiagoDanin@outlook.com'
	options.description = 'About the Tiago Danin'
	options.keywords = ['Tiago', 'Danin', 'about']
	options.url = 'https://tiagodanin.github.io'
	options.noindex = true

	const inputMeta = [{lang: 'pt'}]
	const template = nuxtSeo.template
	const meta = nuxtSeo.createMeta(options, inputMeta, template)
	const done = require('./fixtures/all.js')

	t.true(JSON.stringify(meta) == JSON.stringify(done))
})

test('createMeta with options no valid', async t => {
	const options = {
		notValid: true
	}

	const inputMeta = []
	const template = nuxtSeo.template
	const meta = nuxtSeo.createMeta(options, inputMeta, template)

	t.true(JSON.stringify(meta) == JSON.stringify([]))
})

test('createMeta with array in openGraph.image', async t => {
	const options = {...nuxtSeo.defaults}
	const inputMeta = [{lang: 'pt'}]
	const template = nuxtSeo.template

	options.openGraph = {
		image: [{
			url: 'https://1.jpg',
			alt: 'Photo test 1',
		}, {
			url: 'https://2.jpg',
			alt: 'Photo test 2',
		}]
	}
	const meta01 = nuxtSeo.createMeta(options, inputMeta, template)

	options.openGraph = {
		image: ['https://1.jpg', 'https://2.jpg']
	}
	const meta02 = nuxtSeo.createMeta(options, inputMeta, template)

	t.true(Boolean(meta01.find((e) => e.content == 'https://1.jpg' && e.key == 'og:image:00')))
	t.true(Boolean(meta01.find((e) => e.content == 'Photo test 2' && e.key == 'og:image:alt:01')))

	t.true(Boolean(meta02.find((e) => e.content == 'https://1.jpg' && e.key == 'og:image:00')))
	t.true(Boolean(meta02.find((e) => e.content == 'https://2.jpg' && e.key == 'og:image:01')))
})

test('createMeta with array in openGraph.article.author', async t => {
	const options = {...nuxtSeo.defaults}
	const inputMeta = [{lang: 'pt'}]
	const template = nuxtSeo.template

	options.openGraph = {
		article: {
			author: ['Tiago Danin', 'Danin Tiago']
		}
	}
	const meta = nuxtSeo.createMeta(options, inputMeta, template)

	t.true(Boolean(meta.find((e) => e.content == 'Tiago Danin' && e.key == 'article:author:00')))
	t.true(Boolean(meta.find((e) => e.content == 'Danin Tiago' && e.key == 'article:author:01')))
})

test('replace inputMeta with output of createMeta', async t => {
	const options = {...nuxtSeo.defaults}
	const inputMeta = [
		{ lang: 'pt' },
		{ key: 'url', content: 'https://ddd.com' }
	]
	const template = nuxtSeo.template

	options.url = 'https://test.com'
	const meta = nuxtSeo.createMeta(options, inputMeta, template)

	t.true(Boolean(meta.find((e) => e.content == 'https://test.com' && e.key == 'url')))
	t.false(Boolean(meta.find((e) => e.content == 'https://ddd.com' && e.key == 'url')))
})

test('createMeta with noindex = true', async t => {
	const options = {...nuxtSeo.defaults}
	const inputMeta = []
	const template = nuxtSeo.template

	options.noindex = true
	const meta = nuxtSeo.createMeta(options, inputMeta, template)

	t.true(Boolean(meta.find((e) => e.content == 'index,follow' && e.key == 'robots')))
	t.true(Boolean(meta.find((e) => e.content == 'index,follow' && e.key == 'googlebot')))
})
