<template>
	<div>
		<h1>Nuxt is the best</h1>
		<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo dolore dignissimos quaerat ducimus, nisi optio voluptates provident enim dicta quod debitis odit, dolor voluptatibus rerum dolorum mollitia? Quam, quis! Hic.</p>
		<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis veniam aspernatur, commodi ipsa temporibus hic suscipit rerum recusandae officia consequatur cum nisi pariatur necessitatibus dolores ratione totam libero! Ipsa, et!</p>
		<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Est dolores officia enim doloremque ipsa officiis blanditiis eaque nesciunt aliquid fugiat labore reprehenderit, molestiae qui aspernatur sunt excepturi culpa soluta minus.</p>
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
				title: 'Nuxt is the best',
				description: 'Hello World page in blog',
				openGraph: {
					title: 'openGraph title'
				}
			})
		}
	}
</script>
