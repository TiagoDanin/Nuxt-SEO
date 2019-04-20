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
		description: '<description default'
		//...
	}
}
```

### Module options

#### `name`
- Default: `false`
- Type: String

#### `charset`
- Default: `utf-8`
- Type: String

#### `title`
- Default: `TITLE`
- Type: String

#### `lang`
- Default: `en`
- Type: String

#### `language`
- Default: `English`
- Type: String

#### `image`
- Default: `false`
- Type: URL String

#### `description`
- Default: `false`
- Type: String

#### `keywords`
- Default: `[]`
- Type: Array[...keywords] || String

#### `type`
- Default: `false`
- Types: [ogp.me/#types](http://ogp.me/#types)

### `author`
- Default: `false`
- Type: Array[name, email || site] || String

#### `url`
- Default: `false`
- Type: URL String

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
