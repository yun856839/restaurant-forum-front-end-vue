import Vue from 'vue'
import Vuex from 'vuex'
import usersApi from './../apis/users'

Vue.use(Vuex)

export default new Vuex.Store({
  // data() 每個 Vue 元件都可以使用
  state: {    
    currentUser: {
      id: -1,
      name: "",
      email: "",
      image: "",
      isAdmin: false,
    },
    isAuthenticated: false,
  },

  // 修改 state 的方法, 使用 commit 
  mutations: {
    setCurrentUser(state, currentUser) {
      // 透過 API 取得的 currentUser 覆蓋 state.currentUser
      state.currentUser = {
        ...state.currentUser,
        ...currentUser
      }
      state.isAuthenticated = true
    }
  },

  // 透過 API 請求資料 設定其他的非同步函式, 使用 dispatch
  actions: {
    async fetchCurrentUser({ commit }) {
      try {
        const { data } = await usersApi.getCurrentUser()
         
        if (data.status === 'error') {
          throw new Error(data.message)
        }
        const { id, name, email, image, isAdmin } = data
        commit('setCurrentUser', {
          id,
          name,
          email, 
          image, 
          isAdmin
        })        
      } catch(err) {
        console.log('err msg', err)
      }
    }
  },  
  modules: {
  }
})
