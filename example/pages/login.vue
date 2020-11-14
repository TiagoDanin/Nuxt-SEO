<template>
	<div>
		<h1>Your user!</h1>
		<p>User: Tiago Danin.</p>
		<br>
		<p>Links:</p>
		<ul>
			<li><nuxt-link to="/">Index</nuxt-link></li>
			<li><nuxt-link to="/news">News</nuxt-link></li>
			<li><nuxt-link to="/news?query=true">News with query</nuxt-link></li>
			<li><nuxt-link to="/login?query=true">Login with query and canonical with trailing slash forced</nuxt-link></li>
			<li><nuxt-link to="/about">About</nuxt-link></li>
		</ul>
	</div>
</template>

<script>
	export default {
		head: function() {
			return this.$seo({
				title: 'Nuxt is the best',
				description: 'Tiago Danin User',
				isForcedTrailingSlash: true,
				openGraph: {
					title: 'openGraph title'
				}
			})
		}
	}
</script>
