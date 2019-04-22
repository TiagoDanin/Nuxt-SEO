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
		description: '<description default>'
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

### `{...all}`
`charset`, `lang`, `language`, `copyright`, `name`, `title`, `subtitle`, `author`, `replyTo`, `description`, `keywords`, `url`, `noindex`, `openGraph.name`, `openGraph.title`, `openGraph.description`, `openGraph.locale`, `openGraph.url`, `openGraph.type`, `openGraph.profile.firstName`, `openGraph.profile.lastName`, `openGraph.profile.username`, `openGraph.profile.gender`, `openGraph.profile`, `openGraph.article.publishedTime`, `openGraph.article.modifiedTime`, `openGraph.article.expirationTime`, `openGraph.article.author.multi`, `openGraph.article.author`, `openGraph.article.section`, `openGraph.article.tag.multi`, `openGraph.article.tag`, `openGraph.article.authors.multi`, `openGraph.article.authors`, `openGraph.article.tags.multi`, `openGraph.article.tags`, `openGraph.article`, `openGraph.image.multi`, `openGraph.image.url`, `openGraph.image.width`, `openGraph.image.height`, `openGraph.image.alt`, `openGraph.image`, `openGraph.book.author.multi`, `openGraph.book.author`, `openGraph.book.isbn`, `openGraph.book.releaseDate`, `openGraph.book.tag.multi`, `openGraph.book.tag`, `openGraph.book.authors.multi`, `openGraph.book.authors`, `openGraph.book.tags.multi`, `openGraph.book.tags`, `openGraph.book`, `openGraph.price.currency`, `openGraph.price.amount`, `openGraph.price`, `openGraph.images.multi`, `openGraph.images.url`, `openGraph.images.width`, `openGraph.images.height`, `openGraph.images.alt`, `openGraph.images`, `openGraph`, `facebook.appId`, `facebook.pageId`, `facebook`, `twitter.title`, `twitter.description`, `twitter.card`, `twitter.type`, `twitter.site`, `twitter.creator`, `twitter`, `article.publishedTime`, `article.modifiedTime`, `article.expirationTime`, `article.author.multi`, `article.author`, `article.section`, `article.tag.multi`, `article.tag`, `article.authors.multi`, `article.authors`, `article.tags.multi`, `article.tags`, `article`, `book.author.multi`, `book.author`, `book.isbn`, `book.releaseDate`, `book.tag.multi`, `book.tag`, `book.authors.multi`, `book.authors`, `book.tags.multi`, `book.tags`, `book`, `image.multi`, `image.url`, `image.width`, `image.height`, `image.alt`, `image`, `images.multi`, `images.url`, `images.width`, `images.height`, `images.alt`, `images`, `og.name`, `og.title`, `og.description`, `og.locale`, `og.url`, `og.type`, `og.profile.firstName`, `og.profile.lastName`, `og.profile.username`, `og.profile.gender`, `og.profile`, `og.article.publishedTime`, `og.article.modifiedTime`, `og.article.expirationTime`, `og.article.author.multi`, `og.article.author`, `og.article.section`, `og.article.tag.multi`, `og.article.tag`, `og.article.authors.multi`, `og.article.authors`, `og.article.tags.multi`, `og.article.tags`, `og.article`, `og.image.multi`, `og.image.url`, `og.image.width`, `og.image.height`, `og.image.alt`, `og.image`, `og.book.author.multi`, `og.book.author`, `og.book.isbn`, `og.book.releaseDate`, `og.book.tag.multi`, `og.book.tag`, `og.book.authors.multi`, `og.book.authors`, `og.book.tags.multi`, `og.book.tags`, `og.book`, `og.price.currency`, `og.price.amount`, `og.price`, `og.images.multi`, `og.images.url`, `og.images.width`, `og.images.height`, `og.images.alt`, `og.images`, `og`, `fb.appId`, `fb.pageId`, `fb`

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
# NPM
npm test
# Or Using Yarn
yarn test
```

## Dependencies
- [debug](https://ghub.io/debug): small debugging utility

## Dev Dependencies
- [ava](https://ghub.io/ava): Testing can be a drag. AVA helps you get it done.
- [got](https://ghub.io/got): Simplified HTTP requests
- [nuxt](https://ghub.io/nuxt): A minimalistic framework for server-rendered Vue.js applications (inspired by Next.js)
- [vue](https://ghub.io/vue): Reactive, component-oriented view layer for modern web interfaces.


## Contributors
Pull requests and stars are always welcome. For bugs and feature requests, please [create an issue](https://github.com/TiagoDanin/Nuxt-SEO/issues). [List of all contributors](https://github.com/TiagoDanin/Nuxt-SEO/graphs/contributors).


## License
[MIT](LICENSE) © [Tiago Danin](https://TiagoDanin.github.io)
