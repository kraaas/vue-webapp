import VueRouter from 'vue-router'
import User from './views/user'
import UserEdit from './views/user_edit'

const routes = [{
	path: '/user',
	component: {
		template: '<div><router-view></router-view></div>'
	},
	children: [{
		path: '',
		component: User
	}, {
		path: 'edit',
		component: UserEdit
	}]
}]
export default new VueRouter({
	routes
})
