import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

const store = {
  state: {
    user: {
      avatar: 'https://raw.githubusercontent.com/kraaas/vue-webapp/master/src/assets/img/avatar%403x.png',
      nickname: 'kraaas',
      job: '前端开发工程师',
      description: '技术栈：React, Angular, Vue， Node, Koa...',
      sex: '男',
      age: 23
    }
  },

  mutations: {
    updateUser(state, newUser) {
      state.user = newUser
    }
  },

  actions: {
    updateUser({ commit }, newUser) {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          commit('updateUser', newUser)
          resolve()
        }, 2000)
      })
    }
  }
}

export default new Vuex.Store(store)
