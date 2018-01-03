<template>
    <div id="show-blogs">
        <h1>All Blog Articles</h1>
        <input type="text" v-model="search" placeholder="search blogs" />
        <div v-for="(blog, key) in filteredBlogs" class="single-blog">
            <router-link v-bind:to="/blog/ + blog.id"><h2>{{ blog.title | titleCase }}</h2></router-link>
            <article>
                {{ blog.content }}
                <router-link v-bind:to="/blog/ + blog.id"><p>Read full post</p></router-link>
            </article>
        </div>
    </div>
</template>

<script>
import searchMixin from "../mixins/searchMixin"
import titleCaseMixin from "../mixins/titleCaseMixin"

export default {
  data() {
    return {
      blogs: [],
      search: ""
    }
  },
  created() {
    this.$http
      .get("https://jksvueblog.firebaseio.com/posts.json")
      .then(function(data) {
        return data.json()
      })
      .then(function(data) {
        var blogsArray = []
        for (let key in data) {
          data[key].id = key
          blogsArray.push(data[key])
        }
        this.blogs = blogsArray
      })
  },
  directives: {
    rainbow: {
      bind(el, binding, vnode) {
        el.style.color =
          "#" +
          Math.random()
            .toString(16)
            .slice(2, 8)
      }
    }
  },
  mixins: [searchMixin]
}
</script>

<style>
#show-blogs {
  max-width: 800px;
  margin: 0px auto;
}
.single-blog {
  padding: 20px;
  margin: 20px 0;
  box-sizing: border-box;
  background: #eee;
}
</style>
