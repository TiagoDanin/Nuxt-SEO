# Nuxt SEO

[![Travis](https://img.shields.io/travis/TiagoDanin/Nuxt-SEO.svg?branch=master&style=flat-square)](https://travis-ci.org/TiagoDanin/Nuxt-SEO) [![Downloads](https://img.shields.io/npm/dt/nuxt-seo.svg?style=flat-square)](https://npmjs.org/package/nuxt-seo) [![Node](https://img.shields.io/node/v/nuxt-seo.svg?style=flat-square)](https://npmjs.org/package/nuxt-seo) [![Version](https://img.shields.io/npm/v/nuxt-seo.svg?style=flat-square)](https://npmjs.org/package/nuxt-seo) [![XO code style](https://img.shields.io/badge/code%20style-XO-red.svg?style=flat-square)](https://github.com/xojs/xo) 

SEO / HTML Meta Tags Module for Nuxt.js

## Features

- Easy to use
- Canonical tag automatically generated
- Implementation of Open Graph Protocol (ogp)
- Compatible with npm package: debug

## Installation

Module available through the [npm registry](https://www.npmjs.com/). It can be installed using the [`npm`](https://docs.npmjs.com/getting-started/installing-npm-packages-locally) or [`yarn`](https://yarnpkg.com/en/) command line tool.

```sh
# Yarn (Recomend)
yarn add nuxt-seo
# NPM 
npm install nuxt-seo --save
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
		baseUrl: 'https://myWebSite',
		name: '<name of site>',
		title: '<title default>',
		templateTitle: '%name% - %title%',
		description: '<description default>'
		//...
	}
}
```

### Module options

#### `charset`
- Default: `utf-8`
- Type: String

### `baseUrl`
- Default: ``
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

#### `canonical`
The `auto` this will automatically generate according to the route, or put the route manually.
- Default: `auto`
- Type: String

#### `image`
- Default: `false`
- Type: URL String

### `author`
- Default: `false`
- Type: Array[name, email || site] || String

#### `openGraph[type]`
- Types: [ogp.me/#types](http://ogp.me/#types)

#### `url`
- Default: `false`
- Type: URL String

### `{...all}`
`charset`, `lang`, `language`, `copyright`, `name`, `subtitle`, `author`, `replyTo`, `description`, `keywords`, `url`, `noindex.ids.0`, `noindex.ids.1`, `noindex.ids`, `noindex.value.0`, `noindex.value.1`, `noindex.value`, `noindex`, `robots.ids.0`, `robots.ids.1`, `robots.ids`, `robots`, `openGraph.name`, `openGraph.title`, `openGraph.description`, `openGraph.locale`, `openGraph.url`, `openGraph.type`, `openGraph.profile.firstName`, `openGraph.profile.lastName`, `openGraph.profile.username`, `openGraph.profile.gender`, `openGraph.profile`, `openGraph.article.publishedTime`, `openGraph.article.modifiedTime`, `openGraph.article.expirationTime`, `openGraph.article.author.multi`, `openGraph.article.author`, `openGraph.article.section`, `openGraph.article.tag.multi`, `openGraph.article.tag`, `openGraph.article.authors.multi`, `openGraph.article.authors`, `openGraph.article.tags.multi`, `openGraph.article.tags`, `openGraph.article`, `openGraph.image.multi`, `openGraph.image.url`, `openGraph.image.width`, `openGraph.image.height`, `openGraph.image.alt`, `openGraph.image`, `openGraph.book.author.multi`, `openGraph.book.author`, `openGraph.book.isbn`, `openGraph.book.releaseDate`, `openGraph.book.tag.multi`, `openGraph.book.tag`, `openGraph.book.authors.multi`, `openGraph.book.authors`, `openGraph.book.tags.multi`, `openGraph.book.tags`, `openGraph.book`, `openGraph.price.currency`, `openGraph.price.amount`, `openGraph.price`, `openGraph.images.multi`, `openGraph.images.url`, `openGraph.images.width`, `openGraph.images.height`, `openGraph.images.alt`, `openGraph.images`, `openGraph`, `facebook.appId`, `facebook.pageId`, `facebook`, `twitter.title`, `twitter.description`, `twitter.card`, `twitter.type`, `twitter.site`, `twitter.creator`, `twitter`, `article.publishedTime`, `article.modifiedTime`, `article.expirationTime`, `article.author.multi`, `article.author`, `article.section`, `article.tag.multi`, `article.tag`, `article.authors.multi`, `article.authors`, `article.tags.multi`, `article.tags`, `article`, `book.author.multi`, `book.author`, `book.isbn`, `book.releaseDate`, `book.tag.multi`, `book.tag`, `book.authors.multi`, `book.authors`, 
`book.tags.multi`, `book.tags`, `book`, `image.multi`, `image.url`, `image.width`, `image.height`, `image.alt`, `image`, `images.multi`, `images.url`, `images.width`, `images.height`, `images.alt`, `images`, `og.name`, `og.title`, `og.description`, `og.locale`, `og.url`, `og.type`, `og.profile.firstName`, `og.profile.lastName`, `og.profile.username`, `og.profile.gender`, `og.profile`, `og.article.publishedTime`, `og.article.modifiedTime`, `og.article.expirationTime`, `og.article.author.multi`, `og.article.author`, `og.article.section`, `og.article.tag.multi`, `og.article.tag`, `og.article.authors.multi`, `og.article.authors`, `og.article.tags.multi`, `og.article.tags`, `og.article`, `og.image.multi`, `og.image.url`, `og.image.width`, `og.image.height`, `og.image.alt`, `og.image`, `og.book.author.multi`, `og.book.author`, `og.book.isbn`, `og.book.releaseDate`, `og.book.tag.multi`, `og.book.tag`, `og.book.authors.multi`, `og.book.authors`, `og.book.tags.multi`, `og.book.tags`, `og.book`, `og.price.currency`, `og.price.amount`, `og.price`, `og.images.multi`, `og.images.url`, `og.images.width`, `og.images.height`, `og.images.alt`, `og.images`, `og`, `fb.appId`, `fb.pageId`, `fb`

### Nuxt Head Context
- `head: function({ $seo }) { $seo(options) }`
- `head: function() { this.$seo(options) }`

```vue
<template>
	<h1>Hello World</h1>
</template>

<script>
	export default {
		head: function() {
			return this.$seo({
				name: 'Name app',
				title: 'Home Page',
				templateTitle: '%name% - %title%',
				description: 'Hello World Page'
			})
		}
	}
</script>
```

### Nuxt AsyncData Context
**NOTE:** Do not use in Server-Side Rendering (SSR) mode.
In SSR you should use the Nuxt Head Context.

- `asyncData: function({ seo }) { seo(options) }`
- `asyncData: function({ $seo }) { $seo(options) }`
- `asyncData: function() { this.seo(options) }`
- `asyncData: function() { this.$seo(options) }`

```vue
<template>
	<h1>Hello World</h1>
</template>

<script>
	export default {
		asyncData: function(ctx) {
			ctx.seo({
				name: 'Name app',
				title: 'Home Page',
				templateTitle: '%name% - %title%',
				description: 'Hello World Page'
			})
		}
	}
</script>
```

## Tests

To run the test suite, first install the dependencies, then run `test`:

```sh
# Using Yarn
yarn test
```

## Dependency

<details>
	<summary><a href="https://ghub.io/debug">debug</a>: small debugging utility</summary>
	<b>Author</b>: TJ Holowaychuk</br>
	<b>License</b>: MIT</br>
	<b>Version</b>: ^4.2.0
</details>

## Dev Dependencies

<details>
	<summary><a href="https://ghub.io/ava">ava</a>: Node.js test runner that lets you develop with confidence.</summary>
	<b>Author</b>: novemberborn, sindresorhus, vdemedes</br>
	<b>License</b>: MIT</br>
	<b>Version</b>: ^3.12.1
</details>
<details>
	<summary><a href="https://ghub.io/got">got</a>: Human-friendly and powerful HTTP request library for Node.js</summary>
	<b>Author</b>: sindresorhus, szmarczak</br>
	<b>License</b>: MIT</br>
	<b>Version</b>: ^11.7.0
</details>
<details>
	<summary><a href="https://ghub.io/nuxt">nuxt</a>: A minimalistic framework for server-rendered Vue.js applications (inspired by Next.js)</summary>
	<b>Author</b>: atinux, pi0, clarkdo</br>
	<b>License</b>: MIT</br>
	<b>Version</b>: ^2.14.6
</details>
<details>
	<summary><a href="https://ghub.io/vue">vue</a>: Reactive, component-oriented view layer for modern web interfaces.</summary>
	<b>Author</b>: Evan You</br>
	<b>License</b>: MIT</br>
	<b>Version</b>: ^2.6.12
</details>
<details>
	<summary><a href="https://ghub.io/xo">xo</a>: JavaScript/TypeScript linter with great defaults</summary>
	<b>Author</b>: Sindre Sorhus</br>
	<b>License</b>: MIT</br>
	<b>Version</b>: ^0.33.1
</details>

## Contributors

Pull requests and stars are always welcome. For bugs and feature requests, please [create an issue](https://github.com/TiagoDanin/Nuxt-SEO/issues). [List of all contributors](https://github.com/TiagoDanin/Nuxt-SEO/graphs/contributors).

## License

[MIT](LICENSE) © [Tiago Danin](https://TiagoDanin.github.io)