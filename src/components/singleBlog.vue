<template>
	<div id="single-blog">
		<h1>{{ blog.title }}</h1>
		<article>{{ blog.body }}</article>
		<br />
		<router-link to="/"><p>Home</p></router-link>
	</div>
</template>

<script>
export default {
	data() {
		return {
			id: this.$route.params.id,
			blog: {}
		}
	},
	created() {
		this.$http.get(`http://jsonplaceholder.typicode.com/posts/${this.id}`).then(function(res){
			console.log(res)
			this.blog = res.body
	  })
  }
}
</script>

<style>
#single-blog {
	max-width: 960px;
	margin: 0 auto;
}
</style>
