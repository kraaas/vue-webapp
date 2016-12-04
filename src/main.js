import Vue from 'vue'
import App from './app'
import VueRouter from 'vue-router'
import Vuex from 'vuex'
import router from './router'
import storeConfig from './store' 
Vue.use(VueRouter)
Vue.use(Vuex)

const store = new Vuex.Store(storeConfig)

new Vue({
	el: '#app',
	store,
	router,
	...App
})
