<template>
    <div id="add-blog">
        <h2>Add a new post</h2>
		<form v-if="!submitted">
			<label>Blog title:</label>
			<input type="text" v-model="blog.title" required />
			<label>Blog content:</label>
			<textarea v-model="blog.content"/>
			<div id="label-checkboxes">
				<label>VueJS</label>
				<input type="checkbox" value="VueJS" v-model="blog.categories"/>
				<label>Golang</label>
				<input type="checkbox" value="Golang" v-model="blog.categories"/>
				<label>Ruby</label>
				<input type="checkbox" value="Ruby" v-model="blog.categories"/>
			</div>
			<label>Author:</label>
			<select v-model="blog.author">
				<option v-for="author in authors">{{ author }}</option>
			</select>
			<hr />
			<button v-on:click.prevent="post">Add Blog</button>
		</form>
		<div v-if="submitted">
			<h3>Your post has been submitted</h3>
		</div>
		<div id="preview">
			<h3>Preview post</h3>
			<p>Title: {{ blog.title }}</p>
			<p>Content:</p>
			<p>{{ blog.content }}</p>
			<p>Categories</p>
			<ul>
				<li v-for="category in blog.categories">{{ category }}</li>
			</ul>
			<p>Author: {{ blog.author }}</p>
		</div>
    </div>
</template>

<script>
export default {
  data() {
    return {
      blog: {
        title: "",
        content: "",
        categories: [],
        author: "JK Gunnink"
      },
      authors: ["JK Gunnink", "Guest"],
      submitted: false
    }
  },
  methods: {
    post: function() {
      this.$http.post("https://jksvueblog.firebaseio.com/posts.json", this.blog).then(function(data) {
        console.log(data)
        this.submitted = true
      })
    }
  }
}
</script>

<style>
#add-blog * {
  box-sizing: border-box;
}
#add-blog {
  margin: 20px auto;
  max-width: 500px;
}
label {
  display: block;
  margin: 20px 0 10px;
}
input[type="text"],
textarea {
  display: block;
  width: 100%;
  padding: 8px;
}
#preview {
  padding: 10px 20px;
  border: 1px dotted #ccc;
  margin: 30px 0;
}
h3 {
  margin-top: 10px;
}
#label-checkboxes input {
  display: inline-block;
  margin-right: 10px;
}
#label-checkboxes label {
  display: inline-block;
}
</style>
