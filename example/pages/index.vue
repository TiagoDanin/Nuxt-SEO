<template>
	<div>
		<h1>Hello World</h1>
		<p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Harum dolorem impedit ducimus animi exercitationem voluptatibus modi sapiente nostrum culpa tempore, consectetur ipsam natus enim optio corrupti similique eos hic magni.</p>
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
				title: 'Home Page'
			})
		}
	}
</script>
