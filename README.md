# Nuxt SEO
[![Node](https://img.shields.io/node/v/nuxt-seo.svg?style=flat-square)](https://npmjs.org/package/nuxt-seo)
[![Version](https://img.shields.io/npm/v/nuxt-seo.svg?style=flat-square)](https://npmjs.org/package/nuxt-seo)
[![Downloads](https://img.shields.io/npm/dt/nuxt-seo.svg?style=flat-square)](https://npmjs.org/package/nuxt-seo)
[![Travis](https://img.shields.io/travis/TiagoDanin/Nuxt-SEO.svg?branch=master&style=flat-square)](https://travis-ci.org/TiagoDanin/Nuxt-SEO)

SEO / HTML Meta Tags Module for Nuxt.js


## Installation
Module available through the
[npm registry](https://www.npmjs.com/). It can be installed using the
[`npm`](https://docs.npmjs.com/getting-started/installing-npm-packages-locally)
or
[`yarn`](https://yarnpkg.com/en/)
command line tools.

```sh
# NPM
npm install nuxt-seo --save
# Or Using Yarn
yarn add nuxt-seo
```

## Documentation
### Setup

- Add `nuxt-seo` to `modules` section of your `nuxt.config.js`

```js
{
	modules: [
		'nuxt-seo'
	],
	seo: {
		// Module options
		name: '<name of site>',
		title: '<title default>',
		templateTitle: '%name% - %title%',
		description: '<description default'
		//...
	}
}
```

### Module options

#### `charset`
- Default: `utf-8`
- Type: String

#### `name`
- Default: `false`
- Type: String

#### `title`
- Default: `TITLE`
- Type: String

#### `description`
- Default: `false`
- Type: String

#### `keywords`
- Default: `[]`
- Type: Array[...keywords] || String

#### `lang`
- Default: `en`
- Type: String

#### `language`
- Default: `English`
- Type: String

#### `image`
- Default: `false`
- Type: URL String

### `author`
- Default: `false`
- Type: Array[name, email || site] || String

#### `openGraph.type`
- Default: `false`
- Types: [ogp.me/#types](http://ogp.me/#types)

#### `url`
- Default: `false`
- Type: URL String

### [all]
`charset`, `lang`, `language`, `copyright`, `name`, `title`, `subtitle`, `author`, `replyTo`, `description`, `keywords`, `url`, `noindex`, `openGraph.name`, `openGraph.title`, `openGraph.description`, `openGraph.locale`, `openGraph.url`, `openGraph.type`, `openGraph.profile.firstName`, `openGraph.profile.lastName`, `openGraph.profile.username`, `openGraph.profile.gender`, `openGraph.profile`, `openGraph.article.publishedTime`, `openGraph.article.modifiedTime`, `openGraph.article.expirationTime`, `openGraph.article.author`, `openGraph.article.section`, `openGraph.article.tag`, `openGraph.article`, `openGraph.image.url`, `openGraph.image.width`, `openGraph.image.height`, `openGraph.image.alt`, `openGraph.image`, `openGraph.price.currency`, `openGraph.price.amount`, `openGraph.price`, `openGraph`, `facebook.appId`, `facebook.pageId`, `facebook`, `twitter.title`, `twitter.description`, `twitter.card`, `twitter.type`, `twitter.site`, `twitter.creator`, `twitter`, `og.name`, `og.title`, `og.description`, `og.locale`, `og.url`, `og.type`, `og.profile.firstName`, `og.profile.lastName`, `og.profile.username`, `og.profile.gender`, `og.profile`, `og.article.publishedTime`, `og.article.modifiedTime`, `og.article.expirationTime`, `og.article.author`, `og.article.section`, `og.article.tag`, `og.article`, `og.image.url`, `og.image.width`, `og.image.height`, `og.image.alt`, `og.image`, `og.price.currency`, `og.price.amount`, `og.price`, `og`, `fb.appId`, `fb.pageId`, `fb`

### Vue Context
- `asyncData: function({ seo }) { seo(options) }`

```vue
<template>
	<h1>Hello World</h1>
</template>

<script>
	export default {
		asyncData: function(ctx) {
			ctx.seo({
				title: 'Home Page',
				description: 'Hello World Page'
			})
		},
		head: {
			//title: 'Home Page'
		}
	}
</script>
```

## Tests
To run the test suite, first install the dependencies, then run `test`:

```sh
# NPM
npm test
# Or Using Yarn
yarn test
```

## Dependencies
- [debug](https://ghub.io/debug): small debugging utility

## Dev Dependencies
- [ava](https://ghub.io/ava): Testing can be a drag. AVA helps you get it done.
- [nuxt](https://ghub.io/nuxt): A minimalistic framework for server-rendered Vue.js applications (inspired by Next.js)
- [vue](https://ghub.io/vue): Reactive, component-oriented view layer for modern web interfaces.


## Contributors
Pull requests and stars are always welcome. For bugs and feature requests, please [create an issue](https://github.com/TiagoDanin/Nuxt-SEO/issues). [List of all contributors](https://github.com/TiagoDanin/Nuxt-SEO/graphs/contributors).


## License
[MIT](LICENSE) © [Tiago Danin](https://TiagoDanin.github.io)
