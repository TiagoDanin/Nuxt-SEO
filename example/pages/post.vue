<template>
	<h1>Hello World Two</h1>
</template>

<script>
	export default {
		asyncData: function(ctx) {
			ctx.seo({
				title: 'Hello',
				description: 'Hello World page in blog',
				openGraph: {
					title: 'openGraph title'
				}
			})
		}
	}
</script>
