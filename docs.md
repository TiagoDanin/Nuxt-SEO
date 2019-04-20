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
