<template>
	<div>
		<h1>About</h1>
		<p>Duis exercitation id ullamco elit officia labore ex velit adipisicing cillum adipisicing.</p>
		<a href="https://github.com/TiagoDanin/Nuxt-SEO/">GitHub project</a>
		<br>
		<p>Links:</p>
		<ul>
			<li><nuxt-link to="/">Index</nuxt-link></li>
			<li><nuxt-link to="/news">News</nuxt-link></li>
			<li><nuxt-link to="/news?query=true">News with query</nuxt-link></li>
			<li><nuxt-link to="/about">About</nuxt-link></li>
		</ul>
	</div>
</template>

<script>
	export default {
		head: function() {
			return this.$seo({
				title: 'About'
			})
		}
	}
</script>