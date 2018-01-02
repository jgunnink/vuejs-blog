<template>
    <div>
		<router-view />
    </div>
</template>

<script>
import addBlog from './components/addBlog.vue'
import listBlogs from './components/listBlogs.vue'
import showBlogs from './components/showBlogs.vue'

export default {
	components: {
		'add-blog': addBlog,
		'list-blogs': listBlogs,
		'show-blogs': showBlogs
	},
    data () {
        return {

        }
    },
    methods: {

    }
}
</script>
<style>
body{
    margin: 0;
    font-family: 'Nunito SemiBold';
}
</style>
