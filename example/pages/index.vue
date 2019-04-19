<template>
	<h1>Hello World</h1>
</template>

<script>
	export default {
		asyncData: function(ctx) {
			ctx.seo({
				title: 'test'
			})
			console.log(ctx.meta)
		},
		head: {
			//title: 'Home Page'
		}
	}
</script>
