const test = require('ava')
const nuxtSeo = require('../lib/module')

test('createTitle method', async t => {
	const title = nuxtSeo.createTitle({
		title: 'test',
		templateTitle: '%title% - %title%'
	})
	console.log(title)
	t.true(title == 'test - test')
})

test('createMeta with all meta', async t => {
	let options = nuxtSeo.defaults
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
	options.noindex = ['index', 'follow']
	options.openGraph = {
		type: 'profile',
		image: {
			url: 'https://avatars3.githubusercontent.com/u/5731176?s=460&v=4',
			width: 460,
			height: 460,
			alt: 'My Photo - Tiago Danin',
		}
	}
	options.facebook = {
		appId: 123456,
		pageId: 123456
	}

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
