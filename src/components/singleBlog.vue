<template>
	<div id="single-blog">
		<h1>{{ blog.title }}</h1>
		<article>{{ blog.content }}</article>
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
    this.$http
      .get(`https://jksvueblog.firebaseio.com/posts/${this.id}.json`)
      .then(function(res) {
        return res.json()
      })
      .then(function(res) {
        this.blog = res
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
