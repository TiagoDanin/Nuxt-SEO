<template>
	<h1>Hello World</h1>
</template>

<script>
	export default {
		asyncData: function(ctx) {
			ctx.seo({
				name: 'My App',
				title: 'Home Page',
				description: 'Hello World Page'
			})
		},
		head: {
			//title: 'Home Page'
		}
	}
</script>
