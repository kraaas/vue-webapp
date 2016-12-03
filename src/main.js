import Vue from 'vue'
import App from './app'
import VueRouter from 'vue-router'
import router from './router'
Vue.use(VueRouter)

new Vue({
	el: '#app',
	router,
	...App
})