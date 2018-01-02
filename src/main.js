import Vue from 'vue'
import VueResource from 'vue-resource'
import App from './App.vue'

Vue.use(VueResource)

// Filters

Vue.filter('snippet', function(blogpost) {
	return blogpost.slice(0,100) + '...'
})

// Custom directives
Vue.directive('rainbow', {
	bind(el, binding, vnode){
		el.style.color = "#" +  Math.random().toString(16).slice(2, 8)
	}
})

new Vue({
  el: '#app',
  render: h => h(App)
})
