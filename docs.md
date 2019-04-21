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
