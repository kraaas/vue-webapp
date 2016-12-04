import Vue from 'vue'
import VueRouter from 'vue-router'
import User from './views/user'
import UserEdit from './views/user_edit'
Vue.use(VueRouter)

const routes = [{
  path: '/',
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
